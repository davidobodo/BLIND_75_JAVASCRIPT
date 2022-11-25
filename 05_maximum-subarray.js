// https://leetcode.com/problems/maximum-subarray/description/

//Linear
function maxSub(nums) {
	let maxSum = nums[0];
	let currSum = 0;

	for (let i = 0; i < nums.length; i++) {
		currSum = Math.max(nums[i], currSum + nums[i]);
		maxSum = Math.max(currSum, maxSum);
	}

	return maxSum;
}

module.exports = { maxSub };
