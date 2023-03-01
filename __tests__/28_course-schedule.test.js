const { courseSchedule } = require("../28_course-schedule");

describe("28. Course Schedule", () => {
	test("Case 1", () => {
		expect(
			courseSchedule([
				[2, 4],
				[1, 3],
				[2, 4],
				[1, 3],
			])
		).toEqual([
			[2, 4],
			[1, 3],
			[2, 4],
			[1, 3],
		]);
	});
	test("Case 2", () => {
		expect(courseSchedule([[]])).toBe([[]]);
	});
	test("Case 3", () => {
		expect(courseSchedule([])).toBe([]);
	});
});
