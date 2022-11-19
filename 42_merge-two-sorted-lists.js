/** @format */

//-----------------------------------------------------------
// SOLUTION
//-----------------------------------------------------------
function ListNode(val, next) {
	this.val = val || 0;
	this.next = next || null;
}

function mergeLists(list1, list2) {
	let p1 = list1;
	let p2 = list2;

	let newList = new ListNode();
	let current = newList;

	while (p1 && p2) {
		if (p1.val > p2.val) {
			current.next = p2;
			p2 = p2.next;
		} else {
			current.next = p1;
			p1 = p1.next;
		}
		current = current.next;
	}

	if (p1) {
		current.next = p1;
	}

	if (p2) {
		current.next = p2;
	}

	return newList.next;
}

//-----------------------------------------------------------
// EXPLANATION/CONCEPT
//-----------------------------------------------------------
/**
 * Keep two pointers
 * create a dummy node and set it as the current node
 * create two pointers to compare our linkedlists
 * point the current nodes next value to whichever of the pointers has a smaller value
 */

//-----------------------------------------------------------
// TEST CASES
//-----------------------------------------------------------
console.log(mergeLists([1, 2, 4], [1, 3, 4]));
console.log(mergeLists([], []));
console.log(mergeLists([], [0]));
