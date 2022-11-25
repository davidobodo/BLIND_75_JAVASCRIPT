const { containsDuplicates } = require("../03_contains-duplicates");

describe("03. Contains Duplicates", () => {
	test("Case 1", () => {
		expect(containsDuplicates([1, 2, 3, 1])).toBe(true);
	});
	test("Case 2", () => {
		expect(containsDuplicates([1, 2, 3, 4])).toBe(false);
	});
	test("Case 3", () => {
		expect(containsDuplicates([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
	});
});
