console.log('hello');

function test() {
 console.log('hello from function.');
};

// IF condition - IF true.
// We will check wether the condition is TRUE/FALSE.
// IF true the Block Exute.

if(true) {
   console.log('this is true');
  //  alert('Hello True...');
   // N lines of code...........
}

if(false) {
    console.log('this is false.');
}

const x = 10;
const y = 5;

if(x > 5) { // 10 < 5 -> 
    console.log('abcd...');
}

if( x > y) { // 10 > 5
    console.log(`${x} is gretaer than ${y} `);
}

if( x == y) {
    console.log('xyz...');
} else {
    console.log('Condition failed....')
}

// Else 

const tickets = 10;
const avaiaTickets = 5;
const requireTcikets = 3;

if (avaiaTickets > requireTcikets) {
    console.log('I have tickets.');
} else {
    console.log('Tickets are closed....');
}

const a = 5;
const b = 5;

if( a == b) {
    console.log('true...')
} else {
    console.log('false...')
}


