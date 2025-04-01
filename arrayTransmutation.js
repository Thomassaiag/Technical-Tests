const transmuteArray = (grid, rules) => {
	const gridWidth = grid[0].length;
	const gridHeight = grid.length;
	let finalTable = [];
	for (let y = 0; y < gridHeight - 1; y++) {
		let newLine = [];
		for (let x = 0; x < gridWidth - 1; x++) {
			let tableToTransmute = [];

			tableToTransmute.push(
				grid[y][x],
				grid[y][x + 1],
				grid[y + 1][x],
				grid[y + 1][x + 1]
			);

			let ruleToApply = rules.find((rule) => {
				return (
					JSON.stringify(rule["pattern"]) ===
					JSON.stringify(tableToTransmute)
				);
			});

			let resultToAdd = ruleToApply ? parseInt(ruleToApply.rule) : 0;

			newLine.push(resultToAdd);
		}
		finalTable.push(newLine);
	}
	return finalTable;
};

console.log(
	transmuteArray(
		[
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		],
		[
			{ pattern: [1, 2, 4, 5], rule: "4" },
			{ pattern: [2, 3, 5, 6], rule: "5" },
			{ pattern: [4, 5, 7, 8], rule: "7" },
		]
	)
);
