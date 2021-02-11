// we are going to have a lecture about loops!

// Are we there yet?

var onTheRoad = true;

// if(areWeThereYet){
//     // do some stuff?
// }

// while(onTheRoad){ // is it TRUE we are there yet?
//     onTheRoad = confirm("Are we still traveling?")
// }
//
// alert("We're here!")
//
// A second example:
// var haveToy = confirm("Can I have the toy please?")
//
// while(!haveToy){
//     haveToy = confirm("Please?")
// }
//
// if(haveToy){ // until true, we'll never get down here
//     alert("Thanks!! You're the best, can't wait to go outside!")
// }

// refactor away from ! operator ^ above example;
//changing to a POSITIVE structure:

// var waitingForToy = confirm("Are we still waiting for this toy?")
//
// while(waitingForToy){
//     waitingForToy = confirm("Well, how about now? Are we still waiting?")
// }
//
// if(!waitingForToy){ // until true, we'll never get down here
//     alert("Thanks!! You're the best! I can't wait to go outside!")
// }

// var weatherIsMessy = true;
//
// while(weatherIsMessy){
//     //if true >>> do some stuff
//     alert("Well, let's have some hot chocolate!")
//     weatherIsMessy =  confirm("Is it still messy outside?")
// }
//
// alert("Excellent - let's all go outside!")


// Help me create a WHILE loop that runs while X < 10
// var x = 10;
//
// while ( x > 0 ){
//      // x--; // x results in 9 on this line no matter what
//     console.log(x--) //post-decrement? Gonna see 10 first
// }
//
// console.log("Hello, I'm down here! " + x); // results of above

//Let's take our work and put into a FUNCTION DEFINITION

// function decrementFromTen(){
//     var x = 10;
//
//     while ( x > 0 ){
//         console.log(x--)
//     }
//     return console.log("Hey, I finished counting")
// }
//
// decrementFromTen()

//How about a function where the USER gives us a num
//then FROM THE NUM we increment until ten??

// function incrementUntilTen(num){
//     while (num < 10){
//         num = num + 1;
//         console.log(num)
//     }
//     return console.log("Wrapped up counting!")
// }

//NOW: Let's go one layer deeper - can you tell me how many times my loop has run?

// function incrementUntilTen(num){
//     var counter = 0;
//
//     while (num <= 10){
//         console.log(num)
//
//         num = num + 1;
//         counter = counter + 1;
//     }
//     return console.log("Wrapped up counting! The loop ran " + counter + " times.")
// }

// A do/while loop is quite similar to a while loop. The biggest difference is that a do/while loop will run at least once
// [do this thing for sure this first time . . then check condition to continue VS. check condition . . will I do this thing at all?]

//do {
// Code my do-while loop will run AT LEAST ONCE.
//} while (condition to check to proceed)

// while(false){
//     console.log("Will you ever see me?")
// }
//
// var count = 0;
//
// do {
//     count++;
//     console.log("Let's see this from the do-while loop " + count + " times.")
//
// } while (false)

// Let's have some fun with what we've seen so far: A conversation between a TOMB THIEF and the GUARDIAN TO THE DOOR:

// var secret;
//
//
// // // while loops behave similarly to our IF conditionals we've seen before
// //
// while (secret !== "sesame") {
//     alert("Currently, secret is: " + secret)
//     secret = prompt("'To proceed, you must tell me the secret password. . .'");
// }
//
// if (secret === "sesame"){
//     alert("'YES. You have whispered the correct password.'");
//     alert("Nothing happens.");
// }
//
//
// // do - while = fires AT LEAST ONCE, even if the condition (secret does not equal string "sesame") isn't met
// do {
//     alert("The door is unmoving. 'I thought I told you already what the secret password was? o_o' the TOMB THIEF asks");
// } while (secret !== "sesame")
//
//
// // note the same condition being asked here as the do-while, but we don't ever seen George's message with this type of loop
// while (secret !== "sesame"){
//     console.log("'You won't see me, but my name is George, and I'm the guy that opens the door - sorry, I overslept!! Thanks for visiting the FORBIDDEN CAVERNS!'");
// }
//
// //while loop matches condition and fires - to avoid infinite loop, George 'resets' our variable in our story
// while (secret == "sesame") {
//     alert("I definitely told you already what the secret password was. -_- This door is wack.");
//     alert("The door SHUDDERS SUDDENLY and opens crankily with a cacophany of noise that is worrisome. .");
//     console.log("'Hey, George again - come on in, I need to put the door offline for a bit after you're in, so I'm going to reset the secret. Enjoy the FORBIDDEN CAVERNS!!'");
//     secret = "georgewuzhere";
// }

