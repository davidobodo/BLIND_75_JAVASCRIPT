const { uniquePaths } = require("../25_unique-paths");

describe("25. Unique Paths", () => {
	test("Case 1", () => {
		expect(uniquePaths(3, 7)).toBe(28);
	});
	test("Case 2", () => {
		expect(uniquePaths(3, 2)).toBe(3);
	});
});
