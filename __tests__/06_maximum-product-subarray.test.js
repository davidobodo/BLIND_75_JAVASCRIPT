const { maxProductSubarray } = require("../06_maximum-product-subarray");

describe("06. Maximum product subarray", () => {
	test("Case 1", () => {
		expect(maxProductSubarray([2, 3, -2, 4])).toBe(6);
	});
	test("Case 2", () => {
		expect(maxProductSubarray([-2, 0, -1])).toBe(0);
	});
});
