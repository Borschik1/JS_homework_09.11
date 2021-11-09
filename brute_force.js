let fs = require('fs');
let arg = process.argv;
let firstString, secondString;
let n = parseInt(arg[2]), m = parseInt(arg[3]);
let is_substr = true;

firstString = fs.readFileSync('input1.txt');
firstString = firstString.toString();

secondString = fs.readFileSync('input2.txt');
secondString = secondString.toString();


for (let i = 0; i <= n - m; ++i) {
	is_substr = true;
	for (let j = 0; j < m; ++j) {
		if (firstString.charAt(i + j) != secondString.charAt(j)) {
			is_substr = false;
			break;
		}
	}
	if (is_substr) {
		console.log(i);
	}
}
