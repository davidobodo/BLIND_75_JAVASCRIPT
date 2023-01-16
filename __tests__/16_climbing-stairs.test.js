const { climbingStairs, climbingStairsConstantMemory } = require("../16_climbing-stairs");

describe("16.A Climbing Stairs", () => {
	test("Case 1", () => {
		expect(climbingStairs(2)).toBe(2);
	});
	test("Case 2", () => {
		expect(climbingStairs(3)).toBe(3);
	});
});

describe("16.B Climbing Stairs - constant memory", () => {
	test("Case 1", () => {
		expect(climbingStairsConstantMemory(2)).toBe(2);
	});
	test("Case 2", () => {
		expect(climbingStairsConstantMemory(3)).toBe(3);
	});
});
