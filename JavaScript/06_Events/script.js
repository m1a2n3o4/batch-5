function print_console() {
    console.log('Hello Console');
    document.getElementById('mydiv').innerHTML = 'Hey console from JS method';
};

// print_console();
// document.getElementById('mydiv').innerHTML = 'Hey console from JS method';

// Mouse Events.
// Onclick( function name);

function addition() {
    // Get the values
    const valu1 = document.getElementById('id1').value;
    const valu2 = document.getElementById('id2').value;
    console.log(Number(valu1) + Number(valu2));
    document.getElementById('result'). innerHTML = Number(valu1) + Number(valu2);
   // console.log( document.getElementById('id1').value);
}