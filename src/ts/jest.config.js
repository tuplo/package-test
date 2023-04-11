module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	testMatch: ["**/?(*.)+(test).ts"],
	transform: {
		"^.+\\.ts$": [
			"ts-jest",
			{
				tsconfig: "src/ts/tsconfig.commonjs.json",
			},
		],
	},
};
