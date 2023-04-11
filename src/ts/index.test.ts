import { main } from "./index";

describe("package test with TS", () => {
	it("should work", async () => {
		const r = await main();
		expect(r).toBe(true);
	});
});
