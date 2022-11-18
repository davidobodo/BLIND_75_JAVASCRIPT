// https://leetcode.com/problems/merge-intervals/description/

//-----------------------------------------------------------
// SOLUTION
//-----------------------------------------------------------
function mergeIntervals(intervals) {
	let res = [];
	intervals.sort((a, b) => a[0] - b[0]);
	let currentInterval = intervals[0];

	for (let i = 1; i < intervals.length; i++) {
		if (currentInterval[1] >= intervals[i][0]) {
			currentInterval = [
				Math.min(currentInterval[0], intervals[i][0]),
				Math.max(currentInterval[1], [intervals[i][1]]),
			];
		} else {
			res.push(currentInterval);
			currentInterval = intervals[i];
		}
	}

	res.push(currentInterval);

	return res;
}

//-----------------------------------------------------------
// EXPLANATION/CONCEPT
//-----------------------------------------------------------
/**
 * Sort intervals by their "start" value in ascending order. This helps to mitigate ordering issues.
 * Have a pointer that focuses on the interval to be added to our result.(i.e currentInterval)
 * NOTE: This interval might overlap with another interval so don't add it to our result until we see an interval greater than it.
 * Loop through intervals
 * If you see an interval that overlaps our focused interval, adjust the focused interval range
 * If not, then add focused interval to our result and reassign focused interval
 */

//-----------------------------------------------------------
// TEST CASES
//-----------------------------------------------------------
console.log(
	mergeIntervals([
		[1, 3],
		[2, 6],
		[8, 10],
		[15, 18],
	])
);
console.log(
	mergeIntervals([
		[1, 4],
		[4, 5],
	])
);
