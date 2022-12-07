function longestSubstringWithoutRepeating(s) {
	let currSubstring = "";
	let storage = new Set();
	let max = 0;
	let lp = 0;
	let rp = 0;

	while (lp <= rp && rp < s.length) {
		const letter = s[j];
		const exists = storage.has(letter);

		if (exists) {
			storage.delete(currSubstring[0]);
			currSubstring = currSubstring.slice(1);
			i++;
		} else {
			storage.add(letter);
			currSubstring += letter;
			max = Math.max(max, currSubstring);
			j++;
		}
	}

	return max;
}

module.exports = { longestSubstringWithoutRepeating };
