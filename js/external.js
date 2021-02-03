// console.log("Hello from external JavaScript");
//
// // here we can use the alert function to give the user a winder on top of their browser
// alert("Welcome to my Website!");
//
// // here we prompt the user for a string with the prompt function
// var UsersFavoriteColor = prompt("What is your favorite color?");
//
// // we can concatenate stings withe the user input to make a dynamic message
// alert("Great, " + UsersFavoriteColor + " is my favorite color too!!");
//
// //we can use the parseInt function to convert a string to a int (or also called a number)
// var littleMermaid = parseInt(prompt("How many days have you had the Little Mermaid?"));
//
// var brotherBear = parseInt(prompt("How many days have you had Brother Bear?"));
//
// var hercules = parseInt(prompt("How many days have you had Hercules?"));
//
// // we can add all the values the user has given to see a total of how much is owed
// var totalOwed = (littleMermaid + brotherBear + hercules) * 3;
//
// alert("You owe BlockBuster $" + totalOwed);
//
// var hoursWorkedForGoogle = Number(prompt("How many hours did you work for Google?"));
//
// var hoursWorkedForAmazon = Number(prompt("How many hours did you work for Amazon?"));
//
// var hoursWorkedForFacebook = Number(prompt("How many hours did you work for Facebook?"));
//
// var totalFromGoogle = hoursWorkedForGoogle * 400;
//
// var totalFromAmazon = hoursWorkedForAmazon * 380;
//
// var totalFromFacebook = hoursWorkedForFacebook * 350;
//
// alert("You have made a total of $" + (totalFromGoogle + totalFromAmazon + totalFromFacebook) + " this week!");
//
// var classIsFull = confirm("Is the class you are trying to join full?");
//
// var hasScheduleConflicts = confirm("Do you have a class at 2:30 already?");
//
// alert("You can join the class is a " + (!classIsFull && !hasScheduleConflicts) + " statement.");

var isOfferValid = confirm("Is the offer still valid?");

var hasMoreThanTwoItems = parseInt(prompt("How many items do you have in your cart?")) >= 2;

var isPremiumMember = confirm("Are you a premium member?");

var canUserUseOffer = (hasMoreThanTwoItems || isPremiumMember) && isOfferValid;

alert("You can use this offer is a " + canUserUseOffer + " statement.");

// You can also do this

// var hasEnoughItems = hasMoreThanTwoItems || isPremiumMember;
//
// var canUserUseOffer = hasEnoughItems && isOfferValid;




