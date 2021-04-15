"use strict";

/*****************************
 *    VAR VS. LET VS. CONST
 *****************************/

function checkWeather(isRaining) {
    if (isRaining) {
        var umbrella = "Get an umbrella"
    } else {
        var sunglasses = "Grab your glasses!"
        console.log(umbrella);
    }

}

//checkWeather(false); //Undefined



function checkWeatherTwo(isRaining) {
    const condition = "Sunny";
    if (isRaining) {
        const umbrella = "Get an umbrella"
    } else {
        const sunglasses = "Grab your glasses!"
        //sunglasses = "Got mine!"; //won't work
        console.log(umbrella);
    }

}

//checkWeatherTwo(false) //ReferenceError: umbrella is not defined


/*==============================================*/


// let instructor = 'Douglas';
// instructor = 'Kenneth';
// console.log(instructor); //Kenneth




//const instructor = 'Douglas';
// console.log(instructor); // Douglas
// instructor = 'Kenneth';
// console.log(instructor); // Uncaught TypeError: Assignment to constant variable.








/*==============================================*/




/*
* let and const (block scope vs. function scope)
*/

{
    var a = 10;
}
{
    let b = 20;
    //console.log("I'm in a block " + b)
}

const c = 30;

//console.log(a); // 10
//console.log(b); // Uncaught ReferenceError: b is not defined
//console.log(c += 3); //Uncaught TypeError: Assignment to constant variable.





/*==============================================*/




// if (false) {
//    var x = 2; //Undefined
// }
// const instructor = "Douglas";
// if (true) {
//     const otherInstructor = "Kenneth";
// }
//
// if (true) {
//     let x = 2; //Uncaught ReferenceError: x is not defined
//     console.log("I'm in the if statement. " + x) // I can use it in the block.
//     console.log(instructor);
//     //console.log(otherInstructor);
//     for(let i = 0; i < 10; i++) {
//         x = x * 2; // I can access variables in scopes above me.
//         console.log("in a loop " + x);
//     }
// }

//console.log(x); // I can't see it because I'm not in the block.



/*****************************
 *    Template Strings
 *****************************/

//oldway
let firstName = "Douglas";
let lastName = "Hirsh";
let greeting = "Hello my name is " + firstName + ' ' + lastName + '.';

 console.log(greeting);

//TODO: Refactor code from above, using template strings.
let newGreeting = `Hello my name is ${firstName} ${lastName}. ${1+2}`

console.log(newGreeting);

let aLetter = `Hi Marco,
This is a letter with multiple lines. Hope you enjoy template strings.

--Douglas
`;

//console.log(aLetter);









/*==============================================*/

//TODO: Create an HTML string that contains the following items in an unordered list

let items = ['apple', 'grape', 'orange'];


//old way
let itemsHtml = "";
itemsHtml += "<ul>";
itemsHtml += "<li>" + items[0]+ "</li>"
itemsHtml += "<li>" + items[1]+ "</li>"
itemsHtml += "<li>" + items[2]+ "</li>"
itemsHtml += "</ul>";

//console.log(itemsHtml);


//new way
let newItemsHtml = `
    <ul>
        <li>${items[0]}</li>
        <li>${items[1]}</li>
        <li>${items[2]}</li>
    </ul>
`;

//console.log(newItemsHtml);


/*==============================================*/

//TODO: Create a paragraph from the following program object

let program = {
    name: "Codeup",
    location: "Dallas and San Antonio",
    length: "22 weeks",
    technology: "HTML, CSS, JS, Java"
}

let programLetter = `Hello and thank for your interest in ${program.name}!
Our program is located in ${program.location}. The program lasts ${program.length}.
`

//console.log(programLetter);






/*****************************
 *       For Of Loops
 *****************************/


// const arr = ["one", "two", "three"];
// for (let ele of arr) {
//     console.log(ele);
// }





/*==============================================*/
//TODO: Using for of loops, log each day

const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

// for(let day of days) {
//     console.log(day);
// }

/*==============================================*/

//TODO: Using for of loops, log each instructors name

const instructors = ["Douglas", "Kenneth", "Justin", "Casey", "David"]

// for(let instructor of instructors) {
//     console.log(instructor);
// }


/* ****************************
 *       Arrow Functions
 *****************************/
//TODO TOGETHER: Rewrite the following function using arrow function syntax


function sayHello(name){
    return `Hello ${name}`;
}

//V1
//let sayHelloAgain = (name) => {return `Hello, ${name}!`};

//V2
//let sayHelloAgain = (name) => `Hello, ${name}!`;

//V3
let sayHelloAgain = name => `Hello, ${name}!`;

console.log(sayHelloAgain("Douglas")); //Hello Douglas
console.log(sayHelloAgain("Justin")); //Hello Justin
console.log(sayHelloAgain("Kenneth")); //Hello Kenneth



/*==============================================*/
//TODO TOGETHER: Rewrite the following function using arrow function syntax

// function sum(a,b){
// 	return a + b;
// }

let sum = (a, b) => a + b;



console.log(sum(5, 3)); //8
console.log(sum(5, 20)); //25
console.log(sum(1, 9)); //10




/*==============================================*/
//TODO: Rewrite the following function using arrow function syntax

//Function declaration
function addOne(arg1) {
    return arg1 + 1;
}


//function expression
let addOneA = function(arg1){
    return arg1 + 1;
}


//refactor. Remove function keyword and add =>
let addOneB = (arg1) => {
    return arg1 + 1;
}

// remove curly braces (if only one statement)
let addOneC = (arg1) => arg1 + 1;

//remove parens if only 1 input
const addOneD = arg1 => arg1 + 1;






// console.log(addOne(1));
// console.log(addOneA(2));
// console.log(addOneB(2));
// console.log(addOneC(3));
// console.log(addOneD(5));






/* ****************************
 *       Default Function
 *       Parameter Values
 *****************************/
//TODO Together: Refactor the following using ES6

// old way
function sayHello(name) {
	if (typeof name === 'undefined') {
		name = 'World';
	}

	return 'Hello, ' + name + '!';
}

let sayHello2 = (name = "World") => `Hello, ${name}!`

let sum2 = (a = 0, b = 0) => a + b;

// console.log(sayHello2(undefined));
// console.log(sayHello2(null));
// console.log(sayHello2()); // "Hello, World!"
// console.log(sayHello2("")); // "Hello, ??????!"
// console.log(sayHello2('codeup')); // "Hello, codeup!"
//
// console.log('Default values for numbers', sum2(5));

// let abc;
// console.log(abc);
// console.log(typeof abc);
// abc = 5;
// console.log(typeof abc);
/*==============================================*/

// TODO: Refactor the following function using arrow syntax, default function parameter values, and template strings.

function helloCohort(greeting, cohort){
    if(typeof greeting === "undefined"){
        greeting = "Good Morning";
    }
    if(typeof cohort === "undefined"){
        cohort = "Marco";
    }

    return greeting + " " + cohort;
}