import { createFileRoute, Link } from "@tanstack/react-router";
import FormComponent from "@/components/form";
import { createTestData } from "@/data/test-data";

export const Route = createFileRoute("/test/input")({
	component: RouteComponent,
});

function RouteComponent() {
	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		const name = formData.get("name") as string;
		const title = formData.get("title") as string;
		const description = formData.get("description") as string;

		await createTestData({ data: { name, title, description } });
	}

	return (
		<div className="mx-auto max-w-md mt-10">
			<Link
				className="bg-blue-400 text-white p-2 rounded w-20 text-center"
				to="/"
			>
				Home
			</Link>

			<FormComponent onSubmit={handleSubmit} />
		</div>
	);
}
