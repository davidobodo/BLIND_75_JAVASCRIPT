//TIME COMPLEXITY = O(n)
//SPACE COMPLEXITY = O(1)

function hasCycle(head) {
	let fast = head;
	let slow = head;

	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
		if (slow === fast) {
			return true;
		}
	}

	return false;
}

//TODO: Explanation

//TODO: Console

module.exports = { hasCycle };
