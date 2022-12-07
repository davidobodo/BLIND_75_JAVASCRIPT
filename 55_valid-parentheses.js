// https://leetcode.com/problems/valid-parentheses/description/

function isValid(s) {
	const closeToOpen = {
		")": "(",
		"]": "[",
		"}": "{",
	};

	const stack = [];

	for (let i = 0; i < s.length; i++) {
		const value = s[i];

		if (stack.length === 0 && closeToOpen[value]) {
			return false;
		}

		if (closeToOpen[value]) {
			const topOfStack = stack[stack.length - 1];

			if (topOfStack === closeToOpen[value]) {
				stack.pop();
			} else {
				stack.push(value);
			}
		} else {
			stack.push(value);
		}
	}

	return stack.length === 0 ? true : false;
}

module.exports = { isValid };
