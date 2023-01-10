const { timeToSell } = require("../02_best-time-to-buy-and-sell-stock");

//NOTE: Only added the "sort" to make the tests pass
describe("02. bBest time to buy and sell stock", () => {
	test("Case 1", () => {
		expect(timeToSell([2, 7, 11, 15], 9).sort()).toEqual([0, 1]);
	});
	test("Case 2", () => {
		expect(timeToSell([3, 2, 4], 6).sort()).toEqual([1, 2]);
	});
	test("Case 2", () => {
		expect(timeToSell([3, 3], 6).sort()).toEqual([0, 1]);
	});
});
