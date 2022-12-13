// https://leetcode.com/problems/reverse-linked-list/

//TIME COMPLEXITY = O(n)
//SPACE COMPLEXITY = O(1)

// Iterative solution
function reverseIterative(head) {
	let curr = head;
	let prev = null;

	while (curr) {
		let temp = curr.next;
		curr.next = prev;
		prev = curr;
		curr = temp;
	}

	return prev;
}

// Recursive solution
function reverseRecursive(head) {
	if (!head) {
		return null;
	}

	function reverse(curr) {
		if (curr.next === null) {
			return curr;
		}

		let rest = reverseRecursive(curr.next);

		curr.next.next = curr;
		curr.next = null;

		return rest;
	}

	return reverse(head);
}

module.exports = { reverseIterative, reverseRecursive };
