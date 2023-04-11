const dynoexpr = require("@tuplo/dynoexpr");

async function main() {
	const r = dynoexpr({
		Update: { color: "blue" },
	});

	console.log(r);
}

main();
