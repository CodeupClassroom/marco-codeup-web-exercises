(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ["Alex","Nathan","Karla","Vanessa"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log("names.length :" + names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log("names[0] :" + names[0]);
    console.log("names[1] :" + names[1]);
    console.log("names[2] :" + names[2]);
    console.log("names[3] :" + names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    console.log("forLoop Names")

    // Preferred forLoop

    for (var i = 0; i < names.length; i++){
        console.log(names[i]);
    }

    // this works too!

    // for (var i = 0; i <= names.length - 1; i++){
    //     console.log(names[i]);
    // }

    // for (var i = 0; i <= 3; i++){
    //     console.log(names[i]);
    // }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    console.log("forEach Loop")

    names.forEach(function(aName){
        console.log(aName);
    })

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function first(arr){
        return arr[0];
    }

    function second(arr){
        return arr[1];
    }

    function last(arr){
        return arr[arr.length - 1];
    }

    console.log("Three new functions");

    console.log(first(names));
    console.log(second(names));
    console.log(last(names));

})();