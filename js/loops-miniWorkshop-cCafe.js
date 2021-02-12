function codeupCafe() {

    var entrees = "";
    var orderingFood;

    do {

        entrees = parseInt(prompt("How many codeup curry orders did you want?"))

        if (entrees <= 0 || isNaN(entrees)) {
            alert("Hey - you need to order at least one plate of food!")
            orderingFood = true;
        } else {

            orderingFood = false; //
            alert("Alright, we'll get your " + entrees + " orders of curry going in our back kitchen!")
        }

    } while (orderingFood)

    var totalOrders = entrees;

// while loop = set up the structure to PROCESS this many entree

    while (entrees > 0) {
        alert("We still have some orders to get out!");

        var orderUp = confirm("Did you get that plate up? Is this entree ready to serve?");

        if (orderUp) {
            entrees--;
            alert("Yeah! Great work y'all! We've got " + entrees + " to go!")
        } else {
            alert("Alright - let's get this moving, we've got " + entrees + " tickets left!")
        }

    }

    alert("Phew - that was a lot of orders, but we did a great job getting them out! Hi5s~~")

// for loop = set up the structure to SHOW AMOUNT of entrees [manager in the office counting num of entrees]

    for (totalOrders; totalOrders > 0; totalOrders--) {


        alert("Entering ticket into Google Sheets - " + totalOrders + " left to enter into our spreadsheet!")

    }

    alert("Another great day at the Codeup Cafe - looking forward to the business we see tomorrow!")
}