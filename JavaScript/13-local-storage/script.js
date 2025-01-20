// Locaalstorage.
// 1. Storing the data into Browser. localstorage.setItem(key, value);
// 2. Read/get the data from local storage. localstorage.getItem(key, value);
// 3. clear the data from browser. localstorage.getItem(key, value);

// Storing/settign the data.
localStorage.setItem('usernamre', 'manumano111@gmail.com');
localStorage.setItem('password', 'ancd123');
localStorage.setItem('Domainname', 'www.bookmyshow.com');

//read/get the local storage data.
const passwprd = localStorage.getItem('password');
console.log(passwprd);

//Delete/clear the data from localstorage.
localStorage.removeItem('password');

// Delete all local storage.
localStorage.clear();