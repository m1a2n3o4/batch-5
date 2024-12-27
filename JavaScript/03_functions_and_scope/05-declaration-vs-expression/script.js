// Function Declaration.
function addDollerSign(value) {
    // String Concatation 
   return '$' + value;
};
console.log(addDollerSign(200)); // $100

// Function Expression.
const b = 500;

const addPluSign = function(value) {
    return '+' + value;
};

console.log(addPluSign(400));


