function randomLetter() {
	const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function formatAsTimer(time) {
	let minutes = new Date(time).getUTCMinutes();
	let seconds = new Date(time).getUTCSeconds().toString().padStart(2, '0');
	return `${minutes}:${seconds}`;
}

export { randomLetter, formatAsTimer }