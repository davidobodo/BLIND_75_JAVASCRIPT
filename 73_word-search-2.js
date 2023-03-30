/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
	let found = [];

	let trie = new Trie();
	//Add words to trie
	for (let i = 0; i < words.length; i++) {
		trie.insert(words[i]);
	}

	console.log(trie, trie.root.children, "TEH TRIE");

	for (let i = 0; i < board.length; i++) {
		for (j = 0; j < board[i].length; j++) {
			//Get the board letter
			const currentBoardLetter = board[i][j];

			let word = trie.startsWith(currentBoardLetter);
			let visited = new Set();

			if (!word) {
				continue;
			} else {
				console.log(word, currentBoardLetter, i, j, "TEH WORD");

				const foundRemaining = dfs(board, i, j, "", found, visited);

				console.log(foundRemaining, "===TEH REMAINING");
				if (foundRemaining) {
					found.push(foundRemaining);
				}
			}
		}
	}

	return found;

	function dfs(board, i, j, previousLetters, found, visited) {
		console.log(visited, "TEH VISITED");
		if (i < 0 || i >= board.length || j < 0 || j >= board[i].length) {
			return false;
		}

		// console.log(previousLetters, 'BEFORE', i, j)

		if (visited.has(`${i}-${j}`)) {
			return false;
		} else {
			previousLetters = previousLetters + board[i][j];
		}
		// console.log(previousLetters, 'AFTER')

		if (!previousLetters) {
			return false;
		}

		if (!trie.startsWith(previousLetters)) {
			return false;
		}

		//Check if i have found a complete word
		if (trie.search(previousLetters) && !found.includes(previousLetters)) {
			return previousLetters;
		}

		visited.add(`${i}-${j}`);

		//passing condition
		let foundRemaining =
			dfs(board, i + 1, j, previousLetters, found, visited) ||
			dfs(board, i - 1, j, previousLetters, found, visited) ||
			dfs(board, i, j + 1, previousLetters, found, visited) ||
			dfs(board, i, j - 1, previousLetters, found, visited);

		// board[i][j] = temp;
		// previousLetters = "";

		return foundRemaining;
	}
};

function TrieNode() {
	this.children = {};
	this.endOfWord = false;
}
class Trie {
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

const answer = findWords(
	[
		["o", "a", "a", "n"],
		["e", "t", "a", "e"],
		["i", "h", "k", "r"],
		["i", "f", "l", "v"],
	],
	["oath", "pea", "eat", "rain", "hklf", "hf"]
);

console.log(answer, "TEH ANSWER TO BE GIVEN");
