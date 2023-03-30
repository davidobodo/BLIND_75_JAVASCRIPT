class TrieNode {
	constructor() {
		this.children = {};
		this.endOfWord = false;
	}
}

class WordDictionary {
	constructor() {
		this.root = new TrieNode();
	}

	add(word) {
		let curr = this.root;

		for (let i = 0; i < word.length; i++) {
			const char = word[i];

			if (curr.children[char] === undefined) {
				curr.children[char] = new TrieNode();
			}

			curr = curr.children[char];
		}
	}

	search(word) {
		function dfs(node, j) {
			let curr = node;

			for (let i = j; i < word.length; i++) {
				const char = word[i];

				if (char === ".") {
					for (let key in curr.children) {
						if (dfs(curr.children[key], i + 1)) {
							return true;
						}
					}

					return false; // In case none of the children could return true
				} else {
					if (curr.children[char] === undefined) {
						return false;
					}
					curr = curr.children[char];
				}
			}

			return curr.endOfWord;
		}

		return dfs(this.root, 0);
	}
}
