const { numsIslands } = require("../30_number-of-islands");

describe("30. Number of Islands", () => {
	test("Case 1", () => {
		expect(
			numsIslands([
				["1", "1", "1", "1", "0"],
				["1", "1", "0", "1", "0"],
				["1", "1", "0", "0", "0"],
				["0", "0", "0", "0", "0"],
			])
		).toBe(1);
	});
	test("Case 2", () => {
		expect(
			numsIslands([
				["1", "1", "0", "0", "0"],
				["1", "1", "0", "0", "0"],
				["0", "0", "1", "0", "0"],
				["0", "0", "0", "1", "1"],
			])
		).toBe(3);
	});
});
