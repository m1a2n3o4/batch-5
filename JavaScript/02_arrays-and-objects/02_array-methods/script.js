// Arrays Methods.

let x;

const arry = [28, 38, 44, 29,109];

// Push() // Push a value to the end of the array
arry.push(100);
arry.push(101);
arry.push('abcd');
console.log(arry);


// Pop() // Take out last element of array value.
arry.pop();

// unshift() - Add a value to the beginig of the array.
arry.unshift(10);

//shift() - Remove first value of array.
arry.shift();

// reverse() - Reverse an array.
arry.reverse();

// Includes - check to see if something is in the array. (True/false)

x = arry.includes(38);
x = arry.includes(111);
const student_numbers = [14134, 13413, 13412342, 45324326, 3563563, 34563456];

var stuvalue = 3563563;

let res = student_numbers.includes(stuvalue);
console.log(res);

console.log(arry);

// IndexOf - Return the index of value
x = arry.indexOf(29);

// toString() - Return arrays as a string.
x = arry.toString();
x = arry.join();

// Slice, splice with Examples.

// slice(val1, val2) - Return selected elemnts in an array. ()
x = arry.slice(1,4);
x = arry.slice(3,6);
console.log(x);

// Practice with More examples using diffrent Data types in Array.

//Splice - same as 
x = arry.splice(3,6);
console.log(x);