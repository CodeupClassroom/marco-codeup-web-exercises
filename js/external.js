console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

var UsersFavoriteColor = prompt("What is your favorite color?");

alert("Great, " + UsersFavoriteColor + " is my favorite color too!!");

var littleMermaid = parseInt(prompt("How many days have you had the Little Mermaid?"));

var brotherBear = parseInt(prompt("How many days have you had Brother Bear?"));

var hercules = parseInt(prompt("How many days have you had Hercules?"));

var totalOwed = (littleMermaid + brotherBear + hercules) * 3;

alert("You owe BlockBuster $" + totalOwed);

var hoursWorkedForGoogle = Number(prompt("How many hours did you work for Google?"));

var hoursWorkedForAmazon = Number(prompt("How many hours did you work for Amazon?"));

var hoursWorkedForFacebook = Number(prompt("How many hours did you work for Facebook?"));

var totalFromGoogle = hoursWorkedForGoogle * 400;

var totalFromAmazon = hoursWorkedForAmazon * 380;

var totalFromFacebook = hoursWorkedForFacebook * 350;

alert("You have made a total of $" + (totalFromGoogle + totalFromAmazon + totalFromFacebook) + " this week!");