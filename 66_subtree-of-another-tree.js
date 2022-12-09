const { isSameTree } = require("./61_same-tree");
function isSubTree(root, subRoot) {
	if (!root) return false;

	if (!subRoot) return true;

	if (isSameTree(root, subRoot)) return true;

	return isSubTree(root.left, subRoot) || isSubTree(root.right, subRoot);
}

module.exports = { isSubTree };
