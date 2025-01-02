// Reduce method.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; //

// Add numbers together.
// Reduce : (accumulator, currentValue.)
const sum =  numbers.reduce( function(accumulator, currentValue) {
    return accumulator + currentValue;
},0);

// 15 + 6 [1,3,6, 10, 15,  ];

console.log(sum);


// Shopping cart

const cart = [
    { id :1, name : 'Iphone 14', price : 450000},
    { id :2, name : 'Iphone 15', price : 550000},
    { id :3, name : 'Iphone 16', price : 650000},
    { id :4, name : 'Iphone 17', price : 750000},
];

const finalPrice = cart.reduce( function (acc, curval){
      return acc + curval.price
},0);

console.log(finalPrice);