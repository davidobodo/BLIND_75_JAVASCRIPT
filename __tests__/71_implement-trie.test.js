const { TrieClass, TriePrototype } = require("../71_implement-trie");

describe("71.1 Trie Class", () => {
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
describe("71.2 Trie Prototype", () => {
	test("Case 1", () => {
		const trie = new TriePrototype();
		trie.insert("apple");
		expect(trie.search("apple")).toBe(true);
		expect(trie.search("app")).toBe(false);
		expect(trie.startsWith("app")).toBe(true);
		trie.insert("app");
		expect(trie.search("app")).toBe(true);
	});
});
