function maxPathSum(root) {
	let max = root.val;

	function dfs(node) {
		if (!node) return 0;

		let leftSum = dfs(node.left);
		let rightSum = dfs(node.right);

		leftSum = Math.max(leftSum, 0);
		rightSum = Math.max(rightSum, 0);

		max = Math.max(node.val + leftSum + rightSum, max);

		return node.val + Math.max(leftSum, rightSum);
	}

	dfs(root);
	return max;
}

module.exports = { maxPathSum };
