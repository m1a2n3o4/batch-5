// Json - JS Data
// JS DATA - Json Data.

const post = {
    id: 1,
    title : 'News 1',
    description : 'this is test description',
    notes : 'hello test 123456'
};

const all_posts = [
    {
        id: 1,
        title : 'News 1',
        description : 'this is test description'
    },
    {
        id: 2,
        title : 'News 2',
        description : 'this is test description 2'
    }
];


// convert JS object to JSON Data.
const str = JSON.stringify(post); 
const jsondata =  JSON.stringify(all_posts); // Converted to JSON Data
const jsdata = JSON.parse(jsondata); // Convetred JSON data to JS Data
console.log(jsondata);
console.log(jsdata);
// console.log(str);