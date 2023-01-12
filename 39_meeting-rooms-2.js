const { Interval } = require("./utils");

function minMeetingRooms(intervals) {
	let activeMeetings = 0;
	let maxMeetings = 0;

	// intervals = intervals.sort((a, b) => a.start - b.start);

	let startTimes = [];
	let endTimes = [];

	for (let i = 0; i < intervals.length; i++) {
		startTimes.push(intervals[i].start);
		endTimes.push(intervals[i].end);
	}

	startTimes.sort((a, b) => a - b);
	endTimes.sort((a, b) => a - b);

	let p1 = 0;
	let p2 = 0;

	while (p1 < startTimes.length) {
		if (startTimes[p1] < endTimes[p2]) {
			activeMeetings++;
			maxMeetings = Math.max(activeMeetings, maxMeetings);
			p1++;
		} else {
			activeMeetings--;
			maxMeetings = Math.max(activeMeetings, maxMeetings);
			p2++;
		}
	}

	console.log(startTimes, endTimes, maxMeetings, "===IN HERE");

	return maxMeetings;

	// let start = [];
	// let end = [];

	// for (let i = 0; i < intervals.length; i++) {
	// 	start.push(intervals[i].start);
	// 	end.push(intervals[i].end);
	// }

	// start.sort();
	// end.sort();

	// let maxMeetings = 0;
	// let meetings = 0;

	// let p1 = 0;
	// let p2 = 0;

	// while (p1 < start.length) {
	// 	if (start[p1] <= end[p2]) {
	// 		meetings++;
	// 		maxMeetings = Math.max(meetings, maxMeetings);
	// 		p1++;
	// 	} else {
	// 		meetings--;
	// 		p2++;
	// 	}
	// }

	// return maxMeetings;
}

console.log(minMeetingRooms([new Interval(0, 30), new Interval(5, 10), new Interval(15, 20)]));
console.log(minMeetingRooms([new Interval(2, 7)]));
