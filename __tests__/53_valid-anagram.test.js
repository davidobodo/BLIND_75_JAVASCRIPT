const { validAnagram } = require("../53_valid-anagram");

describe("53. Valid Anagram", () => {
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
