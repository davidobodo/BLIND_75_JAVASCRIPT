// https://leetcode.com/problems/climbing-stairs

/**
 * TIME COMPLEXITY = O(n)
 * Why?
 * Because we would visit all items in our input
 */

/**
 * SPACE COMPLEXITY = 0(n)
 * Why?
 * Because our array would store all corresponding values from our input

/**
 *
 * EXPLANATION\
 * DP ARRAY
 * This is almost like fibonacci sequence
 * 	 add the two previous values to get the current value
 *
 */

function climbingStairs(n) {
	let dp = [];
	dp[0] = 1;
	dp[1] = 1;

	for (let i = 2; i <= n; i++) {
		dp[i] = dp[i - 1] + dp[i - 2];
	}

	return dp[dp.length - 1];
}

/**
 * TIME COMPLEXITY = O(n)
 * Why?
 * Because we would visit all items in our input
 */

/**
 * SPACE COMPLEXITY = 0(1)
 * Why?
 * Because our space which is our 2 variables, would always remain constant irrespective of the amount of numbers in our input
 */

/**
 *
 * EXPLANATION
 * Two pointers
 * This is almost like fibonacci sequence
 * 	 but this time around just keep track of two variables instead of using a DP ARRAY
 *
 */

function climbingStairsConstantMemory(n) {
	let curr = 1;
	let prev = 1;

	for (let i = 2; i <= n; i++) {
		let temp = curr;
		curr = curr + prev;
		prev = temp;
	}

	return curr;
}

module.exports = { climbingStairs, climbingStairsConstantMemory };
