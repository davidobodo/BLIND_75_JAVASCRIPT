const { MinHeap, ListNode } = require("./utils");

// SOLUTION MAKES USE OF MIN HEAP
function mergeKLists(lists) {
	if (!lists || lists.length === 0) {
		return null;
	}

	const heap = new MinHeap();

	for (let i = 0; i < lists.length; i++) {
		const list = lists[i];
		let dummy = new ListNode();
		dummy.next = list;
		let p = dummy;
		p = p.next;
		while (p) {
			if (p.val !== undefined) {
				heap.insert(p.val);
			}
			p = p.next;
		}
	}

	let dummy = new ListNode();
	let curr = dummy;

	while (heap.heap.length > 0) {
		const val = heap.remove();
		const newNode = new ListNode(val);
		curr.next = newNode;
		curr = curr.next;
	}

	return dummy.next;
}

exports.module = { mergeKLists };
