// https://leetcode.com/problems/product-of-array-except-self/

/**
 *
 * TIME COMPLEXITY = O(n)
 * Why?
 * Because our three loops would run in O(n)
 * i.e O(n) + O(n) + O(n) = O(3n)
 * we ignore the constant, hence our final result becomes O(n)
 */

/**
 * SPACE COMPLEXITY = 0(n)
 * Why?
 * Because our space which is our arrays, would be filled we the number of input elements
 */

/**
 *
 * EXPLANATION
 * 1. Create a storage that has all an elements prefix product
 * 2. Create another storage that has all am elements postfix product
 * 3. Multiply the value in each index in both the prefix and postfix
 */

function productExceptSelf(nums) {
	let preFix = [];
	let postFix = new Array(nums.length).fill(1, 0, nums.length);
	let output = [];

	preFix[0] = 1;

	for (let i = 1; i < nums.length; i++) {
		preFix[i] = preFix[i - 1] * nums[i - 1];
	}

	for (let i = postFix.length - 2; i >= 0; i--) {
		postFix[i] = postFix[i + 1] * nums[i + 1];
	}

	for (let i = 0; i < nums.length; i++) {
		output[i] = preFix[i] * postFix[i];
	}

	return output;
}

module.exports = { productExceptSelf };
