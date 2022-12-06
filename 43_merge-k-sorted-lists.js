const { mergeTwoLists } = require("./42_merge-two-sorted-lists");

function mergeLists(lists) {
	if (!lists || lists.length === 0) {
		return null;
	}
	while (lists.length > 1) {
		const merged = mergeTwoLists(lists[0], lists[1]);
		lists.splice(0, 2, merged);
	}

	return lists[0];
}
