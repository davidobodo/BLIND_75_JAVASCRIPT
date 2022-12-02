function uniquePaths(m, n) {
	let columns = new Array(n + 1).fill(1, 0, n + 1);
	let dp = new Array(m + 1).fill(columns, 0, m + 1);

	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			dp[i + 1][j + 1] = dp[i + 1][j] + dp[i][j + 1];
		}
	}

	return dp[m][n];
}
