function validateTree(root) {
	function isValid(node, lowest, highest) {
		if (!node) return true;

		if (lowest < node.val && highest > node.val) {
			return isValid(node.left, lowest, node.val) && isValid(node.right, node.val, highest);
		} else {
			return false;
		}
	}

	return isValid(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
}

module.exports = { validateTree };
