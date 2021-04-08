$(document).ready(function(){
    "use strict";
    console.log("Intro to AJAX!");

    var car = {
        make: "Chrysler",
        model: "Pacifica",
        year: 2018,
        funToDrive: true
    }
    //
    // console.log("should be a string", JSON.stringify(car));
    // var jsonOfCar = JSON.stringify(car);
    // console.log("json in a variable", jsonOfCar);
    // console.log("the object car", car);


    //JSON?


    /*********************************************
     *              INTRO TO AJAX
     ******************************************** */

    /*
     * TO DO TOGETHER: Let's make our first AJAX request. Generate a new Hookbin
     * endpoint, then query it for a username...
     */
    var hookbinUrl = 'https://hookb.in/6Jj0pYzJzkILbb031yrp';
    //console.log($.ajax(hookbinUrl));

    /*
     * TO DO TOGETHER: For this next one, we'll send over some data. Add the
     * following JavaScript Object to your Hookbin AJAX request:
     */

    // $.ajax(hookbinUrl, {
    //     type: "POST",
    //     data: JSON.stringify(car)
    // });

    // Send a get request and query for the username bob.
    //$.ajax(hookbinUrl + "?username=bob");

    /*
     * TO DO: Refactor the third example using a GET request object instead of
     * appending a query to the url.
     */

    $.ajax(hookbinUrl, {
        method: "GET",
        data: {
            username: "bob",
            active: true
        }
    })

    /*********************************************
     *              REQUESTS and RESPONSES
     ******************************************** */

    /*
     * TO DO TOGETHER: Now, let's see how we can use AJAX requests to communicate with an
     * API and get data back. Uncomment the line below.
     */

    var swapiBaseURL = "https://swapi.dev/api/";

    $.ajax(swapiBaseURL + 'people/', {
        method: "GET",
        data: {
            search: "r2"
        }
    }).done(function(data){
        console.log(data);
    });

    /*
     * TO DO: Look up the Star Wars API and make a similar request that would
     * return a list of all Star Wars films.
     */

    $.ajax(swapiBaseURL + "films/").done(function(data){
        console.log(data);
    }).fail(function(jqXHR, status){
        console.log("failed to get films");
        console.log(status);
        console.log(jqXHR);
    }).always(function(){
        console.log("Getting films");
    });


    /*
     * That's fine and dandy, but what if we have a local JSON file and
     * want to request data from that? We can! The URL will be the path to
     * the JSON file.
     *
     * TO DO TOGETHER: Let's make a request to the books inventory we saved
      * previously.
     */
    var myBooks = $.ajax("data/books.json");

    function onSuccess (data){
        console.log(data);
    }

    function onFail(jqXhr){
        console.log("Check your file path.");
    }

    function onAlways(){
        console.log("Looking for books...");
    }

    myBooks.done(onSuccess);

    /*
     * TO DO TOGETHER: What if we want to display a message if this AJAX request
     * fails?
     */

    myBooks.fail(onFail);

    /*
     * TO DO TOGETHER: How about a function that always runs whether the request
     * fails or not?
     */

    myBooks.always(onAlways);

    /*
     * TO DO: Refactor your Star Wars API request to log a message that says
     * "Something wrong with your request..." if it fails.
     */

    /*
     * TO DO: Refactor your Star Wars API request to log a message that says
     * "...loading" whether the request fails or not.
     */


    /*
     * TO DO TOGETHER: Create a Star Wars API request that queries for "A
     * New Hope" and store this request in a variable.
     *
     * Take a look at the object that is being returned. Write a console log
      * that displays the director of the film.
     */




    /*
     * TO DO: Create a new variable that makes a similar request. Search for
     * "The Force Awakens" and console log its release date.
     */



    /*
     * TO DO: Make a request to books.json. Return the author of "The
     * Canterbury Tales."
     */



    /*********************************************
     *              GET and POST SHORTHAND
     ******************************************** */

    /*
     * TO DO TOGETHER: Let's take a look at our AJAX requests so far and see
     * how we can refactor them with the GET and POST shorthand.
     *
     * Remember, this isn't necessary. It's up to you to decide which
     * syntax to use. (: At the end of the day, what we are doing is making
     * a request to a server!
     */

    /*
     * TO DO TOGETHER: There's some additional refactoring we can do. We can
     * break up our callback methods on an AJAX request.
     *
     * We can also declare named functions to pass in to these methods.
     */

    /*********************************************
     *              AJAX and HTML
     ******************************************** */

    /*
     * TO DO TOGETHER: Make a request to books.json and append all book
     * titles to your html. You may need to create a div and assign a
     * class/id to target it.
     */

    // this variable stores our request



    // call the function to generate data on page load



    /*
     * TO DO: Add your favorite book to the end of books.json.
     */

    /*
     * Bonus: Create a button that refreshes the contents of your html
     * without refreshing the page.
     */

    // event listener on refresh button


});