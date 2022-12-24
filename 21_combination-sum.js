function combSum(nums, target) {
	let res = [];

	function dfs(i, group, total) {
		if (total === target) {
			res.push(JSON.stringify(JSON.parse(group)));
			return;
		}
		if (i >= nums.length || total > target) {
			return;
		}
		group.push(nums[i]);
		dfs(i, group, total + nums[i]);

		group.pop();
		dfs(i + 1, group, total);
	}

	dfs(0, [], 0);

	return res;
}
cu;
