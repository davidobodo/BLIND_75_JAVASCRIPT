const { reverseIterative, reverseRecursive } = require("../40_reverse-linked-list");

describe("40.1 Reverse Linked List (ITERATIVELY)", () => {
	test("Case 1", () => {
		expect(reverseIterative([1, 2, 3, 4, 5])).toStrictEqual([5, 4, 3, 2, 1]);
	});
	test("Case 2", () => {
		expect(reverseIterative([1, 2])).toStrictEqual([2, 1]);
	});
	test("Case 3", () => {
		expect(reverseIterative([])).toStrictEqual([]);
	});
});
describe("40.2 Reverse Linked List (RECURSIVELY)", () => {
	test("Case 1", () => {
		expect(reverseRecursive([1, 2, 3, 4, 5])).toStrictEqual([5, 4, 3, 2, 1]);
	});
	test("Case 2", () => {
		expect(reverseRecursive([1, 2])).toStrictEqual([2, 1]);
	});
	test("Case 3", () => {
		expect(reverseRecursive([])).toStrictEqual([]);
	});
});
