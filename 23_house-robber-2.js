function houseRobber2(nums) {
	if (nums.length === 1) {
		return nums[0];
	}
	const firstSet = houseRob(nums.slice(0, nums.length - 1));
	const secondSet = houseRob(nums.slice(1, nums.length));

	return Math.max(firstSet, secondSet);
}

function houseRob(nums) {
	let dp = new Array(nums.length).fill(0, 0, nums.length);

	dp[0] = 0;
	dp[1] = nums[0];

	for (let i = 1; i < nums.length; i++) {
		dp[i + 1] = Math.max(dp[i], nums[i] + dp[i - 1]);
	}

	return dp[dp.length - 1];
}
