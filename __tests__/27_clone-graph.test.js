const { cloneGraph } = require("../27_clone-graph");

describe("27. Clone Graph", () => {
	test("Case 1", () => {
		expect(
			cloneGraph([
				[2, 4],
				[1, 3],
				[2, 4],
				[1, 3],
			])
		).toEqual([
			[2, 4],
			[1, 3],
			[2, 4],
			[1, 3],
		]);
	});
	test("Case 2", () => {
		expect(cloneGraph([[]])).toBe([[]]);
	});
	test("Case 3", () => {
		expect(cloneGraph([])).toBe([]);
	});
});
