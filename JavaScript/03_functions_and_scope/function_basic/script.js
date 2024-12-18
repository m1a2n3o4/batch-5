// Functions/Methods.

// Define a function - Syntax.
// The main pupose is - Reusable methods

function fun_name() 
{
   // We will erite JS Code.
}

console.log('Hello this is sample test');
console.log('Hello 3');

function hello_function() {
    console.log('Hello From Function');
    var a = 2;
    var b = 4;
    var c = a + b;
    console.log(c);
}

function hello_world() {
    console.log('Hello world');
}

// Invoke the Function / Call a function.

hello_function(); // Invoking the function.
hello_world();
hello_world();
hello_function();

function data_updattoaray() {
    const arry = [28, 38, 44, 29,109];

    // Push() // Push a value to the end of the array
    arry.push(100);
    arry.push(101);
    console.log(arry);
};


data_updattoaray();

// Functions with Parameaters.
// Parameater supparted by Commaa
// Parameaters VS Arguments.
// Params can be N Numbers.
// Function/Methods -
// Parameaters - Are the names of the variables that used to paas data into a function.
// Arguments - are rge values that are passed into the funmction.
// Can be any Data types.


function add_numbers2() {
    let x = 10;
    let y = 20;
    console.log(x + y);
};


function add_numbers(x,y,z) {  
    console.log(x + y + z);
    // All arthemtic.
    // All Math operation
    console.log(z);
};

function print_objects(carobj,one,somedata) {    
    console.log(carobj);
    console.log(one);
    console.log(somedata);
};

const cars = {
    modal : 'Sijiki 123456',
    colors : ['red', 'blue', {
        abcd : '123456',
        xys : [1,2, { lmn : 'Hey you!'}, ['puspa2', { hero : 'Allu Arjun'}]]

    }]
};



print_objects(cars,10, true); // Invoke-call




add_numbers(20,34,55); // Function with Paramters - YOu can pass any data type as Argument // let x = 20; 

// Return a value
function subtrack(num1, num2) {
   // console.log(num1 - num2);
   // const resut = num2 - num1;
   return num1 - num2;
   
   console.log('this is retuen word.');

};

// Assign the retuen value to a Variable.
const result = subtrack(200,105);

console.log(result);

// How can we assign result to a Const ? insted of console.



