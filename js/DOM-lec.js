// var topHeaderElement = document.getElementById("top-header");
//
// console.log(topHeaderElement);

//How else can we locate? We can check out CLASS and TAG as well

// var currentOffers = document.getElementsByClassName("special-offer")
//
// console.log(currentOffers);

// var listItems = document.getElementsByTagName("li")
//
// console.log(listItems);

// Now we're getting back individual or collections of elements: that's cool, but what can we do with that?
//
// var myForm1 = document.getElementsByTagName("form")
//
// console.log(myForm1);

//Okay: I see that we can get into forms specifically (document.forms) - but what about modifying and accessing other elements?

// Let's grab our LIs with the class of "hat-sold"

var topSellers = document.getElementsByClassName("hat-sold");

console.log(topSellers);

// UH OH - those were LAST MONTHS top sellers :( Can we update these list items to say "Hat TBD" and be STRONG about it (without ever touching the HTML)

for (var i = 0; i < topSellers.length; i++){
    topSellers[i].innerHTML = "<strong>Hat TBD</strong>"
}

// innerText vs innerHTML
// WOOPS - we got another call from the people upstairs. Can we change "Our Top Sellers" to be something that makes more sense - like "Will update soon!"

var bestSellerHeader = document.getElementById("best-seller")

console.log(bestSellerHeader);

bestSellerHeader.innerText = "Will update soon!" // can't use tags here - will end up being printed on the screen
// bestSellerHeader.innerHTML = "<em>Will update soon!</em>" // will work fine! HTML tags are good to go!

// What about all of these attributes? I'm glad you asked!

//hasAttribute: let me know TRUE OR FALSE if that attribute is located within the element

var bottomLink = document.getElementById("bottom-link")

console.log(bottomLink.hasAttribute('id'));
console.log(bottomLink.hasAttribute('href'));
console.log(bottomLink.hasAttribute('style'));

//getAttribute: let me know the VALUE of the attribute ("d-flex","https://www.google.com" < what is the value after the attribute?)

console.log(bottomLink.getAttribute("href"));
console.log(bottomLink.getAttribute("id"));

//setAttribute: let's change the attribute's value!

bottomLink.setAttribute("href", "https://duckduckgo.com/")

var searchArea = document.getElementById("hat-search")

searchArea[0].setAttribute("placeholder", "Hey, how 'bout a hat?")

//Accessing and Modifying STYLE

var bodyElement = document.getElementsByTagName("body");

console.log(bodyElement);

bodyElement[0].style.color = "white";

bodyElement[0].style.backgroundColor
bodyElement[0].style["background-color"] = "gray";