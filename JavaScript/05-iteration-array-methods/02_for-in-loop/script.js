// Data Type.
// For in.

const colorObj = {
    color1 : 'red',
    color2 : 'blue',
    color3 : 'green',
    color4 : 'yellow'
};



// for-in 

for( const key in colorObj ) {
    console.log(colorObj[key])
}


//

const colorarrr = ['red', 'blue', 'green', 'yellow'];

for(let i =0; i < colorarrr.length; i++) {
   // console.log(colorarrr[i]);
};

for( const key in colorarrr ) {
    console.log(colorarrr[key]);
}

// Arrays of objects

const sociaObj = [
    { name : 'Twitter', url: 'https://x.com/'},
    { name : 'Facebook', url: 'https://fb.com/'},
    { name : 'LinkeIN', url: 'https://linkedin.com/'},
    { name : 'Instagram', url: 'https://instgram.com/'}

];

console.log('ttt', sociaObj[0].name);

for (const key in sociaObj) {
     if( sociaObj[key].name == 'LinkeIN') { // Twittwer = Linkedin - flase
        console.log(sociaObj[key].name, sociaObj[key].url );
     } else {
        console.log('No condition');
     }
    
};