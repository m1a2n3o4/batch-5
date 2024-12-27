// Logical Operators.
// && (and).
// || (or)

console.log( 10 < 20 && 30 < 15 && 40 > 30); // true && false && true. => Ture.
console.log( 10 < 20 || 30 < 15 );

// with if

if(10 < 20 || 30 < 15) {
    console.log('this is true..');
} else {
    console.log('this is false');
};

const posts = ['post one', 'post two'];
console.log(posts.length);
posts.length > 1 && console.log(posts[0]); // false && 