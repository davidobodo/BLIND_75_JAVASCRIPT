const { numOfBits } = require("../12_number-of-bits");

describe("12. Number of bits", () => {
	test("Case 1", () => {
		expect(numOfBits(00000000000000000000000000001011)).toBe(3);
	});
	test("Case 2", () => {
		expect(numOfBits(00000000000000000000000010000000)).toBe(1);
	});
	test("Case 3", () => {
		expect(numOfBits(11111111111111111111111111111101)).toBe(31);
	});
});
