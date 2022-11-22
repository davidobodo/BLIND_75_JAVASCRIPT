const { hasCycle } = require("../41_detect-cycle-in-linked-list");
describe("41. Detect cycle in linked list", () => {
	test("Case 1", () => {
		expect(hasCycle([3, 2, 0, -4])).toBe(true);
	});
	test("Case 2", () => {
		expect(hasCycle([1, 2])).toBe(true);
	});
	test("Case 3", () => {
		expect(hasCycle([1])).toBe(false);
	});
});
