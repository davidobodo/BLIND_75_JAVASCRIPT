function houseRobber(nums) {
	let maxRobToIndex = new Array(nums.length).fill(0, 0, nums.length);

	maxRobToIndex[0] = 0;
	maxRobToIndex[1] = nums[0];

	for (let i = 1; i < nums.length; i++) {
		maxRobToIndex[i + 1] = Math.max(maxRobToIndex[i], nums[i] + maxRobToIndex[i - 1]);
	}

	return maxRobToIndex[maxRobToIndex.length - 1];
}
