function announce(message) {
	alert(message);
}

function log(message) {
	console.log(message);
}

export default { // Exporting modules
	announce: announce,
	log: log
};