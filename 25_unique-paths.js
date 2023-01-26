// https://leetcode.com/problems/unique-paths/

/**
 * TIME COMPLEXITY = O(n^2)
 * Why?
 * Because have a nested whlie loop inside a for loop,
 */

/**
 * SPACE COMPLEXITY = 0(n)
 * Why?
 * Because our object would store all the corresponding the decode ways

/**
 *
 * EXPLANATION
 * DP - 2 X 2 Matrix
 * 
 * Create an m*n matrix
 * Fill each cell in the matrix with the value 1
 * Loop through the filled matrix, adding adjacent cells together 
 *
 */

function uniquePaths(m, n) {
	let dp = [];

	for (let i = 0; i < m; i++) {
		const row = new Array(n).fill(1, 0, n);
		dp[i] = row;
	}

	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
		}
	}

	return dp[m - 1][n - 1];
}

module.exports = { uniquePaths };
