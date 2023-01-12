// https://leetcode.com/problems/maximum-subarray

/**
 *
 * TIME COMPLEXITY = O(n)
 * Why?
 * Because our three loops would run in O(n)
 * i.e O(n) + O(n) + O(n) = O(3n)
 * we ignore the constant, hence our final result becomes O(n)
 */

/**
 * SPACE COMPLEXITY = 0(1)
 * Why?
 * Because our space which is our 2 variables, would always remain constant irrespective of the amount of numbers in our input
 */

/**
 *
 * EXPLANATION
 *
 * Have a variable that stores the maximum up till an index
 * 	Now, its possible that the value at the index itself, is greater than if it were added to other previous values
 * After computing the max till index, then check that value against the overall max
 *
 */

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
