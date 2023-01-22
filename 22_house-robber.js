// https://leetcode.com/problems/house-robber/

/**
 * TIME COMPLEXITY = O(n)
 * Why?
 * Because have a nested whlie loop inside a for loop,
 */

/**
 * SPACE COMPLEXITY = 0(n)
 * Why?
 * Because our array would store all corresponding values from our input

/**
 *
 * EXPLANATION
 * DP
 * 
 * Create a DP array that keeps track of the maximum number robbed to that particular index
 * Since all values are positive then the true maximum robbed to an index is either
 * 	a. the value at that index + the previous two values
 *  b. the previous value 
 * 	NOTE: This is because we cannot rob adjacent houses
 *
 */

function houseRobber(nums) {
	let maxRobToIndex = new Array(nums.length).fill(0, 0, nums.length);

	maxRobToIndex[0] = 0;
	maxRobToIndex[1] = nums[0];

	for (let i = 1; i < nums.length; i++) {
		maxRobToIndex[i + 1] = Math.max(maxRobToIndex[i], nums[i] + maxRobToIndex[i - 1]);
	}

	return maxRobToIndex[maxRobToIndex.length - 1];
}

module.exports = { houseRobber };
