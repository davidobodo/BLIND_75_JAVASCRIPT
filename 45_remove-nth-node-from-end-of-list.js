// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

function removeNode(head, n) {
	let dummy = new ListNode();
	dummy.next = head;

	let curr = dummy;
	let offset = dummy;
	let i = 0;

	while (i <= n) {
		offset = offset.next;
		i++;
	}

	while (offset) {
		offset = offset.next;
		curr = curr.next;
	}

	curr.next = curr.next.next;

	return dummy.next;
}

module.exports = { removeNode };
