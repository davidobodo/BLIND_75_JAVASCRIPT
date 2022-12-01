function lis(nums) {
	let dp = new Array(nums.length).fill(1, 0, nums.length);

	let biggest = dp[0];

	for (let j = 1; j < nums.length; j++) {
		let i = 0;
		while (i < j) {
			if (nums[i] < nums[j]) {
				dp[j] = Math.max(dp[j], 1 + dp[i]);
				biggest = Math.max(biggest, dp[j]);
			}
			i++;
		}
	}

	return biggest;
}

module.exports = { lis };
