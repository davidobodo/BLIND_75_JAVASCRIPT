const { climbingStairs } = require("../16_climbing-stairs");

describe("16. Climbing Stairs", () => {
	test("Case 1", () => {
		expect(climbingStairs(2)).toBe(2);
	});
	test("Case 2", () => {
		expect(climbingStairs(3)).toBe(3);
	});
});
