"use strict";
console.log("Arrays Manipulation Lecture");
// var pies = [
//     "apple",
//     "cherry",
//     "key lime",
//     "huckleberry",
//     "rhubarb"
// ];

// TODO: given the above array how do we log each element to the console?
// console.log(pies[0]);
//
// pies.forEach(function(pie) {
//     console.log(pie);
// })

/**
 * ===== Concepts to cover:
 *
 * Methods to add/remove elements...
 * .push()
 * .pop()
 * .shift()
 * .unshift()
 *
 * Methods to search an array...
 * .indexOf()
 * .lastIndexOf()
 *
 * Method to return a copied segment of an array...
 * .slice()
 *
 * Method to reverse the order of the array...
 * .reverse()
 *
 *
 * Method to sort the array...
 * .sort()
 *
 * Methods to convert a string to an array and vice versa...
 * .split()
 * .join()
 *
 */

// TODO: throughout the lecture today, note which of the above methods mutate (change) an array and which ones do not.

// ============================= Adding and Removing Elements

/*
    // These functions modify (mutate) the array.
    someArray.shift()   = removes first element
    someArray.unshift() = adds new first element
    someArray.pop()     = removes last element
    someArray.push()    = adds new last element
 */

// var pies = [
//     "apple",
//     "cherry",
//     "key lime",
//     "huckleberry",
//     "rhubarb"
// ];

// add element to beginning

    // pies.unshift('blueberry'); // returns the new total number of items in the array
    // console.log(pies);

// add element to end

    // pies.push('chocolate'); // again returns the new total number of items in the array

// remove element from the front of an array

    // pies.shift();

// remove an element from the end of an array

    // pies.pop();


// ============================= Searching

// var pies = [
//     "apple",
//     "cherry",
//     "key lime",
//     "huckleberry",
//     "rhubarb",
//     "key lime"
// ];

// find index of first matching result in array

    // pies.indexOf('key lime');

// returns -1 if no matching result

    // pies.indexOf('chocolate');


// find the index of the last occurrence of a matching element in the array

    // pies.lastIndexOf("key lime");


// ============================= Slicing

// RETURNS A COPIED SEGMENT OF THE ORIGINAL

/* SYNTAX
   someArray.slice(startingIndex, startingOfIndexNotIncluded);
   // one argument only will return a copy from the starting index to the end of the array
 */

// var pies = [
//     "apple",        // 0
//     "cherry",       // 1
//     "key lime",     // 2
//     "pumpkin",
//     "huckleberry",  // 3
//     "rhubarb",      // 4
//     "key lime"      // 5
// ];
//
// var favoriteFoods = ["sushi", "pizza", "ice cream", "tacos", "wings", "lasagna"];

// TODO GROUP: find various combinations of output

// TODO EXERCISE: create a function that takes in an array of pies baked and return the 3 most recently baked pies
// function lastThree(array) {
//     return array.slice(array.length - 3)
// }
//
// console.log(lastThree(pies));
// console.log(lastThree(favoriteFoods));


// ============================= Reversing
// Reverse mutates the array.
var pies = [
    "apple",
    "cherry",
    "key lime",
    "huckleberry",
    "rhubarb",
    "key lime"
];

// pies.reverse();


// ============================= Sorting
// Sort modifies (mutates) the array.

// sort an array in alphabetical order

    // pies.sort();

// sort in chronological order

    // var numbers = [1, 2, 11, 3, 4];
    // numbers.sort();
    // console.log(numbers); // wat?

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// var numbers = [4, 2, 5, 1, 3];
// numbers.sort(function(a, b) {
//     console.log("a " + a, "b " + b, "result = " + (a - b));
//     return a - b;
// });
// console.log(numbers);


// ============================= Split / Join

// splitting string into and array

var names = "Bob Sally Mary";

// var namesArr = names.split(" ");
//
// console.log(namesArr);
//
// var namesString = namesArr.join(", ");
//
// console.log(namesString);

// splitting on an empty string

    var everyCharacter = names.split("");
    // console.log(everyCharacter);
    // console.log(everyCharacter.reverse().join(""));;
    // // joining array into a string
    //
    // var bondsArray = ["Connery", "Lazenby", "Moore", "Dalton", "Brosnan", "Craig"];
    // var bondsString = bondsArray.join("_");
    // console.log(bondsString);


// TODO DEMONSTRATION: Create a function that will take in a formatted string of numbers
//  and return an array of phone numbers without any symbols. Log the output of the returned array.

/* EXAMPLE...
    var phoneNumbers = '210-555-2020\n230-555-2020\n512-555-3030';
    cleanPhoneNumbers(phoneNumbers);
    the above code should output the following...
       2105552020
       2305552020
       5125553030
*/

var phoneNumbers = '210-555-2020\n230-555-2020\n512-555-3030';

function cleanPhoneNumbers(phoneNums) {
    var output = [];

    //fill output up with the phone numbers.
    var phoneNumbersArray = phoneNums.split("\n");
    //Does not give the expected result.
    //output = phoneNumbersArray;
    phoneNumbersArray.forEach(function(phoneNum) {
        var phoneNumArray = phoneNum.split("-");
        //console.log(phoneNumArray.join(""));
        output.push(phoneNumArray.join(""));
    });

    return output;
}

var cleanNumsArr = cleanPhoneNumbers(phoneNumbers);

for (var i = 0; i < cleanNumsArr.length; i += 1) {
    console.log(cleanNumsArr[i]);
}













// ============================= (EXTRA INFO) Splicing Elements

/*
    someArray.splice(param1, param2, param3...);
    param1 = which index to start from
    param2 = how many elements to remove
    param3 = from this parameter and onward, arguments passed in will be added as new elements at the end of the array
 */

//
// // create new test array
//     var bonds = ["Craig", "Brosnan", "Dalton", "Moore", "Connery"];
//
//
// // removing elements splice
//     var missingBonds = bonds.splice(bonds.indexOf("Moore"), 2);
//     console.log(bonds);
//     console.log(missingBonds);
//
//
// // adding elements with splice
//     bonds.splice(1, 0, "Lazenby");
//     console.log(bonds);
//
//
// // replace elements
//     bonds.splice(bonds.indexOf("Craig"), 1, "Elba");
//     console.log(bonds);