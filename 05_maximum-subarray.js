// https://leetcode.com/problems/maximum-subarray/description/

//Linear
function maxSub(nums) {
	let overallMax = nums[0];
	let maxTillIndex = 0;

	for (let i = 0; i < nums.length; i++) {
		maxTillIndex = Math.max(nums[i], maxTillIndex + nums[i]);
		overallMax = Math.max(maxTillIndex, overallMax);
	}

	return overallMax;
}

module.exports = { maxSub };
