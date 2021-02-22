// console.log("hello loops");

// 7 x 2 = 14

function showMultiplicationTable(num){
    for (var i = 1 ; i <= 10; i++){
        // this will run every iteration
        console.log(num +" x "+ i +" = "+ (num * i));
    }
}

// showMultiplicationTable(5);


// console.log(randomNumber);

// for (var i = 1; i <= 10; i++){
//     var randomNumber = Math.floor(Math.random() * (181) + 20);
//     if (randomNumber % 2 === 0){
//         console.log("Your number "+ randomNumber + " is even!");
//     }else{
//         console.log("Your number "+ randomNumber + " is odd!");
//     }
//
// }


// for (var outerLoop = 1; outerLoop <= 9; outerLoop++){
//
//     var output = "";
//
//     for (var innerLoop = 1; innerLoop <= outerLoop; innerLoop++){
//         output = output + outerLoop;
//     }
//
//     console.log(output);
// }

for (var i = 100; i > 4; i -= 5){
    console.log(i);
}