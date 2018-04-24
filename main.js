// hide output
// document.querySelector('#output').style.display='none';
// document.querySelector('#output').style.visibility='hidden';

// Catch user input
document.querySelector('#inputValue').addEventListener('input', convert);

function convert(e) {	
	// Test the function called
	// console.log('function is called');

	// get user input value i.e. Let input = document.q
	// document.querySelector('inputValue').value 
	let input = e.target.value;
	// console.log(input);

	//hide output
	// document.querySelector('#output').style.visibility='hidden';

	//show display
	//document.querySelector('#output').style.display='block';
	document.querySelector('#output').style.display="visibility";

	//pounds to grams
	document.querySelector('#gram').innerHTML = input * 453.592;

	//pounds to kilograms
	document.querySelector('#kg').innerHTML = input * 453.592 / 1000;

	//pounds to ounces
	document.querySelector('#oz').innerHTML = input * 16;


}

