const { reverseIterative } = require("./40_reverse-linked-list");

function reorderList(head) {
	let slow = head;
	let fast = head;

	//the moment this condition is NOT fulfilled the slow pointer would be at the middle
	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
	}

	let list1 = head;
	let list2 = reverseIterative(slow.next); // reverss the second side of the list because of the way we are merging
	slow.next = null; // so that list1, stops at the middle

	let p1 = list1;
	let p2 = list2;

	while (p1 && p2) {
		let p1next = p1.next;
		let p2next = p2.next;
		p1.next = p2;
		p2.next = p1next;

		p1 = p2.next;
		p2 = p2next;
	}
}

module.exports = { reorderList };
