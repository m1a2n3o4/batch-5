function first() {
    const x = 100;

     function second() {
        const y = 200;
        console.log(y);
        console.log(x);
        let z = 'this is second fun';
     }

     let car = 'Honda city'

     function third() {
        console.log(x);
        // console.log(z);
        console.log(car);
     }
    

    second();
    third();

   // console.log(x);
}

function outer() {
    console.log(x);
}

first();
// outer();