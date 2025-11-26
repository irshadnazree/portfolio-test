import { createFileRoute, Link } from "@tanstack/react-router";
import { getTestData } from "@/data/test-data";

export const Route = createFileRoute("/test/")({
	ssr: "data-only",
	loader: async () => await getTestData(),
	component: RouteComponent,
});

function RouteComponent() {
	const data = Route.useLoaderData();
	return (
		<div className="mx-auto max-w-md mt-10">
			<Link
				className="bg-blue-400 text-white p-2 rounded w-20 text-center"
				to="/"
			>
				Home
			</Link>

			<ul className="mt-10">
				{data.map((item: Record<string, NonNullable<unknown>>) => (
					<li key={item.id as string}>{item.name as string}</li>
				))}
			</ul>
		</div>
	);
}
