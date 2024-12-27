const socials = ['Twitter', 'LinkedIN', 'FaceBook', 'Instgram'];

// View Prototype Chain.
console.log(socials.__proto__);


// Arrays Methods for loops. (ong form)
socials.forEach( function (item) {
    console.log(item);
} );

// Short form. {}
socials.forEach((item) => console.log(item));

//Using named function

function logSocials(abcd) {
    console.log(abcd);
};
logSocials(socials);

const sociaObj = [
    { name : 'Twitter', url: 'https://x.com/'},
    { name : 'Facebook', url: 'https://fb.com/'},
    { name : 'LinkeIN', url: 'https://linkedin.com/'},
    { name : 'Instagram', url: 'https://instgram.com/'}

]; // For Each!

// Home Work.

