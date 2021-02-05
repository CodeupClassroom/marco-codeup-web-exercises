console.log("Its time for some conditionals!!");

var myAge = 10;

var requiredAge = 13;

// THis is an if Statement
// if(myAge >= requiredAge){
//    console.log("You can make a Social Media Account!");
// }


// This is an if/else Statement
if(myAge >= requiredAge){
   console.log("You can make a Social Media Account!");
} else {
   console.log("You are not old enough to make an account!");
}

// Ternary Operator
var areYouOldEnough = (myAge >= requiredAge) ? "You can make a Social Media Account!" : "You are not old enough to make an account!";
console.log(areYouOldEnough);

var monthsSinceOilChange = 13;

var minNumberOfMonthsForOilChange = 6;


function myFunction(){

}

// if(monthsSinceOilChange < minNumberOfMonthsForOilChange){
//    console.log("You dont need an oil change you got one " + monthsSinceOilChange + " months ago.");
// } else {
//    console.log("Hey if you like your engine you should get an oil change.");
// }





if (favoriteColor === "red"){
   console.log("Hey my favorite color is red too!");
} else if (favoriteColor === "blue"){
   console.log("Hey blue is my second most favorite color!");
}else{
   console.log("We dont have the same favorite colors :(");
}


var favoriteColor = "purple";

var secondFavColor = "cyan";


if (favoriteColor === "red"){

   if (secondFavColor === "blue"){
      console.log("We have all the favorites colors in common!")
   }else{
      console.log("We only have the favorite red color in common")
   }

} else {
   console.log("We dont have the same favorite colors :(");
}


// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// // Switch Case
// switch(pizzaPreference) {
//    case "pineapple and hot sauce":
//       alert("What a coincidence, that's my favorite!");
//       break;
//    case "cheese":
//       alert("Just plain cheese? Okay...");
//       break;
//    default:
//       alert(pizzaPreference + " isn't my favorite, but let's order some!");
//       break;
// }

// switch (){

//    case (what the case will check against):
//         Your code to be executed will go here ...
//         break;

//    The default is the eq to the else in a if/else
//       default:
//       Your code will run here if all other cases fail.
// }


favoriteColor = "blue"

switch (favoriteColor){
   case "purple":
      console.log("Hey my favorite color is purple too!");
      break;
   case "blue":
      console.log("Hey my favorite color is blue too!");
      break;
   case "green":
      console.log("Hey my favorite color is green too!");
      break;
   case "cyan":
      console.log("Hey my favorite color is cyan too!");
      break;
   case "red":
      console.log("Hey my favorite color is red too!");
      break;
   default:
      console.log("Sorry " + favoriteColor + " is not one of my favorite colors.");
      break;
}