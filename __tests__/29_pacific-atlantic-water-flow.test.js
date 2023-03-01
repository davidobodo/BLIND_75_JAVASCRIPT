const { pacificAtlantic } = require("../29_pacific-atlantic-water-flow");

describe("29. Pacific Atlantic", () => {
	test("Case 1", () => {
		expect(
			pacificAtlantic([
				[1, 2, 2, 3, 5],
				[3, 2, 3, 4, 4],
				[2, 4, 5, 3, 1],
				[6, 7, 1, 4, 5],
				[5, 1, 1, 2, 4],
			])
		).toEqual([
			[0, 4],
			[1, 3],
			[1, 4],
			[2, 2],
			[3, 0],
			[3, 1],
			[4, 0],
		]);
	});
	test("Case 2", () => {
		expect(pacificAtlantic([[1]])).toEqual([[0, 0]]);
	});
});
