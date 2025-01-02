// Filter.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; // 2,4681012

// Even Numbers. for, for-in, for-each.
const evenumber = [];

for(let i=0; i<=numbers.length; i++) {
    if( numbers[i] % 2 === 0) {
       // console.log(numbers[i]);
       evenumber.push(numbers[i]);
    }
};

console.log(evenumber);

// by deafult it create array.
const evenNumbers2 = numbers.filter( function(number) {
    return number % 2 === 0;
});

// Short verson.

const evenNumbers3 = numbers.filter( (num) => num % 2 === 0 );

console.log(evenNumbers2);
console.log(evenNumbers3);

const companies = [
    { name : 'Company one', catagory : 'Finance', start : 1981, end:2004},
    { name : 'Company Two', catagory : 'Retail', start : 1992, end:2008},
    { name : 'Company Three', catagory : 'Auto', start : 1999, end:2006},
    { name : 'Company FOur', catagory : 'Retail', start : 2009, end:2020},
    { name : 'Company Five', catagory : 'Finance', start : 1987, end:2004},
    { name : 'Company Six', catagory : 'Auto', start : 1986, end:2004},
    { name : 'Company Sevee', catagory : 'Retail', start : 2011, end:2013},
    { name : 'Company Eight', catagory : 'software', start : 1981, end:1990},
    { name : 'Company Nine', catagory : 'software', start : 2000, end:2020},
];

const mobiles = [
    {
        mobile : 'Iphone 16', GB : 12, price : 560000, color : 'red', cam : '20mp', rating : 4.2
    },
    {
        mobile : 'Iphone 16', GB : 12, price : 560000, color : 'red', cam : '20mp'
    },{
        mobile : 'Iphone 13', GB : 12, price : 560000, color : 'red', cam : '20mp'
    },{
        mobile : 'Iphone 14', GB : 20, price : 660000, color : 'red', cam : '20mp'
    },{
        mobile : 'Iphone 15', GB : 12, price : 560000, color : 'red', cam : '20mp'
    },{
        mobile : 'Iphone 16', GB : 12, price : 560000, color : 'red', cam : '20mp'
    },{
        mobile : 'Iphone 16', GB : 12, price : 560000, color : 'red', cam : '20mp'
    },{
        mobile : 'Iphone 16', GB : 12, price : 560000, color : 'red', cam : '20mp'
    },
];

// Get only reatail companies.
const retailCompanies = companies.filter( (comp) => comp.catagory === 'Retail');
// Get only companoes starts on 1980 and before 2010.
const earlycompanies = companies.filter( (company ) => company.start >= 1980 && company.end <= 2010);
console.log(earlycompanies);
console.log(retailCompanies);


 