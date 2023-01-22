const { houseRobber2 } = require("../23_house-robber-2");

describe("23. House Robber 2", () => {
	test("Case 1", () => {
		expect(houseRobber2([2, 3, 2])).toBe(3);
	});
	test("Case 2", () => {
		expect(houseRobber2([1, 2, 3, 1])).toBe(4);
	});
	test("Case 3", () => {
		expect(houseRobber2([1, 2, 3])).toBe(3);
	});
});
