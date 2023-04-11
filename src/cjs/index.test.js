const { main } = require("./index.cjs");

describe("package test with jest", () => {
	it("should work", async () => {
		const r = await main();
		expect(r).toBe(true);
	});
});
