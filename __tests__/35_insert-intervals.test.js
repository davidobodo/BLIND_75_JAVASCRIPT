const { insertInterval } = require("../35_insert-interval");

describe("35. Insert Interval", () => {
	test("Case 1", () => {
		expect(
			insertInterval(
				[
					[1, 3],
					[6, 9],
				],
				[2, 5]
			)
		).toStrictEqual([
			[1, 5],
			[6, 9],
		]);
	});
	test("Case 2", () => {
		expect(
			insertInterval(
				[
					[1, 2],
					[3, 5],
					[6, 7],
					[8, 10],
					[12, 16],
				],
				[4, 8]
			)
		).toStrictEqual([
			[1, 2],
			[3, 10],
			[12, 16],
		]);
	});
});
