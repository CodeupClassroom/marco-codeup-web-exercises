
var usersNumber = Number(prompt("Give me an odd number between 1 and 50"));

function isNumberInRange(num){
    return num >= 1 && num <= 50;
}

function isNumberEven(num){
    return num % 2 === 0;
}

while (true){

    if (!isNumberEven(usersNumber) && isNumberInRange(usersNumber)){
       break;
    }

    usersNumber = Number(prompt("Give me an odd number between 1 and 50"));
}


console.log("Number to skip is: " + usersNumber);

for (var i = 1; i <= 49; i += 2){

    if (i === usersNumber){
        console.log("Yikes! Skipping number: " + usersNumber);
        continue
    }
    console.log("Here is an odd number: " + i);
}

