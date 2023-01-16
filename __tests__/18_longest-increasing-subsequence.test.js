const { lis } = require("../18_longest-increasing-subsequence");

describe("18. Longest Increasing Subsequence", () => {
	test("Case 1", () => {
		expect(lis([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4);
	});
	test("Case 2", () => {
		expect(lis([0, 1, 0, 3, 2, 3])).toBe(4);
	});
	test("Case 3", () => {
		expect(lis([7, 7, 7, 7, 7, 7, 7])).toBe(1);
	});
});
