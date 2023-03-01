const { GraphNode } = require("./utils");

function cloneGraph(node) {
	let oldToNew = {};

	function dfs(node) {
		if (!node) {
			return null;
		}

		if (oldToNew[node.val] !== undefined) {
			return oldToNew[node.val];
		}

		const clone = new GraphNode(node.val);
		oldToNew[node.val] = clone;

		for (let i = 0; i < node.neighbors.length; i++) {
			clone.neighbors.push(dfs(node.neighbors[i]));
		}

		return clone;
	}

	return dfs(node);
}

module.exports = { cloneGraph };
