function longestCommonSubsequenceDP(text1, text2) {
	let row = new Array(text2.length + 1).fill(0, 0, text2.length + 1);
	let dp = new Array(text1.length + 1).fill(row, 0, text1.length + 1);

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

//The plain recursive solution might have some time complexity issues
function longestCommonSubsequenceRecursive(text1, text2) {
	let count = 0;

	function recurse(str1, str2) {}

	count = +recurse(text1, text2);
}
