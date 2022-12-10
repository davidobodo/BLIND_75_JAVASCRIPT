function lowestCommon(root, p, q) {
	let curr = root;

	while (root) {
		if (p.val > curr.val && q.val > curr.val) {
			curr = curr.right;
		} else if (p.val < curr.val && q.val < curr.val) {
			curr = curr.left;
		} else {
			return curr;
		}
	}
}

module.exports = { lowestCommon };
