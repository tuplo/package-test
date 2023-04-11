import { main } from "./index";

describe("package test with jest", () => {
	it("should work", async () => {
		const r = await main();
		expect(r).toBe(true);
	});
});
