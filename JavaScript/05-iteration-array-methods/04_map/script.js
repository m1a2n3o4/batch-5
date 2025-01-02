// Map.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; //

// [1, 4, 9, 16, 25]
// Double the arrays element.

const doublevalues = numbers.map( (number) => number * number);
console.log(doublevalues);

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

// result as array with all companies names ['company one, ] [{name : 'con', catr : 'retail'}]
const compayNames = companies.map( (company) => company.name);

console.log(compayNames);
compayNames.push('copmany Ten');
console.log(compayNames);

// Result as array with just comany and catagory.
const comnyInfo = companies.map( (company) => {
    return {
        name : company.name,
        category : company.catagory
    }
});

console.log(comnyInfo);

// Chaning both methods.

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Req : double the even numbers. [4, 16, 36.... ].

const evenDouble = numbers
      .filter( (number) => number % 2 === 0)
      .map((number) => number * number);
console.log(evenDouble);      
