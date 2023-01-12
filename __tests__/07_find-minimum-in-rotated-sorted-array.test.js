const { findMin } = require("../07_find-minimum-in-rotated-sorted-array");

describe("07. Find Minimum in Rotated Sorted Array", () => {
	test("Case 1", () => {
		expect(findMin([3, 4, 5, 1, 2])).toBe(1);
	});
	test("Case 2", () => {
		expect(findMin([4, 5, 6, 7, 0, 1, 2])).toBe(0);
	});
	test("Case 3", () => {
		expect(findMin([11, 13, 15, 17])).toBe(11);
	});
});
