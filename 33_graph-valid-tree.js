function validTree(n, edges) {
	if (!n) return true;

	let adj = {};

	for (let i = 0; i < n; i++) {
		adj[i] = [];
	}

	for (let i = 0; i < edges.length; i++) {
		const [first, second] = edges[i];

		adj[first] = [...adj[first], second];
		adj[second] = [...adj[second], first];
	}

	let visited = new Set();

	function dfs(i, prev) {
		if (visited.has(i)) {
			return false;
		}
		visited.add(i);

		for (let j = 0; j < adj[i].length; j++) {
			if (adj[i][j] === prev) continue;
			if (!dfs(adj[i][j], i)) {
				return false;
			}
		}

		return true;
	}

	return dfs(0, -1) && n === visited.size;
}

console.log(
	validTree(5, [
		[0, 1],
		[0, 2],
		[0, 3],
		[1, 4],
	])
);
