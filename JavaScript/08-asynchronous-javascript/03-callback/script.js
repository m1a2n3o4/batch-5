// callback - called when required.
// You can also call - callback function as parameater.
const posts = [
   { title: 'post one', body : 'this is post one'},
   { title: 'post two', body : 'this is post two'},
];

console.log(posts);

// Create a new Post after some time 2.
function createPost(post, cb) {
    setTimeout( () => {
        posts.push(post);
        console.log(posts);
        cb();
    }, 2000);
};

// Call back functin
function readfullArray() {
   // you can do any operation, for, if, do anthing.
   setTimeout( () => {
      posts.forEach( function (post) {
        console.log(post);
        // DOM Methods- Create a HTML Element.
        const div = document.createElement('div');
        div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
        document.querySelector('#posts').appendChild(div);


      });
   }, 1000);
}

createPost({ title: 'post three', body : 'this is post three'}, readfullArray );


