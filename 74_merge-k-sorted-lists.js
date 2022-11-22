function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

//-----------------------------------------------------------
// SOLUTION 1 - (Keep reducing list length by merging two every time)
//-----------------------------------------------------------
function mergeKListsSolutionOne(lists) {
	if (lists.length === 0) {
		return null;
	}
	while (lists.length > 1) {
		for (let i = 0; i < lists.length; i = i + 2) {
			const merged = mergeTwoLists(lists[i], lists[i + 1]);
			lists.splice(i, 2, merged);
		}
	}

	return lists[0];
}

function mergeTwoLists(list1, list2) {
	let p1 = list1;
	let p2 = list2;

	let newList = new ListNode();
	let current = newList;

	while (p1 && p2) {
		if (p1.val < p2.val) {
			current.next = p1;
			p1 = p1.next;
		} else {
			current.next = p2;
			p2 = p2.next;
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
// SOLUTION 2 - (Using  Heap data structure)
//-----------------------------------------------------------
function mergeKListsSolutionTwo(lists) {}

//-----------------------------------------------------------
// TEST CASES
//-----------------------------------------------------------
console.log(
	mergeKListsSolutionOne([
		[1, 4, 5],
		[1, 3, 4],
		[2, 6],
	])
);
console.log(mergeKListsSolutionOne([]));
console.log(mergeKListsSolutionOne([[]]));
