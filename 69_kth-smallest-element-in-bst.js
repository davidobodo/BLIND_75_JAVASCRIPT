function kthSmallest() {
	const stack = [root];

	let curr = root.left;
	let count = 0;

	//NOTE: Smallest element would tend to be more at the left
	//Inorder traversal, so left nodes first
	while (stack.length > 0) {
		if (curr) {
			stack.push(curr); //since we have not yet processed it
			curr = curr.left;
		} else {
			//gotten to the leaf node
			const removed = stack.pop(); //process the node
			count++;
			curr = removed.right;

			if (j === k) {
				return removed.val;
			}
		}
	}
}

module.exports = { kthSmallest };
