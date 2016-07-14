function locationizer(work) {
	var locationArray = [];

	for (job in work.jobs) {
		var newLocation = work.jobs[job].location;
		locationArray.push(newLocation);
	}

	return locationArray;
}