// Array : Can store data as Single value.
// Object : Can store the data with KEY:VALUE Based.
// CSS text-color : red;

// How to create a Object.
let x;

const pushpa2_deatilas = {
    hero_name : 'Allu Arjun',
    director : 'Sukumar',
    issucess : true,
    gross : 10000000000000,
    net : 123.4444,
};

const person = {
    name : 'manohar',
    age : 32,
    isAdmin : true,
    address : '123,abcd,hyderabad'
}

console.log(pushpa2_deatilas, person);

// Getting Object Values.
x = pushpa2_deatilas.director;
x = person.age;
x = person.address;

person.age = 34;
console.log(person);

const num = [1,2,3,4];
num[2] = 6;
console.log(x);

const my_car = {
    make : 'Honda City',
    modal : 2024,
    price : 2400000,
    color: 'red',
    facilities : {
        breakes : 'Adds',
        topview : 'Fully panoromic',
        cam : '360cam',
        seats : {
            frontseat : 'Heat facility',
            backseats : 'Fully push back seats'
        }
    }
};
const my_car2 = {
    make : 'Maruthi suziki alto',
    modal : 2024,
    price : 2400000,
    color: 'red',
    facilities : {
        breakes : 'Adds',
        topview : 'Fully panoromic',
        cam : '360cam',
        seats : {
            frontseat : 'Heat facility',
            backseats : 'Fully push back seats'
        }
    }
};
const my_car3 = {
    make : 'MG hector plus',
    modal : 2024,
    price : 2400000,
    color: ['red', 'blue', 'pinlk'],
    facilities : {
        breakes : 'Adds',
        topview : 'Fully panoromic',
        cam : '360cam',
        seats : {
            frontseat : 'Heat facility',
            backseats : 'Fully push back seats'
        }
    }
};
console.log(my_car);

x = my_car.facilities.cam; // arr[0][1]
x = my_car.facilities.seats.backseats;
my_car.facilities.seats.backseats = 'Half push back sets';
console.log(my_car);

console.log(x);

const allmycars = [
    {
        make : 'Honda City',
        modal : 2024,
        price : 2400000,
        color: 'red',
        facilities : {
            breakes : 'Adds',
            topview : 'Fully panoromic',
            cam : '360cam',
            seats : {
                frontseat : 'Heat facility',
                backseats : 'Fully push back seats'
            }
        }
    },

    {
        make : 'Maruthi suziki alto',
        modal : 2024,
        price : 2400000,
        color: 'red',
        facilities : {
            breakes : 'Adds',
            topview : 'Fully panoromic',
            cam : '360cam',
            seats : {
                frontseat : 'Heat facility',
                backseats : 'Fully push back seats'
            }
        }
    },

    {
        make : 'MG hector plus',
        modal : 2024,
        price : 2400000,
        color: 'red',
        facilities : {
            breakes : 'Adds',
            topview : 'Fully panoromic',
            cam : '360cam',
            seats : {
                frontseat : 'Heat facility',
                backseats : 'Fully push back seats'
            }
        }
    }

];

console.log(allmycars);




