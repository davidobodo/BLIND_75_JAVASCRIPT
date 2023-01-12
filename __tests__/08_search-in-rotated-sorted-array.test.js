const { searchInRotated } = require("../08_search-in-rotated-sorted-array");

describe("08. Search in Rotated Sorted Array", () => {
	test("Case 1", () => {
		expect(searchInRotated([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
	});
	test("Case 2", () => {
		expect(searchInRotated([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
	});
	test("Case 3", () => {
		expect(searchInRotated([1], 0)).toBe(-1);
	});
});
