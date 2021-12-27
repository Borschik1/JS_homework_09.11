fs = require('fs');

string = fs.readFileSync('string.txt').toString();
sub = fs.readFileSync('substring.txt').toString();

function comp(string, sub, i) {
	is_substr = true;
	for (let j = 0; j < sub.length; ++j) {
		if (string.charAt(i + j) != sub.charAt(j)) {
			is_substr = false;
			break;
		}
	}
	return is_substr;
}


function hashLine(string, sub) {
	let answers = [];
	let subHash = 0;
	let subLen = sub.length;
	for (let i = 0; i < subLen; ++i) {
		subHash += sub.charAt(i).charCodeAt();
	}
	let now = 0;
	for (let i = 0; i < subLen; ++i) {
		now += string.charAt(i).charCodeAt();
	}
	if (now == subHash) {
		if (comp(string, sub, 0)) {
			answers.push(0);
		}
	}
	for (let i = subLen; i < string.length; ++i) {
		now += string.charAt(i).charCodeAt() - string.charAt(i - subLen).charCodeAt();
		if (now == subHash) {
			if (comp(string, sub, i - subLen + 1)) {
				answers.push(i - subLen + 1);
			}
		}
	}
	return answers;
}


function hashSqare(string, sub) {
	let answers = [];
	let subHash = 0;
	let subLen = sub.length;
	for (let i = 0; i < subLen; ++i) {
		subHash += Math.pow(sub.charAt(i).charCodeAt(), 2);
	}
	let now = 0;
	for (let i = 0; i < subLen; ++i) {
		now += Math.pow(string.charAt(i).charCodeAt(), 2);
	}
	if (now == subHash) {
		if (comp(string, sub, 0)) {
			answers.push(0);
		}
	}
	for (let i = subLen; i < string.length; ++i) {
		now += Math.pow(string.charAt(i).charCodeAt(), 2) - Math.pow(string.charAt(i - subLen).charCodeAt(), 2);
		if (now == subHash) {
			if (comp(string, sub, i - subLen + 1)) {
				answers.push(i - subLen + 1);
			}
		}
	}
	return answers;
}


function hashRabCarp(string, sub) {
	let answers = [];
	let subHash = 0;
	let subLen = sub.length;
	for (let i = 0; i < subLen; ++i) {
		subHash = subHash * 2 + sub.charAt(i).charCodeAt();
	}
	let now = 0;
	for (let i = 0; i < subLen; ++i) {
		now = now * 2 + string.charAt(i).charCodeAt();
	}
	if (now == subHash) {
		if (comp(string, sub, 0)) {
			answers.push(0);
		}
	}
	let two_pow = Math.pow(2, subLen - 1);
	for (let i = subLen; i < string.length; ++i) {
		now = (now - string.charAt(i - subLen).charCodeAt() * two_pow) * 2 + string.charAt(i).charCodeAt();
		if (now == subHash) {
			if (comp(string, sub, i - subLen + 1)) {
				answers.push(i - subLen + 1);
			}
		}
	}
	return answers;
}


timeNow = new Date();
console.log(hashLine(string, sub));
console.log('hashLine', new Date() - timeNow, '\n');

timeNow = new Date();
console.log(hashSqare(string, sub));
console.log('hashSqare', new Date() - timeNow, '\n');

timeNow = new Date();
console.log(hashRabCarp(string, sub));
console.log('hashRabCarp', new Date() - timeNow, '\n');