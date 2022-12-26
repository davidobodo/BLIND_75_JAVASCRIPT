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

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
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

	while (heap.heap.length > 1) {
		console.log(heap.heap, "BEFORE REMOVING");
		const val = heap.remove();
		console.log(val, heap.heap, "THE REMOVED AND AFTER REMOVING");
		const newNode = new ListNode(val);
		curr.next = newNode;
		curr = curr.next;
	}

	console.log("OUTSIDE", dummy, curr);

	return dummy.next;
};

function MinHeap() {
	this.heap = [null];
}

MinHeap.prototype.insert = function (val) {
	//Insert at end of array
	this.heap.push(val);

	//Reorder array
	if (this.heap.length > 1) {
		//Put pointer at the last node
		let curr = this.heap.length - 1;

		//get currents parent
		let parent = Math.floor(curr / 2);

		while (this.heap[parent] > this.heap[curr]) {
			[this.heap[curr], this.heap[parent]] = [this.heap[parent], this.heap[curr]]; // ES6 Destructuring swapping technique
			curr = parent;
		}
	}
};

MinHeap.prototype.remove = function () {
	const smallest = this.heap[1];
	const lastValue = this.heap.pop();

	console.log(this.heap, "BEFORE FULFILLING");
	if (this.heap.length > 2) {
		this.heap[1] = lastValue;

		// if (this.heap.length === 3) {
		//     if (this.heap[1] > this.heap[2]) {
		//         [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]
		//     }
		//     return smallest
		// }
		//--------------------------------
		//Fulfill heap conditions
		//--------------------------------
		let parent = 1;
		let leftChild = 2 * parent;
		let rightChild = 2 * parent + 1;

		if (!this.heap[rightChild]) {
			console.log("FIRED HERE", lastValue, this.heap);
			// let temp = this.heap[parent];
			// this.heap[parent]  = this.heap[leftChild]
			// this.heap[leftChild] = temp
		} else {
			while (
				(this.heap[leftChild] && this.heap[rightChild] && this.heap[parent] > this.heap[leftChild]) ||
				this.heap[parent] > this.heap[rightChild]
			) {
				//Left is smaller
				if (this.heap[leftChild] < this.heap[rightChild]) {
					[this.heap[parent], this.heap[leftChild]] = [this.heap[leftChild], this.heap[parent]];
					parent = leftChild;
				} else {
					//Right is smaller
					[this.heap[parent], this.heap[rightChild]] = [this.heap[rightChild], this.heap[parent]];
					parent = rightChild;
				}

				leftChild = 2 * parent;
				rightChild = 2 * parent + 1;
			}
		}
	}

	if (this.heap.length === 2) {
		this.heap[1] = lastValue;
	}

	console.log(this.heap, "AFTER FULFILLING");

	return smallest;
};
