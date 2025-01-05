// Fetch - this method used to Fecth/get the data from extranla source (another page, another folder, another exteranl server...)
// Network - external file source.
// Fecthing a JSON file.
// Request URL -> API URL
fetch('./movies.json')
.then( (resp) => resp.json())
.then( (data) => console.log(data));

// Real test API Data

fetch('https://randomuser.me/api/')
.then( (res) => res.json())
.then ( (data) => {
    displayUser(data)
})

function displayUser(data) {
    const userData = data;
    console.log(userData);
   document.getElementById('user').innerHTML = `Name : ${userData.results[0].name.first} -  ${userData.results[0].name.last} - <img src="${userData.results[0].picture.large}">`;
};

fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4375084&lng=78.4482441&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null')
.then( (res) => res.json())
.then ( (data) => {
    console.log(data);
    const restData = data.data.cards[5].card.card.info;
    document.getElementById('swiggy-resto').innerHTML = `Resto Name : ${restData.name} -  ${restData.areaName} - <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restData.cloudinaryImageId}"> `;
});