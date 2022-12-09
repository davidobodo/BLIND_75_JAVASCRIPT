function buildTree(preorder, inorder) {
	if (!preorder.length || !inorder.length) return null;

	const node = new TreeNode(preorder[0]);
	const position = inorder.findIndex((item) => item === preorder[0]);

	node.left = buildTree(preorder.slice(1, 1 + position), inorder.slice(0, position));
	node.right = buildTree(preorder.slice(1 + position), inorder.slice(1 + position));

	return node;
}

module.exports = { buildTree };
