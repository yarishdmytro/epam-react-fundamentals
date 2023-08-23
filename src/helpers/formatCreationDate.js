export function formatCreationDate(date) {
	const [day, month, year] = date.split('/');
	const newDate = new Date(year, month, day);
	let dd = newDate.getDate();
	if (dd < 10) dd = '0' + dd;
	let mm = newDate.getMonth();
	if (mm < 10) mm = '0' + mm;
	let yy = newDate.getFullYear();
	if (yy < 10) yy = '0' + yy;
	return `${dd}.${mm}.${yy}`;
}
