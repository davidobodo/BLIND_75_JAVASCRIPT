function maxDepthRecursiveDFS(node) {
	if (!node) return 0;

	return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
}

module.exports = { maxDepthRecursiveDFS };
