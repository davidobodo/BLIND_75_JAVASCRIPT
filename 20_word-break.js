function wordBreak(s, wordDict) {
	let dp = new Array(s.length + 1).fill(false, 0, s.length + 1);
	dp[0] = true;

	for (j = 1; j < s.length; j++) {
		for (let i = 0; i < j; i++) {
			// if(dp[i] && wordDict.)
		}
	}
}
