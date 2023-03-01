const { canJump } = require("../26_jump-game");

describe("26. Jump Game", () => {
	test("Case 1", () => {
		expect(canJump([2, 3, 1, 1, 4])).toBe(true);
	});
	test("Case 2", () => {
		expect(canJump([3, 2, 1, 0, 4])).toBe(false);
	});
});
