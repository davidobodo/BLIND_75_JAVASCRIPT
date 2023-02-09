function minWindow(s, t) {
	let i = 0;
	let j = 0;
	let minString = "";
	let currOccur = {};
	let needed = {};
	for (let i = 0; i < t.length; i++) {
		if (needed[t[i]]) {
			needed[t[i]]++;
		} else {
			needed[t[i]] = 1;
		}
	}

	while (j < s.length && i <= j) {
		const letter = s[j];

		if (t.includes(letter)) {
			if (currOccur[letter]) {
				currOccur[letter]++;
			} else {
				currOccur[letter] = 1;
			}
		}
		let fulfilled = isConditionFulfilled(currOccur, needed);

		while (fulfilled) {
			const currString = s.slice(i, j + 1);

			if (!minString) {
				minString = currString;
			} else {
				if (currString.length < minString.length) {
					minString = currString;
				}
			}

			i++;
			const firstValue = currString[0];

			if (currOccur[firstValue]) {
				currOccur[firstValue]--;
			}
			fulfilled = isConditionFulfilled(currOccur, needed);
		}

		j++;
	}
}

function isConditionFulfilled(curr, needed) {
	for (let key in needed) {
		if (curr[key] < needed[key] || !curr[key]) {
			return false;
		}
	}

	return true;
}
