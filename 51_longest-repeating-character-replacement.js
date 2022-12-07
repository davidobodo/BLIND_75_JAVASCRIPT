function characterReplacement(s, k) {
	let lp = 0;
	let rp = 0;
	let max = 0;
	let freqCount = {};
	let currWindow = "";

	while (lp <= rp && rp < s.length) {
		const letter = s[rp];

		if (freqCount[letter] === undefined) {
			freqCount[letter] = 1;
		} else {
			freqCount[letter]++;
		}

		currWindow += letter;

		let remainder = currWindow.length - getMostFrequent(freqCount);

		while (remainder > k) {
			const firstChar = currWindow[0];
			freqCount[firstChar]--;
			currWindow = currWindow.slice(1);
			remainder = currWindow.length - getMostFrequent(freqCount);
		}

		max = Math.max(currWindow.length, max);
		rp++;
	}

	return max;
}

function getMostFrequent(storage) {
	let highest = 0;
	for (let key in storage) {
		highest = Math.max(highest, storage[key]);
	}
	return highest;
}
