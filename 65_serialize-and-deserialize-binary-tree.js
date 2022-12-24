const { TreeNode } = require("./utils");
function serialize(root) {
	const res = [];

	function dfs(node) {
		if (node) {
			res.push("N");
			return;
		}
		res.push(node.val.toString());
		dfs(node.left);
		dfs(node.right);
	}
	dfs(root);

	return res.join(",");
}

function deserialize(data) {
	const vals = data.split(",");
	let pos = 0;

	function dfs() {
		if (vals[pos] === "N") {
			pos++;
			return null;
		}
		const node = new TreeNode(parseInt(vals[pos]));
		pos++;
		node.left = dfs();
		node.right = dfs();
		return node;
	}

	return dfs();
}
