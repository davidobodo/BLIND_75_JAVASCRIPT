const { longestSubstringWithoutRepeating } = require("../50_longest-substring-without-repeating-characters");

describe("50. Longest substring without repeating characters", () => {
	test("Case 1", () => {
		const trie = new TrieClass();
		trie.insert("apple");
		expect(trie.search("apple")).toBe(true);
		expect(trie.search("app")).toBe(false);
		expect(trie.startsWith("app")).toBe(true);
		trie.insert("app");
		expect(trie.search("app")).toBe(true);
	});
});
