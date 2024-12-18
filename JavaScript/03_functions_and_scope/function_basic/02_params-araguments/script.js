// Default Params.

function registerUser(user = 'Bot') {
  return user + ' is Registered!';
}

console.log(registerUser()); 

// Resret Params.

function loginUser(myuser) {
  return ` the user ${myuser.name} with the id of ${myuser.id} is logged in!`;
}
const user = {
    id : 1,
    name :  'Mano'
};

console.log(loginUser(user));

function cacluclate_price(x,y) {
    return x * y;
}
// loginUser(user);
cacluclate_price(100, 3);

