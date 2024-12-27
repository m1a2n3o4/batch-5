// if (ameetpet){ }
// else if (Begumpet) {}
// else if(kairatyabad) {}
// else if(namapalli)
// else if(duiisuk nagar)
//else {//last...return}

// Age 1 to 10=> Kids, 
// 10 - 18 => Minor, 
//18 - 35=>  Adults, 
//35 to 60=> Middle Ged, 
//60 > 100 Old Peoples.
// && (and) And || (or).
// const age = 101;

// if(age >=1 && age <=10) { // true && flse
//     console.log('Kids');
// } else if( age >= 10 && age <=17 ) { // true && flase
//    console.log('Minors');
// } else if( age >= 18 && age <=35 ) { // true && true
//     console.log('Adults...');
// } else if( age >= 35 && age <=60) {
//     console.log('Middle aged....');
// } else if( age >=60 && age <= 100) {
//     console.log('senior citizens....');
// }
// else {
//     console.log('Not in Age Group..');
// }

// Task 

function checkAgegroup(age) {

    if(age >=1 && age <=10) { // true && flse
        console.log('Kids');
    } else if( age >= 10 && age <=17 ) { // true && flase
       console.log('Minors');
    } else if( age >= 18 && age <=35 ) { // true && true
        console.log('Adults...');
    } else if( age >= 35 && age <=59) {
        console.log('Middle aged....');
         // Nested Condition...
    } else if( age >=60 && age <= 100) {
        console.log('senior citizens....');
    }
    else {
        console.log('Not in Age Group..');
    }
}
checkAgegroup(60);

// Task : student checking results... 600
// Bellow 100 - Failed and Grade is D.
// B/w 100 - 180 - Just Passed abd Grade C.
// B/w 181 and 300. - Passed with Grade B.
// B/w 301 to 500 - Passed With Grade A.
// B/w 501 to 600 - Excellent with A++.
// DO with methids.....