const { twoSum } = require("../01_two-sum");

//NOTE: Only added the "sort" to make the tests pass
describe("01. Two Sum", () => {
	test("Case 1", () => {
		expect(twoSum([2, 7, 11, 15], 9).sort()).toEqual([0, 1]);
	});
	test("Case 2", () => {
		expect(twoSum([3, 2, 4], 6).sort()).toEqual([1, 2]);
	});
	test("Case 3", () => {
		expect(twoSum([3, 3], 6).sort()).toEqual([0, 1]);
	});
});
