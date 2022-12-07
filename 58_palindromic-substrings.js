//https://leetcode.com/problems/palindromic-substrings/description/

function palindromicSubstrings(s) {
	let palindLength = 0;

	for (let i = 0; i < s.length; i++) {
		let lp = i;
		let rp = i;

		while (lp >= 0 && rp < s.length - 1 && s[lp] === s[rp]) {
			palindLength++;
			lp--;
			rp++;
		}

		lp = i;
		rp = i + 1;

		while (lp >= 0 && rp < s.length - 1 && s[lp] === s[rp]) {
			palindLength++;
			lp--;
			rp++;
		}
	}

	return palindLength;
}

module.exports = { palindromicSubstrings };
