const { maxSub } = require("../05_maximum-subarray");

describe("05. Maximum subarray", () => {
	test("Case 1", () => {
		expect(maxSub([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
	});
	test("Case 2", () => {
		expect(maxSub([1])).toBe(1);
	});
	test("Case 3", () => {
		expect(maxSub([5, 4, -1, 7, 8])).toBe(23);
	});
});
