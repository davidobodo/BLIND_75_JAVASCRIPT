// https://leetcode.com/problems/valid-anagram/description/
function validAnagram(s, t) {
	if (s.length !== t.length) return false;

	let storage;
	for (let i = 0; i < s.length; i++) {
		const value = s[i];
		if (storage[value] === undefined) {
			storage[value] = 1;
		} else {
			storage[value]++;
		}
	}

	for (let i = 0; i < t.length; i++) {
		const value = t[i];
		if (storage[value] === undefined || !storage[value]) {
			return false;
		}
		storage[value]--;
	}

	return true;
}

module.exports = { validAnagram };
