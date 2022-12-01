//https://leetcode.com/problems/number-of-1-bits/description/

//-----------------------------------------------------------
// SOLUTION
//-----------------------------------------------------------
function numOfBits(n) {
	let count = 0;
	let i = 32;

	while (i) {
		count += n & 1;
		n = n >> 1;
		i--;
	}

	return count;
}

//-----------------------------------------------------------
// EXPLANATION
//-----------------------------------------------------------
/**
 * initial length of bits is 32 so we initialize that
 * as long as our bit still has characters we want to perform an action
 *   AND current bit with 1 -  1 AND 1 is the only condition that would result to 1
 *   with that we can detect if the rightmost bit is 1
 *   after performing our add, shirt the bit to the right
 *   decrement our bit length
 */

module.exports = { numOfBits };
