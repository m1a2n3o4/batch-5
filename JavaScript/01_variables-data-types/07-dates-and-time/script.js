// 11-12-2024.

// Get today's date.
let d;

d = new Date();

// Set to a string.
d = d.toString();

// 

d = new Date('2021-07-10');
d = new Date('07/10/2022 12:30:10');

// Get currnt timestamp.
d = Date.now(); // 1733924438456

// Get the Timestampm of Spefici Date.
// d = new Date();
// d = d.getFullYear();
//d = d.getTime();

// Create a date from timestamp.
d = new Date(1733924438456);

let x;
let y = new Date();

// Mthod().

// Date Methods. 2024-12-11
x = y.getTime();
x = y.getMonth() + 1;
x = y.getDay(); // 
x = y.getHours();
x = y.getSeconds();

x = `${y.getFullYear()}-${y.getMonth() + 1}-${y.getDate()}`
console.log(x);