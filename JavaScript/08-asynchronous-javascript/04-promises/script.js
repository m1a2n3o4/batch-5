// Promise. (reslove (JSON), reject(error, network, API url issue, backend server down......))

// How to create a Promise,

const promise = new Promise( (resolve, reject) => {
    // You making netwoek call
    setTimeout( () => {
        resolve();
        console.log('Json data recived');
    }, 1000);
});

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

       

