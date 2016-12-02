/**
 * @author      Emma Barme
 * @version     0.1
 */

/**
 * Constructor for the Slot object
 * Represents a slot in the machine, with the information necessary for its display, attached to it's corresponding html object
 */
function Slot(beer_id, name, price, amount, category, displayBlock) {
    'use strict';
    
    var beerId = beer_id, //The id of the beverage occupying the slot
        name = name, //The screen name of the beverage
        price = price, //The price of the beverage
        amount = amount, //The amount of bottles of the beverages in the slot
        type = category, //The type of the beverage
        display = displayBlock;
    
    /**
    * Display the information for the beverage
    */
    this.displayInfo = function() {
        var infoDisplay = display.getElementsByClassName("slotLeft")[0];
        infoDisplay.getElementsByClassName("drinkName")[0].textContent = name;
        infoDisplay.getElementsByClassName("price")[0].textContent = price;
        infoDisplay.getElementsByClassName("stock")[0].textContent = amount;
        this.fetchImage();
    }
    
    /**
    * Fetch the image corresponding to the beverage category and set it as the display child image
    */
    this.fetchImage = function() {
        display.getElementsByClassName("slotElement")[0].style.backgroundImage = 'url("./../resources/img/' + category + '.png")';
    }
}

/**
 * Populate the table of beverages in the consumer view
 */
function populateSlotsConsumer() {
    var beveragesTable = document.getElementById("beveragesTable"),
        api = new APIConnect,
        i,
        j,
        rows,
        cells,
        i = 0,
        displayBlock;
    
    console.log(beveragesTable);
    
    api.fetchContent( function(machineContent) {
        var beverage;
        
        //For each slot in the machine
        rows = beveragesTable.getElementsByTagName("tr");
        for (i = 0; i < rows.length; i++) {
            cells = rows[i].getElementsByTagName("td");
            for (j = 0; j < cells.length; j++) {
                beverageInfo = machineContent[i * rows.length + j];
                beverage = new Slot(beverageInfo.beer_id, beverageInfo.name, beverageInfo.price, beverageInfo.amount, beverageInfo.category, cells[j]);
                beverage.displayInfo();
            }
        }
    });
}
