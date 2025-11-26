import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<div className="mx-auto max-w-md mt-10">
			<div className="flex gap-2 flex-col items-center">
				<Link
					className="bg-blue-400 text-white p-2 rounded w-20 text-center"
					to="/test"
				>
					index
				</Link>
				<Link
					className="bg-blue-400 text-white p-2 rounded w-20 text-center"
					to="/test/input"
				>
					input
				</Link>
				<Link
					className="bg-blue-400 text-white p-2 rounded w-20 text-center"
					to="/test/combo"
				>
					combo
				</Link>
				<Link
					className="bg-blue-400 text-white p-2 rounded w-20 text-center"
					to="/test/api/tests"
				>
					api
				</Link>
			</div>
		</div>
	);
}
