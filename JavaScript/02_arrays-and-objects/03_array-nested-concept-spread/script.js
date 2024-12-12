let x;

const fruits = ['apple', 'pear', 'oranges'];
const berries = ['strawberry', 'blueberry', 'rasberry'];
const vegies = 'tomatto,abc';
const leafs = ['Totakura', 'x leaf']

// Netsed arry
// const numbers = [1,2,3,[4,5,6]];

fruits.push(berries);
// fruits.push('banna');
// fruits.push('grapes');
// fruits.push(vegies);

// now can access 'Blueberry' ?
x = fruits[3][1];

// Create a new Vairiable and nest both arrays.
const allFruites = [fruits, berries]; // Double array.

console.log(x);
console.log(allFruites);

// Concate() - arrays. It will like single array.
x = fruits.concat(berries, vegies, leafs);

// Spread operator (...)
const chiru_movies = ['Indra', 'Tagore', 'Stalin'];
const balayya_movies = ['Akanda', 'smara simha', 'Legend'];
// x = chiru_movies.concat(balayya_movies);
x = [...chiru_movies, ...balayya_movies]; // Similar as concate.

// Flat() -mFlatten of array
const new_num = [1,2,3, [4,5,6], 7, 8, [9], [10,11], 12, 13, [15,16]];
// [1,2,3,4,5,6,7,8,9,10,11,12,13,15,15,16];

x =new_num.flat();

//isArray -

x = Array.isArray(new_num);


console.log(x);
