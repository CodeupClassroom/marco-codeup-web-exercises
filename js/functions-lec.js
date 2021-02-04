// Setting up Functions:

// function someFunctionNoParameters(){
//     //inside of here - we tell our function to do some stuff
//     return alert("Hello there, Marco!")
// }

// someFunctionNoParameters()

function someFunctionWithParameter(name){
    //inside of here - we tell our function to do some stuff, but we can now use this incoming parameter as well
    return alert("Hello there, " + name);
}

// someFunctionWithParameter() // no argument? we get undefined
// var myName = "Kenneth";
// someFunctionWithParameter(myName) //We can use variables as arguments
// someFunctionWithParameter("Marco") //Or provide a value ourselves

// A function that returns a value >> assign that value to a variable

function increment(num){ //blueprint - parameter = expectation
    return num + 1;
    }
//
// // var result = increment(1);
//
// var four = increment(3); // store one level of our function's return
// var five = increment(increment(3)); // feed one function return into another
// var six = increment(increment(increment(3))) // we can add another layer!
//
// console.log(four);
// console.log(five);
// console.log(six);

// If I write a new function below: will I be able to pass our increment function inside of it?

// function multiplyByTwo(num){
//
//     return num * 2;
// }

// console.log(multiplyByTwo(increment(3))); //I can!

// Anonymous Functions [when passed into a parent function AKA 'callback function']

//Function Expressions / Anonymous Functions: compare and contrast with a function definition

// function honkHorn(){
//     return "beep beep"
// }
//
// var honkHorn = function(){
//
//     return "anonymous beep beep";
// }

// console.log(honkHorn());

// Setting a default a parameter

// var myName = "Shan"; //default parameters work with variables too
//
// function sayHello(name = myName){
//     return alert("Hello there, " + name);
// }
//
// sayHello("Kenyon") // overriding our default

// var myVariable = "globalVar: Look, I'm global for sure" //declare a global variable
//
// function scopeExample(){
//     myVariable = "globalVar: I'm inside the function :)"; //reassigned locally
//     var localVar = "localVar: Look, I'm local!"; // accessible within this function's body
//     alert(localVar);
//     alert(myVariable);
// }
//
// alert(myVariable) //original string from above scopeExample's definition
// scopeExample() //will alert the LOCALVAR message and permanently change MYVARIABLE from this point forward
// alert(myVariable); //reassigned message
// alert(localVar) //ERR: localVar is not accessible out here!

//IFFE: The first way to put your code behind a gateway

// var iffeVar = "I'm out in the open - I hope nothing bad happens!" // Out in the open: open a console and type in 'iffeVar' and you will see it/have access to it!
//
//     console.log(iffeVar)



    (function (){
// where our JS code exists - use 'local scope' to deny accessibility
        "use strict";


        var iffeVar = "I'm behind the IFFE - everything is okay"; // Comment out the other iffeVar above - try to access this variable in your console!

        console.log(iffeVar);
    })();
