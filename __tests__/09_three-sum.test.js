const { threeSum } = require("../09_three-sum");

describe("09. Three Sum", () => {
	test("Case 1", () => {
		expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
			[-1, -1, 2],
			[-1, 0, 1],
		]);
	});
	test("Case 2", () => {
		expect(threeSum([0, 1, 1])).toEqual([]);
	});
	test("Case 3", () => {
		expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
	});
});
