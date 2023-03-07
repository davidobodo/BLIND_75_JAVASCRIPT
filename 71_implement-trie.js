const { TrieNode } = require("./utils");

//-----------------------------------------------------------
// SOLUTION - Using Prototype
//-----------------------------------------------------------
function TriePrototype() {
	this.root = new TrieNode();
}

TriePrototype.prototype.insert = function (word) {
	let curr = this.root;

	for (let i = 0; i < word.length; i++) {
		const letter = word[i];
		if (curr.children[letter] === undefined) {
			curr.children[letter] = new TrieNode();
		}
		curr = curr.children[letter];
	}

	curr.endOfWord = true;
};

TriePrototype.prototype.search = function (word) {
	let curr = this.root;
	for (let i = 0; i < word.length; i++) {
		const letter = word[i];
		if (curr.children[letter] === undefined) {
			return false;
		}
		curr = curr.children[letter];
	}

	return curr.endOfWord;
};

TriePrototype.prototype.startsWith = function (prefix) {
	let curr = this.root;
	for (let i = 0; i < prefix.length; i++) {
		const letter = prefix[i];
		if (curr.children[letter] === undefined) {
			return false;
		}
		curr = curr.children[letter];
	}

	return true;
};

//-----------------------------------------------------------
// SOLUTION - Using Class syntax
//-----------------------------------------------------------
class TrieClass {
	constructor() {
		this.root = new TrieNode();
	}

	insert(word) {
		let curr = this.root;

		for (let i = 0; i < word.length; i++) {
			const letter = word[i];
			if (curr.children[letter] === undefined) {
				curr.children[letter] = new TrieNode();
			}
			curr = curr.children[letter];
		}

		curr.endOfWord = true;
	}

	search(word) {
		let curr = this.root;
		for (let i = 0; i < word.length; i++) {
			const letter = word[i];
			if (curr.children[letter] === undefined) {
				return false;
			}
			curr = curr.children[letter];
		}

		return curr.endOfWord;
	}

	startsWith(prefix) {
		let curr = this.root;
		for (let i = 0; i < prefix.length; i++) {
			const letter = prefix[i];
			if (curr.children[letter] === undefined) {
				return false;
			}
			curr = curr.children[letter];
		}

		return true;
	}
}

//-----------------------------------------------------------
// EXPLANATION/CONCEPT
//-----------------------------------------------------------
module.exports = { TrieClass, TriePrototype };
