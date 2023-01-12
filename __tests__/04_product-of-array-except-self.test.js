const { productExceptSelf } = require("../04_product-of-array-except-self");

describe("04. Product of array except self", () => {
	test("Case 1", () => {
		expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
	});
	test("Case 2", () => {
		expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([-0, 0, 9, -0, 0]);
	});
});
