/** @format */

// https://leetcode.com/problems/non-overlapping-intervals/description/

//-----------------------------------------------------------
// SOLUTION
//-----------------------------------------------------------
function eraseOverlapIntervals(intervals) {
	intervals.sort((a, b) => a[0] - b[0]);

	let removeCount = 0;
	let currentInterval = intervals[0];

	for (let i = 1; i < intervals.length; i++) {
		if (currentInterval[1] > intervals[i][0]) {
			removeCount++;
			if (currentInterval[1] > intervals[i][1]) {
				currentInterval = intervals[i];
			}
		} else {
			currentInterval = intervals[i];
		}
	}

	return removeCount;
}

//-----------------------------------------------------------
// EXPLANATION/CONCEPT
//-----------------------------------------------------------
/**
 * As with all interval problems, sort the intervals in ascending order using their start value in order to mitigate weird cases
 * Initialize a pointer on the first interval
 * Loop through intervals
 * Check if there is an overlap between where your pointer currently is and the interval in your loop
 * If they are, remove the one with the LARGER end value, by moving your pointer to the one with the smaller end value
 * If they are not, then just move your pointer
 */

//-----------------------------------------------------------
// TEST CASES
//-----------------------------------------------------------
console.log(
	eraseOverlapIntervals([
		[1, 2],
		[2, 3],
		[3, 4],
		[1, 3],
	])
);
console.log(
	eraseOverlapIntervals([
		[1, 2],
		[1, 2],
		[1, 2],
	])
);
console.log(
	eraseOverlapIntervals([
		[
			[1, 2],
			[2, 3],
		],
	])
);
