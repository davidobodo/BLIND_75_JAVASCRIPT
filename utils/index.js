function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

function TrieNode() {
	this.children = {};
	this.endOfWord = false;
}

function Interval(start, end) {
	this.start = start;
	this.end = end;
}

function TreeNode(val, left, right) {
	this.val = val || 0;
	this.left = left || null;
	this.right = right || null;
}

function GraphNode(val, neighbors) {
	this.val = val;
	this.neighbors = neighbors === undefined ? [] : neighbors;
}

function MinHeap() {
	this.heap = [];
	this.insert = function (value) {
		//add value to heap
		this.heap.push(value);

		let childPos = this.heap.length - 1;
		let parentPos = Math.floor((childPos - 1) / 2);

		while (this.heap[childPos] < this.heap[parentPos]) {
			//switch parent with child
			let temp = this.heap[parentPos];
			this.heap[parentPos] = this.heap[childPos];
			this.heap[childPos] = temp;

			//update pointers
			childPos = parentPos;
			parentPos = Math.floor((childPos - 1) / 2);
		}

		return this.heap;
	};

	this.remove = function () {
		//EDGE CASE 1: No element in heap
		if (this.heap.length === 0) {
			return this.heap;
		}

		//EDGE CASE 2: Only one element in heap
		if (this.heap.length === 1) {
			return this.heap.shift();
		}

		//STEP 1. remove root
		const removed = this.heap.shift();

		//STEP 2. take last element to the root
		const last = this.heap.pop();
		this.heap.unshift(last);

		//STEP 3. place a current pointer on root
		let currPos = 0;

		//STEP 4. compare roots children to find which is smaller
		let smallerChildPos = getSmallerChildPos(currPos, this.heap);

		//STEP 5. compare the smaller child with root
		//STEP 5A. if root is larger, switch root with child
		while (this.heap[smallerChildPos] <= this.heap[currPos]) {
			//STEP 6. Switch smaller child with parent
			let temp = this.heap[smallerChildPos];
			this.heap[smallerChildPos] = this.heap[currPos];
			this.heap[currPos] = temp;

			//STEP 7. move current pointer to the new position root is now in
			currPos = smallerChildPos;
			smallerChildPos = getSmallerChildPos(currPos, this.heap);
		}

		return removed;
	};

	function getSmallerChildPos(currPos, heap) {
		let leftChildPos = currPos * 2 + 1;
		let rightChildPos = leftChildPos + 1;

		//4. compare roots children to find which is smaller
		let smallerChildPos;
		if (heap[leftChildPos] > heap[rightChildPos]) {
			smallerChildPos = rightChildPos;
		} else {
			smallerChildPos = leftChildPos;
		}

		return smallerChildPos;
	}
}

module.exports = { ListNode, TrieNode, Interval, TreeNode, GraphNode, MinHeap };
