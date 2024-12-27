// Scope / Accebility
// Global - Public Props
   // Access gloabls vars in a Function/methods.
   // Update the global value in a Function.
// Block. - Internal Props.
    // Anyhting between block { } // Function, if, for, while, forech.....

// alert('hello');
console.log('hey Js');
console.log(window);

// Gloabal Scope variable.
const x = 100;
let z = 200;
console.log(x);

// Accessing Gloabl Var(let,const)
function run() {
    console.log(x);
}

function run2() {
    let y = 400;
    console.log(x + y);
}

function run3() {
    let y = 600;
    let x = 500;
    console.log(x + y);
}

run();
run2();
run3();

if(false) {
    console.log(x);
}


///


