
// import notify from './Notification'; // Importing modules

// notify.announce('fuck you'); // Using imported modules
// notify.log('let\'s log something');

require ('./main.css');

class Yupyup {

	constructor(numbers, times) {
		
		console.log(numbers.map(number => number * times));
	}

}

new Yupyup([5, 10, 15], 4);

