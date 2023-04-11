import dynoexpr from "@tuplo/dynoexpr";

async function main() {
	const r = dynoexpr({
		Update: { color: "blue" },
	});

	console.log(r);
}

main();
