const { timeToSell } = require("../02_best-time-to-buy-and-sell-stock");

describe("02. Best time to buy and sell stock", () => {
	test("Case 1", () => {
		expect(timeToSell([7, 1, 5, 3, 6, 4])).toEqual(5);
	});
	test("Case 2", () => {
		expect(timeToSell([7, 6, 4, 3, 1])).toEqual(0);
	});
});
