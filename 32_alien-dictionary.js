function alienDictionary(words) {
	/**
	 * Topological sort algorithm
	 * DAG - Directed acyclical graph: Graph that has directed edges but no cycles
	 *
	 * Post order DFS
	 */

	let adj = {};

	for (let i = 0; i < words.length; i++) {
		const word = words[i];

		for (let j = 0; j < word.length; j++) {
			const letter = word[j];
			adj[letter] = new Set();
		}
	}

	//Go through pair of words to fill adj list
	for (let i = 0; i < words.length; i++) {
		let word1 = words[i];
		let word2 = words[i + 1];

		let minLength = word1.length;

		if (word2) {
			minLength = Math.min(word1.length, word2.length);

			//Have same prefix and word 1 length is greater than word2 length
			if (word1.length > word2.length && word1.slice(0, minLength) === word2.slice(0, minLength)) {
				return "";
			}

			for (let j = 0; j < minLength; j++) {
				//Different characters
				if (word1[j] !== word2[j]) {
					console.log(word1[j], word2[j]);
					adj[word1[j]].add(word2[j]);
					break;
				}
			}
		}
	}
	console.log(adj, "TEH ADJACENT AFTER FILLING");

	let visited = {}; //False = visited, True = visited and in current path
	let res = [];

	function dfs(letter) {
		if (visited[letter] !== undefined) {
			return visited[letter];
		}

		//About to go through its path
		visited[letter] = true;

		adj[letter].forEach((element) => {
			if (dfs(element)) {
				return true;
			}
		});

		//No longer in the current path
		visited[letter] = false;
		res.push(letter);
	}

	for (let key in adj) {
		if (dfs(key)) {
			return "";
		}
	}

	console.log(res, "TEH RESPONSE");
	const output = res.reverse().join("");
	console.log(output, "TEH OUTPUT");
	return output;
}

alienDictionary(["wrt", "wrf", "er", "ett", "rftt"]);
//wertf
