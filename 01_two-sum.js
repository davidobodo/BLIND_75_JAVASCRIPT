function twoSum(nums, target) {
	let map = {};

	for (let i = 0; i < nums.length; i++) {
		const compliiment = target - nums[i];
		if (map[compliiment] === undefined) {
			map[nums[i]] = i;
		} else {
			return [i, map[compliiment]];
		}
	}

	return false;
}

//TODO:
