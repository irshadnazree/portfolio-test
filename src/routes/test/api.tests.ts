import { createFileRoute } from "@tanstack/react-router";
import { json } from "@tanstack/react-start";
import { getTestData } from "@/data/test-data";

export const Route = createFileRoute("/test/api/tests")({
	server: {
		handlers: {
			GET: async () => {
				const data = await getTestData();
				return json(data);
			},
		},
	},
});
