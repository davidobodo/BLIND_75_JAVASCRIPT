const { maxArea } = require("../10_container-with-most-water");

describe("10. Container with most water", () => {
	test("Case 1", () => {
		expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
	});
	test("Case 2", () => {
		expect(maxArea([1, 1])).toBe(1);
	});
});
