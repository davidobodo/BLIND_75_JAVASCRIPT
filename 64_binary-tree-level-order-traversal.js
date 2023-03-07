function levelOrder(root) {
	let queue = [root];
	let output = [];

	while (queue.length > 0) {
		let levelNodes = [];

		//Since we are going to mutate queue, we need to store the length of the queue before we started mutating it
		const currQueue = queue.length;

		for (let i = 0; i < currQueue; i++) {
			const toProcess = queue.shift();
			if (!toProcess) {
				return [];
			}

			if (toProcess?.left) {
				queue.push(toProcess.left);
			}

			if (toProcess?.right) {
				queue.push(toProcess.right);
			}

			levelNodes.push(toProcess.val);
		}

		output.push(levelNodes);
	}

	return output;
}
