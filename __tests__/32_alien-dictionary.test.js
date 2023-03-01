const { alienDictionary } = require("../32_alien-dictionary");

describe("32. Alien Dictionary", () => {
	test("Case 1", () => {
		expect(alienDictionary(["wrt", "wrf", "er", "ett", "rftt"])).toBe("wertf");
	});
});
