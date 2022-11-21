// https://leetcode.com/problems/insert-interval/description/

//-----------------------------------------------------------
// SOLUTION
//-----------------------------------------------------------
function insertInterval(intervals, newInterval) {
	let res = [];

	for (let i = 0; i < intervals.length; i++) {
		const currentInterval = intervals[i];

		if (newInterval[1] < currentInterval[0]) {
			res.push(newInterval);

			const remaining = intervals.slice(i);

			for (let j = 0; j < remaining.length; j++) {
				res.push(remaining[j]);
			}

			return res;
		} else if (newInterval[0] > currentInterval[1]) {
			res.push(currentInterval);
		} else {
			newInterval = [Math.min(currentInterval[0], newInterval[0]), Math.max(currentInterval[1], newInterval[1])];
		}
	}

	res.push(newInterval);

	return res;
}

//-----------------------------------------------------------
// EXPLANATION/CONCEPT
//-----------------------------------------------------------
/**
 * Loop through the given intervals to know where the newInterval should be inserted
 * 3 insertion conditions:
 * 1. newInterval is before the currentInterval in our iteration
 * 2. newInterval is after the currentInterval in our iteration
 * 3. newInterval overlaps with the currentInterval in our iteration
 */

//-----------------------------------------------------------
// TEST CASES (Uncomment  to see in console)
//-----------------------------------------------------------
// console.log(
// 	insertInterval(
// 		[
// 			[1, 3],
// 			[6, 9],
// 		],
// 		[2, 5]
// 	)
// );
// console.log(
// 	insertInterval(
// 		[
// 			[1, 2],
// 			[3, 5],
// 			[6, 7],
// 			[8, 10],
// 			[12, 16],
// 		],
// 		[4, 8]
// 	)
// );

module.exports = { insertInterval };
