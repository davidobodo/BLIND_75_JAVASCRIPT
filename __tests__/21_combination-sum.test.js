const { combinationSum } = require("../21_combination-sum");

describe("21. Combination sum", () => {
	test("Case 1", () => {
		expect(combinationSum([2, 3, 6, 7], 7)).toEqual([[2, 2, 3], [7]]);
	});
	test("Case 2", () => {
		expect(combinationSum([2, 3, 5], 8)).toEqual([
			[2, 2, 2, 2],
			[2, 3, 3],
			[3, 5],
		]);
	});
	test("Case 3", () => {
		expect(combinationSum([2], 1)).toEqual([]);
	});
});
