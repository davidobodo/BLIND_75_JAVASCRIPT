const { Interval } = require("./utils");
function canAttendMeetings(intervals) {
	intervals = intervals.sort((a, b) => a.start - b.start);

	let first = 0;

	while (first < intervals.length - 1) {
		let second = first + 1;

		if (intervals[second].start < intervals[first].end) {
			return false;
		}

		first++;
	}

	return true;

	// intervals.sort((a, b) => a.start - b.start);

	// let curr = intervals[0];

	// for (let i = 1; i < intervals.length; i++) {
	// 	if (curr.end > intervals[i].start) {
	// 		return false;
	// 	}

	// 	curr = intervals[i];
	// }

	// return true;
}

console.log(canAttendMeetings([new Interval(5, 10), new Interval(0, 30), new Interval(15, 20)]));
console.log(canAttendMeetings([new Interval(5, 8), new Interval(9, 15)]));
