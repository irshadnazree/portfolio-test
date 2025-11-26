import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import FormComponent from "@/components/form";
import { createTestData, getTestData } from "@/data/test-data";

export const Route = createFileRoute("/test/combo")({
	ssr: "data-only",
	loader: async () => await getTestData(),
	component: RouteComponent,
});

function RouteComponent() {
	const data = Route.useLoaderData();
	const router = useRouter();
	const [isSubmitting, setIsSubmitting] = useState(false);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			const form = e.currentTarget; // safer than e.target
			const formData = new FormData(form);

			const name = formData.get("name") as string;
			const title = formData.get("title") as string;
			const description = formData.get("description") as string;

			await createTestData({ data: { name, title, description } });

			// Wait for this route's loader to finish reloading
			await router.invalidate();
			// or: await router.invalidateRoute({ to: "/test/combo" });
		} catch (error) {
			console.error(error);
		} finally {
			// This runs only after router.invalidate() completes (or errors),
			// so submitting state ends after reload is done.
			setIsSubmitting(false);
		}
	}

	return (
		<div className="mx-auto max-w-md mt-10">
			<Link
				className="bg-blue-400 text-white p-2 rounded w-20 text-center"
				to="/"
			>
				Home
			</Link>

			<FormComponent onSubmit={handleSubmit} isLoading={isSubmitting} />

			<ul className="mt-10">
				{data.map((item: Record<string, NonNullable<unknown>>) => (
					<li key={item.id as string}>{item.name as string}</li>
				))}
			</ul>
		</div>
	);
}
