function Node(val) {
	this.val = val;
	this.neighbors = neigh;
}

function cloneGraph() {
	if (!node) {
		return null;
	}

	let oldToNew = {};

	function dfs(node) {
		if (oldToNew[node.val]) {
			return oldToNew[node.val];
		}

		const clone = new Node(node.val);
		oldToNew[node.val] = clone;

		for (let i = 0; i < node.neighbors.length; i++) {
			clone.neighbors.push(dfs(node.neighbors[i]));
		}

		return clone;
	}

	return dfs(node);
}
