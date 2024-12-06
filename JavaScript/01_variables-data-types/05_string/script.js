let x;
const movie_name = 'Puspa2 wildfire';
const price = 1000;

// concatation : movie name is Puspa2 and ticket price is 1000;

x = 'movie name is ' + movie_name + ' and ticket price is ' + price;

// Temaple Literals.
x = `2.movie name is ${movie_name} and ticket price is ${price}`;

// String methods.

// String lenth.
x = movie_name.length;

// Access value by key.
x = movie_name[6];

// Change case.
x = movie_name.toUpperCase();
x = movie_name.toLocaleLowerCase();

//Charat.
x = movie_name.charAt(4);

// Indexof.
x = movie_name.indexOf('s');

// substring.
x = movie_name.substring(12, 14);
x = movie_name.substring(6);

// trim.

movie_name = '           puspa123';
x = movie_name.trim();

// 
document.getElementById('output').innerHTML = x;