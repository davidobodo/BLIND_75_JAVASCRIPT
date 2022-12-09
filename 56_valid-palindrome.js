function validPalindrome(s) {
	const isAlpha = /^[a-z0-9]+$/i;
	const phrase = s.toLowerCase();

	while (lp < rp) {
		let left = phrase[lp];
		let right = phrase[rp];

		if (!isAlpha.test(left)) {
			lp++;
		} else if (!isAlpha.test(right)) {
			rp--;
		} else if (left !== right) {
			return false;
		} else {
			lp++;
			rp--;
		}
	}

	return true;
}