// Let's put a DO WHILE loop into a function:
// Function to log num until GREATER THAN 100
// What differences in behavior will we see?

// function doWhileMultiplyByTwoUntilGreaterThan100(num){
//     do {
//         num = num * 2;
//         console.log("Hey, it's me do-while: " + num);
//     } while (num < 100)
// }
//
// doWhileMultiplyByTwoUntilGreaterThan100(101)
//
// function whileLoopMultipleByTwoUntilGreaterThan100 (num) {
//     while (num < 100) {
//         num = num * 2;
//         console.log("Hey, it's me while-loop: " + num);
//     }
// }
//
// whileLoopMultipleByTwoUntilGreaterThan100(101)

// For loops: Loops that are designed to run a given number of times. Think more math thinking.

// for (var incrementer = 1; incrementer <= 10; incrementer++) {
//     console.log("This loop has run " + incrementer + " time(s).");
// }

// The for loop has more to it as you can see. Let's break down the arguments:

// - incrementer initialization - Here we are declaring the variable for our incrementer, as well as its value.

// - condition - The loop will continue to run until this condition is no longer true.

// - incrementer change - what happens to the incrementer in once the loop has finished executing the code for a given iteration.

// Say Hello to Marco in a console.log for Five times - let's use a FOR LOOP

// for (var increment = 0; increment <= 5; increment++){
//     console.log("Hello, Marco! We've said hello " + (increment + 1) + " times.")
// }

// function sayHelloXTimes(num) {
//     for (num; num >= 0; num--) {
//         if (num % 5 === 0) {
//             console.log("Howdy! Currently num is: " + num);
//         } else {
//             console.log("Hello! Currently num is: " + num);
//         }
//     }
//     // return "Hello!";
// }
//
// sayHelloXTimes(60)

// BREAK AND CONTINUE: Ways to manipulate the behavior of your loop [stop vs skip]

// var x = 0;
//
// while (true) { //When is this condition going to change?
//     alert("This is the song that never ends. It just goes on and on my friends. Somebody started singing not knowing what it was, and now we'll all just keep on singing this because");
//     x++;
//     if (x === 5) {
//         alert("LambChop, cut it out!!")
//         break;
//     }
//     // break;
// }

// for (var i = 5; i < 100000; i = i + 5){
//     console.log(i)
//     if (i === 5){
//
//         break;
//     }
//
// }

// Let's talk about . . . continue :)

// for (var i = 0; i < 100; i++){
//
//     if (i % 2 !== 0) {
//
//         continue;
//         console.log(i)
//     }
//     console.log(i);
// }

// Close our lecture: Let's do a CODE BUZZ
// Whenever a number is divisible by SIX: print CODEUP
// Whenever a number is divisible by TWO: print CODE
// Whenever a number is divisible by THREE: print UP
// If num is 25, do not print that number
// OTHERWISE: print the number :)

//
// var loopCount = 0;
//
// for (var i = 1; i <= 50; i++) {
//
//     if (i === 25) {
//       continue;
//     } else if (i % 6 === 0){
//         loopCount += 1;
//         console.log("Codeup")
//     } else if (i % 2 === 0){
//         loopCount += 1;
//         console.log("Code")
//     } else if (i % 3 === 0){
//         loopCount += 1;
//         console.log("Up")
//     } else {
//         console.log(i)
//     }
//
//
// }
//
// console.log("Codebuzz interrupted our numbers: " + loopCount + " times! Thanks Codebuzz!");
//
