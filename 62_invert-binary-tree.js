function invertTree(root) {
	if (!root) return null;

	let temp = root.left;
	root.left = root.right;
	root.right = temp;

	invertTree(root.left);
	invertTree(root.right);

	return root;
}

module.exports = { invertTree };
