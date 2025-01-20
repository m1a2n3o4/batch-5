// Promise
const promises = new Promise( (resolve, reject) => {
    // Trt with network
    setTimeout( () => {
        resolve({name: 'test', age: 22}); 
    }, 2000);
});

// Subscribe
// promises.then( (data) => console.log(data));

// Same with Async await function.
async function getmyPromise() {
    const responce = await promises;
    console.log(responce);
};
getmyPromise();

// making API call asyn and await....

async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
};

getUsers();

// making API call with error handeling...
const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    
    // throw new Error ('Error : data error');
    console.log(data);
}

// Subscribe to it.
getPosts().catch( (error) => console.log(error));


// Direcr Error handling.....
async function getUsers2() {
 try {
    const res = await fetch('https://jsonplacreholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
 } catch(error) {
    console.log(error);
 }
   
};
