const { houseRobber } = require("../22_house-robber");

describe("22. House Robber", () => {
	test("Case 1", () => {
		expect(houseRobber([1, 2, 3, 1])).toBe(4);
	});
	test("Case 2", () => {
		expect(houseRobber([2, 7, 9, 3, 1])).toBe(12);
	});
});
