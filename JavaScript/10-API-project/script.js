function fectUser() {
    // Connection to backed vai API and usning Fetch methods.
   // document.querySelector('.loader').style.disply = 'block';
    fetch('https://randomuser.me/api/')
    .then( (res) => res.json())
    .then( (data) => {
        // You can write all code here .....
        // we need to write 30 lines of code...
      //  document.querySelector('.loader').style.disply = 'none';
        displayUser(data.results[0]);
    } )
};

// TO red the data we cretdd new function....
function displayUser(user) {
    // we need show the data to index.html.
    console.log(user);
    const userDiaply = document.querySelector('#user');

    // DOM - changin body background dynamically (if Male - green, if female - red).
    if( user.gender === 'female') {
         document.body.style.backgroundColor = '#2b3149';
    } else {
        document.body.style.backgroundColor = '#768bd0';
    }

    userDiaply.innerHTML = `
       <div class="user-data"> 
         <div class="image">
          <img src="${user.picture.large}"
         </image>
         <div class="user-info">
           <p>
             <span> Name : </span> ${user.name.title}  ${user.name.first}  ${user.name.last}
           </p>
           <p>
             <span> Email : </span> ${user.email}
           </p>
           <p>
             <span> Email : </span> ${user.phone}
           </p>
           <p>
             <span> Location : </span> ${user.location.city}, ${user.location.country},  ${user.location.postcode}
           </p>
           <p>
             <span> Age : </span> ${user.dob.age}
           </p>
         </div>
       </div>

    `;



}


// DOM Method - eventListner
document.querySelector('#generate').addEventListener('click', fectUser);
fectUser();

