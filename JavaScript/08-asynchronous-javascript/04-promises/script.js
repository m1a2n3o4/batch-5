// Promise. (reslove (JSON), reject(error, network, API url issue, backend server down......))

// How to create a Promise,

const promise = new Promise( (resolve, reject) => {
    // You making netwoek call
    setTimeout( () => {
        resolve();
        console.log('Json data recived');
    }, 1000);
});

// Making API Call with Promises
const promise2 = new Promise( (resolve, reject) => {
  // You making netwoek call
  fetch('https://randomuser.me/api/')
  .then( (res) => res.json())
  .then( (data) => {
     resolve(data.results[0]);
      // You can write all code here .....
      // we need to write 30 lines of code...
    //  document.querySelector('.loader').style.disply = 'none';
      ;
  } ).catch ( (error) => {
    reject('Error : Network error...');
  } );
});

// Subscribe
promise2.then().catch();

const getuser = new Promise( (resolve, reject) => {
    setTimeout( () => {
          let error = false;
          if( !error) {
            resolve({ name : 'Manu', age: 30});
            console.log('Data Recived');
          } else {
            reject ('Error : Server down, please try later');
          }
    }, 1000);
});

// we can consume/subscribe the data.
// Then() - reslove.
// catch () - reject.
// finally ()  -  ??
getuser.then( (user) => console.log(user))
       .catch((error) => console.log(error));

       

