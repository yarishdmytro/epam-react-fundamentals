export function getCourseDuration(totalMinutes) {
	const hours = Math.floor(totalMinutes / 60);
	const minutes = totalMinutes % 60;
	return `${hours < 10 ? `0${hours}` : `${hours}`}:${
		minutes < 10 ? `0${minutes}` : `${minutes}`
	} ${hours === 1 ? 'hour' : 'hours'}`;
}
