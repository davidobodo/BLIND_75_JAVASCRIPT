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

module.exports = { ListNode, TrieNode, Interval, TreeNode };
