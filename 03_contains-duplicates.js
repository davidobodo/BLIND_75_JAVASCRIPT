// https://leetcode.com/problems/contains-duplicate/

//-----------------------------------------------------------
// SOLUTION
//-----------------------------------------------------------
function containsDuplicates(nums) {
	const map = {};

	for (let i = 0; i < nums.length; i++) {
		if (map[nums[i]] !== undefined) {
			return true;
		} else {
			map[nums[i]] = 1;
		}
	}

	return false;
}

//-----------------------------------------------------------
// EXPLANATION
//-----------------------------------------------------------
/**
 * Use a hashmap to track values we have seen, the moment we see a value that already exists then we can say we have found duplicates
 */

module.exports = { containsDuplicates };
