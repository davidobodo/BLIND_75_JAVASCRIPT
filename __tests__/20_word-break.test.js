const { wordBreak } = require("../20_word-break");

describe("20. Word Break", () => {
	test("Case 1", () => {
		expect(wordBreak("leetcode", ["leet", "code"])).toBe(true);
	});
	test("Case 2", () => {
		expect(wordBreak("applepenapple", ["apple", "pen"])).toBe(true);
	});
	test("Case 3", () => {
		expect(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])).toBe(false);
	});
});
