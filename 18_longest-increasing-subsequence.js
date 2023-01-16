// https://leetcode.com/problems/longest-increasing-subsequence

/**
 * TIME COMPLEXITY = O(n*m)
 * Where n is the smount
 * and m is the number of coins
 * Some may still call this O(n^2)
 * Why?
 * Because have a nested loop, meaning for each iteration of the outer loop we would go through all the items in the inner loop
 */

/**
 * SPACE COMPLEXITY = 0(n)
 * Why?
 * Because our array would store all corresponding values from our input

/**
 *
 * EXPLANATION
 * DP with TWO POINTERS
 * 
 * Put a pointer at the second element and another one at the first element
 * We want to keep increasing and right pointer and resetting the left pointer to the first value
 * After which we calculate what the highest number at that point is 
 * 
 *
 */

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
