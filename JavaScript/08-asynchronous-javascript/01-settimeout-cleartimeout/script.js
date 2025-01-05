// SetTimeout - Takes in a callback and a time to wait untill that callback is executed.
// CallBack. 

// Synatax for setTimeout.

//setTimeout( function() {}, timeout);

setTimeout( function () {
   // Coonection to backed.
   console.log('Hello From callback');
   test(); // After JSON data recived from backend.
}, 6000); // 40000 milli seconds - 4 secounds.


function test() {
    alert('hello alert');
}

// Named function.

setTimeout(chageText(), 5000);

function chageText() {
    document.querySelector('h1').textContent = 'Hello from callback';
}


