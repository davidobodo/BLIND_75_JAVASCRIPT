function courseSchedule(numCourses, prerequisites) {
	let premap = {};

	//create keys
	for (let i = 0; i < prerequisites.length; i++) {
		const first = prerequisites[i][0];
		const second = prerequisites[i][1];

		if (premap[first] === undefined) {
			premap[first] = [];
		}
		if (premap[second] === undefined) {
			premap[second] = [];
		}
	}

	//Fill premap
	for (let i = 0; i < prerequisites.length; i++) {
		const first = prerequisites[i][0];
		premap[first] = [...premap[first], prerequisites[i][1]];
	}

	let visited = new Set();

	function dfs(course) {
		if (visited.has(course)) {
			return false;
		}

		if (premap[course].length === 0) {
			return true;
		}

		visited.add(course);

		for (let key of premap[course]) {
			if (!dfs(key)) {
				return false;
			}
		}

		visited.delete(course);
		premap[course] = [];

		return true;
	}

	for (let key in premap) {
		if (!dfs(key)) return false;
	}

	return true;
}

module.exports = { courseSchedule };
