const { getSum } = require("../11_sum-of-two-integers");

describe("11. Sum of two integers", () => {
	test("Case 1", () => {
		expect(getSum(1, 2)).toBe(3);
	});
	test("Case 2", () => {
		expect(getSum(2, 3)).toBe(5);
	});
});
