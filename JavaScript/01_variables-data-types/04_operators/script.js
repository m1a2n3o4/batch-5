// How many ways we check the JS output
console.log('Hey1');
// alert('Hey2');
document.getElementById('myid').innerHTML = "Hey from JS Document";
let price = 100;
document.getElementById('additon').innerHTML = price;
document.getElementById('myheading').innerHTML = "JS Operators";

// JS - Operators.

// 1.  Arithemetic Operators (Symbols)

let a = 5 + 5; // Additons  (+)
a = 5 - 5; // Sub (-)
a = 5 * 5; //  Multi (*)
a = 5 % 5; // Modu
a = 7 / 5; // Divide

console.log(a);

let x;
x = 200;
// If you dont Delcare any name - By defaault it takes as let.
y = 20;

let z = x + y;

let premimum_price = 260;
let excutive_price = 240;
let selected_seats;
selected_seats = 3;
let bookmyshow_tax = 82;
let final_price = premimum_price * selected_seats + bookmyshow_tax;
let exctive_final_price = excutive_price * selected_seats

console.log(z);
console.log(final_price);
console.log(exctive_final_price);

//Concatation (kalaptam)

console.log('hello World');

let l = 'hello'+ ' ' + 'world';
console.log(l);

// Exponent.
x = 2 ** 3;
x = 10 ** 3;


// Increment
x = 1;
x++;
x = 11;
x = x + 1;
x++;
x = x + y;


// Decrement
x--;

// 2. Assignement Operators ( = )
 x  = 25;
 x += 5;
 x -= 5;
 x *= 5;
 x %= 5;
 x **= 5;

// 3. Conmarison operators.
2 > 4 ; // false
3 < 1; // false
4 > 2; // true

x = 10 > 5;
x = 10 < 5;
x = 10 <= 5;
x = 10 >= 5;
x = 10 > 10;
x = 10 >= 10;

// diff between = (assignment operator), == (equal check), === (equal + data Type), 
// Equal to.
x = 2 == '2';
x = 3 == '3';
x = 3 == '2';

// Equaltoo and Data Type.
x = 10 == '10'; // True = just number match
x = 10 === '10'; // flase === Data Type is wrong
x = 10 === 10 ;
x = 10 === 11; // False.

// Not equal
 x = 2 != 4;


console.log(x);







