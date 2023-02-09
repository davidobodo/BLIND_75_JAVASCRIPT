const { isValid } = require("../55_valid-parentheses");

describe("55. Valid Parenthesis", () => {
	test("Case 1", () => {
		expect(validAnagram("anagram", "nagaram")).toBe(true);
	});
	test("Case 2", () => {
		expect(validAnagram("rat", "car")).toBe(false);
	});
	test("Case 3", () => {
		expect(validAnagram("ab", "a")).toBe(false);
	});
});
