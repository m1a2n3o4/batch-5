// for ( [intikalExpression]; [conditionExpression]; [incrementExpression]);

// Synatx.
for(let i = 0; i<=4; i++) { // i=0; 0<=100(true); 0->1
    console.log(i);
}; 

// Loop 1 : i =0; 0<=5(true); o/p = 0; ++ 0 -> 1
// Loo 2 : i =1 ; 1 <=5 (true) ; o\p : 1 - > 2.
// Loo3 : i=2; 2 <= 5(true) : o/p : 2:  2 -> 3.
// Loop 4 : i = 3 : 3 <=5 (true) : o/p : 3; 3 -> 4.
// Loop 5 : i = 4; 4 <=5 (true) : o/p: 4: 4 ->5.
// Loop 6 : i = 5; 5 <=5(true) : o/p ; 5 : 5 ->6. - Breake..
// Loop 7 : i = 6; 6 <=5 (flase) -> Loop Breake.


for(let i = 0; i <= 10; i++) {
   // console.log(i);
   // 7 is my luckky number ?
   if(i == 7) { // 8 == 7
    console.log(`${i} is my lucky number`);
   } else {
    console.log('Number is ' + i)
   }
};

const movies_names = ['Salar', 'Puspa', 'bahubali', 'OG', 'nani'];
// console.log(movies_names[0]);
// console.log(movies_names[1]);
// console.log(movies_names[2]);
// console.log(movies_names[3]);

function bestmovie(movie_name) {
    console.log( movie_name +  ' is best movie');
}


function runTheloop() {
  
    for(let i = 0; i< movies_names.length; i++ ) {

        if( movies_names[i] === 'OG') { // bahubali == 'bahubali'
            console.log(`${movies_names[i]} is best movie in the list`);
            bestmovie(movies_names[i]); // Invoking a function
        } else {
            console.log(movies_names[i]);
        }
       
    }
};

runTheloop();


