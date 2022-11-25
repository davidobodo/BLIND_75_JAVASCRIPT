describe("71.1 Trie Class", () => {
	test("Case 1", () => {
		findWords(
			[
				["o", "a", "a", "n"],
				["e", "t", "a", "e"],
				["i", "h", "k", "r"],
				["i", "f", "l", "v"],
			],
			["oath", "pea", "eat", "rain"]
		);

		//["oath","eat"]
	});

	test("Case 2", () => {
		findWords(
			[
				["a", "b"],
				["c", "d"],
			],
			["abcb"]
		);
		//[]
	});
	test("Case 2", () => {
		findWords(
			[
				["o", "a", "b", "n"],
				["o", "t", "a", "e"],
				["a", "h", "k", "r"],
				["a", "f", "l", "v"],
			],
			["oa", "oaa"]
		);
		//["oa","oa"]
	});
	test("Case 2", () => {
		findWords([["a", "a"]], ["aaa"]);
		//[]
		//["oa","oa"]
	});
});
