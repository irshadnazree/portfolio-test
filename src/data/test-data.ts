import { env } from "cloudflare:workers";
import { createServerFn } from "@tanstack/react-start";

export const getTestData = createServerFn({
	method: "GET",
}).handler(async () => {
	const { results } = await env.portfolio_test_db
		.prepare("SELECT * FROM test")
		.all();

	return results as Record<string, NonNullable<unknown>>[];
});

export const createTestData = createServerFn({
	method: "POST",
}).handler(async ({ data }) => {
	if (!data) {
		throw new Error("Data is required");
	}

	const { results } = await env.portfolio_test_db
		.prepare("INSERT INTO test (name, title, description) VALUES (?, ?, ?)")
		.bind(
			data?.name as string,
			data?.title as string,
			data?.description as string,
		)
		.run();

	return results as Record<string, NonNullable<unknown>>[];
});
