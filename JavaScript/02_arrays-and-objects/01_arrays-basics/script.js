let x;
let pouch = 'Mobile'; // String, Variable
let wallet = ['Money', 'cards', 'papers', 'coins']; // Arrays?object
let back_pack = ["Laptop", "chaarger", "heaset", "anydocumtes", "veg", "sonn"]; // Arrays/Objct.

const person = ['Manohar', 32, true, 2.2222, [1,2,4]];
const movies = ["Bahubali", "Darling", "Mr perfect", "Salar", "Saaho"];
const numbers = [1,2,3,4,5,6,7,8,9];
const recent_movies = ["Puspa 2", "Miss you", "Monna 2", "Amaran", "jill "];

// puspa 2, Miss you, game chager, Saaho, jill

// Get Value from arrays by using Index.
x = movies[2];
x = person[3];

// Print output 18 by using numbers array.
x = numbers[4] + numbers[4] + numbers[7];

// My fav movie is Salara in recent time. (String concatination.)
x = `My fav movie is ${movies[3]} in recent time`;
x = `Recent movie in book my show is ${recent_movies[0]}`;
x = `Welcome,  ${recent_movies[0]}`;

// Get the Length of aray
x = recent_movies.length;

// Updating Value to arrays by using Index.
recent_movies[2] = 'Game changer';
console.log(recent_movies);

recent_movies[3] = movies[4];
console.log(recent_movies);


console.log(person);
console.log(movies);
console.log(x);
