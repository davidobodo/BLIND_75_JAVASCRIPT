// https://leetcode.com/problems/longest-common-subsequence

/**
 * TIME COMPLEXITY = O(n^2)
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
 * 2 x 2 DP Matrix
 * 
 * 
 * Prefill matrix with zeros 
 * Loop through values, if thery are the same then add 1 to the previous diagonal in other to get the newly updated value
 * If they are not the same, find the maximum of the previous adjacent nodes
 *
 */

function longestCommonSubsequenceDP(text1, text2) {
	let dp = [];

	// Prefill the array
	for (let i = 0; i < text1.length + 1; i++) {
		dp[i] = [];

		for (let j = 0; j < text2.length + 1; j++) {
			dp[i][j] = 0;
		}
	}

	for (let i = 0; i < text1.length; i++) {
		for (let j = 0; j < text2.length; j++) {
			if (text1[i] === text2[j]) {
				dp[i + 1][j + 1] = 1 + dp[i][j];
			} else {
				dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1]);
			}
		}
	}

	return dp[text1.length][text2.length];
}

module.exports = { longestCommonSubsequenceDP };
