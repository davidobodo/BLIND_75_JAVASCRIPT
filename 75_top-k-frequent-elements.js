// https://leetcode.com/problems/top-k-frequent-elements/description/

//-----------------------------------------------------------
// SOLUTION 1 - TIME COMPLEXITY = n(logn)
//-----------------------------------------------------------
function topkFrequent(nums, k) {
	let storage = {};

	for (let i = 0; i < nums.length; i++) {
		if (storage[nums[i]] === undefined) {
			storage[nums[i]] = 1;
		} else {
			storage[nums[i]]++;
		}
	}

	storage = Object.entries(storage).sort((a, b) => b[1] - a[1]);

	let output = [];
	//Take out k elements
	for (let i = 0; i < k; i++) {
		output.push(parseInt(storage[i][0]));
	}

	return output;
}

//TODO: Explanation

//TODO: Console
