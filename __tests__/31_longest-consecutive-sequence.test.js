const { longestConsecutiveSequence } = require("../31_longest-consecutive-sequence");

describe("31. Longest Consecutive Sequence", () => {
	test("Case 1", () => {
		expect(longestConsecutiveSequence([100, 4, 200, 1, 3, 2])).toBe(4);
	});
	test("Case 2", () => {
		expect(longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9);
	});
});
