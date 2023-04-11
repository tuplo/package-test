import { main } from "./index.mjs";

describe("package test with jest", () => {
	it("should work", async () => {
		const r = await main();
		expect(r).toBe(true);
	});
});
