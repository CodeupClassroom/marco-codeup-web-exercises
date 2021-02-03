function someFunctionNoParameters(){
    //inside of here - we tell our function to do some stuff
    return alert("Hello there, Marco!")
}

// someFunctionNoParameters()

function someFunctionWithParameter(name){
    //inside of here - we tell our function to do some stuff
    return alert("Hello there, " + name);
}



// someFunctionWithParameter() // no argument? we get undefined
// var myName = "Kenneth";
// someFunctionWithParameter(myName)

// A function that returns a value >> assign that value to a variable

function increment(num){ //blueprint - parameter = expectation
    return num + 1;
    }
//
// // var result = increment(1);
//
// var four = increment(3); //action / implementation of expectation
// var five = increment(increment(3));
// var six = increment(increment(increment(3)))
//
// console.log(four);
// console.log(five);
// console.log(six);

// If I write a new function below: will I be able to pass our increment function inside of it?

// function multiplyByTwo(num){
//
//     return num * 2;
// }

// console.log(multiplyByTwo(increment(3)));

// Anonymous Functions [when passed into a parent function AKA 'callback function']

// function honkHorn(){
//     return "beep beep"
// }

var honkHorn = function(){

    // do some more stuff
    return "anonymous beep beep";
}

console.log(honkHorn());



