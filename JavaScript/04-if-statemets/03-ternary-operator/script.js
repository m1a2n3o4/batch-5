const age = 20;

if( age >= 18) {
    console.log('u can vote!')
} else {
    console.log(' you cant vote!');
}

// Same login with Ternary operator ( Short-cut for IF condition.)
age >= 18 ? console.log('u can vote!') : console.log('you cant vote!');

// Assign a conditional value (true or false) to a Variable.
const canVote = age >= 18  ? true : false;
const canvote2 = age >= 18 ? 'u can vote!' : 'you cant vote!';
console.log(canVote);
console.log(canvote2);

// Assignment 
// url : https://www.flipkart.com/account/login?ret=/
// After Login: https://www.flipkart.com/
// After Logout: https://www.flipkart.com/?redirectFrom=logout
function redirect() {
    // Redirecting from one URL to Another URl.
    console.log(window);
    window.location.assign('https://www.flipkart.com/');
   // return false;
}

// redirect();
const checkAuth = age >= 18  ? true : false;
const auth = checkAuth;
// let redirect;

if(auth) {
    alert('Welome to dahsboard.');
   // window.location.assign('https://www.flipkart.com/');
} else {
    alert('Access denied!');
    // window.location.assign('https://www.flipkart.com/?redirectFrom=logout');
};

// Same with terany operator ?

auth ? console.log('welcome to dashboard') : console.log('Access denied!');



