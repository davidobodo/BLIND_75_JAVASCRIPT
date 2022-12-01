const { coinChange } = require("../17_coin-change");

describe("17. Coin change", () => {
	test("Case 1", () => {
		expect(coinChange([1, 2, 5], 11)).toBe(3);
	});
	test("Case 2", () => {
		expect(coinChange([2], 3)).toBe(-1);
	});
	test("Case 3", () => {
		expect(coinChange([1], 0)).toBe(0);
	});
});
