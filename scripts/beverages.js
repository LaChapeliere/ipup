/**
 * @author      Emma Barme
 * @version     0.1
 */

/*
 * The array holding the Slots representing the beverages in the consumer view
 */
var beveragesSlots = [];

/*
 * A dictionnary of the distinct beverages present in the machine with name of the beverage as key and id as value
 */
var availableBevIds = {};

/**
 * Constructor for the Slot object
 * Represents a slot in the machine, with the information necessary for its display, attached to it's corresponding html object
 */
function Slot(beer_id, name, price, amount, category, alcohol, displayBlock) {
    'use strict';

    var beerId = beer_id, //The id of the beverage occupying the slot
        name = name, //The screen name of the beverage
        price = price, //The price of the beverage
        amount = amount, //The amount of bottles of the beverages in the slot
        type = category, //The type of the beverage,
        alcohol = alcohol, //True if the drink contains alcohol
        display = displayBlock, //The DOM element corresponding to the slot
        available = true; //Whether the drink is currently available or filtered out 

    /**
     * Getter of alcohol
     * @return alcohol
     */
    this.isAlcoholic = function() {
        return alcohol;
    }

    /**
     * Display the information for the beverage
     */
    this.displayInfo = function() {
        var infoDisplay = display.getElementsByClassName("slotLeft")[0];
        infoDisplay.getElementsByClassName("drinkName")[0].textContent = name;
        infoDisplay.getElementsByClassName("price")[0].textContent = price + " kr";
        infoDisplay.getElementsByClassName("stock")[0].textContent = amount;
        this.fetchImage();
    }

    /**
     * Fetch the image corresponding to the beverage category and set it as the display child image
     */
    this.fetchImage = function() {
        display.getElementsByClassName("slotElement")[0].style.backgroundImage = 'url("./../resources/img/' + category + '.png")';
    }

    /**
     * Make the drink available is the consumer view by ungreying it and making it draggable
     */
    this.makeAvailable = function() {
        available = true;
        //Changing aspect
        display.style.opacity = 1;
        display.style.filter = "alpha(opacity = 100)";
        //Making the slot draggable
        if (!$(display).data('ui-draggable')) {
            $(display).draggable();
        }
        $(display).draggable('enable');
    }

    /**
     * Make the drink unavailable is the consumer view by greying it and making it non-draggable
     */
    this.makeUnavailable = function() {
        available = false;
        //Changing aspect
        display.style.opacity = 0.4;
        display.style.filter = "alpha(opacity = 40)";
        //Making slot non-draggable
        if (!$(display).data('ui-draggable')) {
            $(display).draggable();
        }
        $(display).draggable('disable');
    }
    
    /**
     * Update the quantity of a beverage
     * @param newQuantity The new quantity of beverage in this slot
     */
    this.updateSlotQuantity = function(newQuantity) {
        var infoDisplay = display.getElementsByClassName("slotLeft")[0];
        amount = newQuantity;
        infoDisplay.getElementsByClassName("stock")[0].textContent = "";
        infoDisplay.getElementsByClassName("stock")[0].textContent = amount;
    }
}

/**
 * Populate the table of beverages in the consumer view
 * @param displayAlco True if the alcoholic drinks should be available
 * @param displaySoft True if the non-acoholic drinks should be available
 */
function populateSlotsConsumer(displayAlco, displaySoft) {
    'use strict';
    var beveragesTable = document.getElementById("beveragesTable"), //The table to populate with the drinks
        api = new APIConnect, //The api connection to get the machine content
        i, //Loop index
        j, //Loop index
        rows, //Rows of beveragesTable
        cells, //Cells of the beveragesTable
        displayBlock, //DOM-element in which to display the slot info
        allBevButton = document.getElementById("allBevButton"), //Filter button to make all drinks available
        alcoholOnlyButton = document.getElementById("alcoDrinksButton"), //Filter button to make only alcoholic drinks available
        softOnlyButton = document.getElementById("softDrinksButton"); //Filter button to make only soft available

    //Fetch the content and create a Slot object to hold it
    api.fetchContent(function(machineContent) {
        var beverage,
            beverageInfo,
            index;

        //For each slot in the machine
        rows = beveragesTable.getElementsByTagName("tr");
        for (i = 0; i < rows.length; i++) {
            cells = rows[i].getElementsByTagName("td");
            for (j = 0; j < cells.length; j++) {
                index = i * cells.length + j;
                beverageInfo = machineContent[index];
                beverage = new Slot(beverageInfo.beer_id, beverageInfo.name, beverageInfo.price, beverageInfo.amount, beverageInfo.category, beverageInfo.alcoholic, cells[j]);
                //Send the information to the display
                beverage.displayInfo();
                beveragesSlots.push(beverage);
                //Add the beverage in the dictionnary of available distinct drinks
                availableBevIds[beverageInfo.name] = beverageInfo.beer_id;
            }
        }
    });
    //Initial filter of drinks
    filterAlcoholDrinks(displayAlco, displaySoft);

    //Wire the filter buttons
    allBevButton.onclick = function() {
        console.log("All");
        filterAlcoholDrinks(true, true);
    };
    softOnlyButton.onclick = function() {
        console.log("Soft only");
        filterAlcoholDrinks(false, true);
    };
    alcoholOnlyButton.onclick = function() {
        console.log("Alco only");
        filterAlcoholDrinks(true, false);
    };
}

/**
 * Extract the category of the beverage from the information provided by the database
 * @param providedInfo
 * @return An array with a string with the category of the beverage and a boolean indicating whether or not the drink is alcoholic
 * Possible values for the category: beer | lager | stout | ale | soft | cider | white_wine | red_wine
 */
function beverageCategory(providedInfo) {
    'use strict';
    var category = "beer",
        patterns = { red_wine: /rött vin/i, white_wine: /vitt vin/i, ale: /ale/i, stout: /stout/i, lager: /lager/i, cider: /cider/i, beer: /öl/i, soft: /alkoholfritt/i },
        key,
        alcoholFreePattern = /alkoholfritt/i,
        alcoholic = !alcoholFreePattern.test(providedInfo);

    for (key in patterns) {
        if (patterns.hasOwnProperty(key)) {
            if (patterns[key].test(providedInfo)) {
                category = key;
                break;
            }
        }
    }

    return [category, alcoholic];
}

/**
 * Manages the filtering out of drinks in the consumer view
 * @param displayAlco True if the alcoholic drinks should be available
 * @param displaySoft True if the non-acoholic drinks should be available
 */
function filterAlcoholDrinks(displayAlco, displaySoft) {
    'use strict';
    var i = 0,
        slot;
    //For each beverage
    for (; i < beveragesSlots.length; i++) {
        slot = beveragesSlots[i];
        //If the beverage is alcoholic
        if (slot.isAlcoholic()) {
            if (displayAlco) {
                slot.makeAvailable();
            } else {
                slot.makeUnavailable();
            }
            continue;
        }


        //If the beverage is non-acoholic
        if (displaySoft) {
            slot.makeAvailable();
        } else {
            slot.makeUnavailable();
        }
    }
}