const { decodeWays } = require("../24_decode-ways");

describe("24. Decode ways", () => {
	test("Case 1", () => {
		expect(decodeWays("12")).toBe(2);
	});
	test("Case 2", () => {
		expect(decodeWays("226")).toBe(3);
	});
	test("Case 3", () => {
		expect(decodeWays("06")).toBe(0);
	});
});
