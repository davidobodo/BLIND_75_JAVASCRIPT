function searchInRotated(nums, target) {
	let lp = 0;
	let rp = nums.length - 1;

	while (lp <= rp) {
		const mp = Math.floor((rp - lp) / 2 + lp);

		if (nums[mp] === target) return mp;

		if (nums[mp] >= nums[lp]) {
			if (target > nums[mp] || target < nums[lp]) {
				lp = mp + 1;
			} else {
				rp = mp - 1;
			}
		} else {
			if (target < nums[mp] || target > nums[rp]) {
				rp = mp - 1;
			} else {
				lp = mp + 1;
			}
		}
	}

	return -1;
}

module.exports = { searchInRotated };
