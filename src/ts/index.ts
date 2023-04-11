import dynoexpr from "@tuplo/dynoexpr";
import assert from "node:assert/strict";

export async function main() {
	const r = dynoexpr({
		Update: { color: "blue" },
	});

	const value = Boolean(r);
	assert(value !== false);

	return value;
}

main();
