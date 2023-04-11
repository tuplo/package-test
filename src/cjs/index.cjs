const dynoexpr = require("@tuplo/dynoexpr");
const assert = require("node:assert/strict");

async function main() {
	const r = dynoexpr({
		Update: { color: "blue" },
	});

	const value = Boolean(r);
	assert(value !== false);

	return value;
}

main();

module.exports = { main };
