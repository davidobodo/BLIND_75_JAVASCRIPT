//DFS

//UNION FIND
function connected(n, edges) {
	let adj = {};

	//Create list
	for (let i = 0; i < edges.length; i++) {
		const first = edges[i][0];
		const second = edges[i][1];

		if (!adj[first]) {
			adj[first] = [];
		}
		if (!adj[second]) {
			adj[second] = [];
		}
	}

	//Fill list
	for (let i = 0; i < edges.length; i++) {
		const first = edges[i][0];
		const second = edges[i][1];

		if (adj[first]) {
			adj[first] = [...adj[first], second];
		}
		if (adj[second]) {
			adj[second] = [...adj[second], first];
		}
	}

	console.log(adj, "===TEH ADJACENCY LIST");
	let connected = 0;

	let visited = new Set();

	function dfs(key) {
		if (visited.has(key)) {
			return;
		}
		visited.add(key);

		for (let i = 0; i < adj[key].length; i++) {
			dfs(adj[key][i]);
		}

		return 1;
	}

	for (let key in adj) {
		const count = dfs(key);
		connected = connected + count;
	}

	console.log(connected, "THE CONNECTED");
}

console.log(
	connected(5, [
		[0, 1],
		[1, 2],
		[3, 4],
	])
);
