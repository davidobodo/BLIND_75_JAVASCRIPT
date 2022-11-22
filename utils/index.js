function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

function TrieNode() {
	this.children = {};
	this.endOfWord = false;
}

module.exports = { ListNode, TrieNode };
