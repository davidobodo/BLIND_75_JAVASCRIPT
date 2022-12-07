function longestPalindrome(s) {
	let maxLength = 0;
	let longestPalind = "";

	for (let i = 0; i < s.length; i++) {
		//Odd
		let lp = i;
		let rp = i;

		while (lp >= 0 && rp < s.length && s[lp] === s[rp]) {
			const currLength = rp - lp + 1;
			if (currLength > maxLength) {
				maxLength = currLength;
				longestPalind = s.slice(lp, rp + 1);
			}
			lp--;
			rp++;
		}

		//Even
		lp = i;
		rp = i + 1;

		while (lp >= 0 && rp < s.length && s[lp] === s[rp]) {
			const currLength = rp - lp + 1;
			if (currLength > maxLength) {
				maxLength = currLength;
				longestPalind = s.slice(lp, rp + 1);
			}
			lp--;
			rp++;
		}
	}

	return longestPalind;
}

module.exports = { longestPalindrome };
