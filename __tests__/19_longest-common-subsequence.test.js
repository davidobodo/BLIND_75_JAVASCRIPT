const { longestCommonSubsequenceDP } = require("../19_longest-common-subsequence");

describe("18. Longest Increasing Subsequence", () => {
	test("Case 1", () => {
		expect(longestCommonSubsequenceDP("abcde", "ace")).toBe(3);
	});
	test("Case 2", () => {
		expect(longestCommonSubsequenceDP("abc", "abc")).toBe(3);
	});
	test("Case 3", () => {
		expect(longestCommonSubsequenceDP("abc", "def")).toBe(0);
	});
});
