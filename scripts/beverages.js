/**
 * @author      Emma Barme
 * @version     0.1
 */

/*
 * The array holding the Slots representing the beverages in the consumer view.
 */
var beveragesSlots = [];

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

    /**
     * Make the drink available is the consumer view by ungreying it and making it draggable
     */
    this.makeAvailable = function() {
        display.style.opacity = 1;
        display.style.filter = "alpha(opacity = 100)";
        available = true;
        $(display).draggable('enable');
    }

    /**
     * Make the drink unavailable is the consumer view by greying it and making it non-draggable
     */
    this.makeUnavailable = function() {
        display.style.opacity = 0.4;
        display.style.filter = "alpha(opacity = 40)";
        available = false;
        $(display).draggable('disable');
    }
}

/**
 * Populate the table of beverages in the consumer view
 */
function populateSlotsConsumer() {
    'use strict';
    var beveragesTable = document.getElementById("beveragesTable"),
        api = new APIConnect,
        i,
        j,
        rows,
        cells,
        i = 0,
        displayBlock,
        allBevButton = document.getElementById("allBevButton"),
        alcoholOnlyButton = document.getElementById("alcoDrinksButton"),
        softOnlyButton = document.getElementById("softDrinksButton");

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
            }
        }
    });

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
 * Function to execute drag 'n drop functionality
 */
function dragNDrop() {
    'use strict';
    var sidebar = document.getElementById("sidebar");
    var productsData = { "totalAmountOfDifferentProducts": 0, "products": [] };
    var totalCost = 0;

    /**
     * Function to change the id of the sidebar
     * @param elementToBeChanged is the element which id is changed
     */
    function changeSidebarId(elementToBeChanged) {
        if (elementToBeChanged.id == "sidebar") {
            elementToBeChanged.setAttribute('id', 'sidebarHighlighted');
        } else {
            elementToBeChanged.id = "sidebar";
        }
    }

    /**
     * Function which handles writing into shoppingcart.
     * @param an array of product objects           
     */
    function writeIntoTable(productsArray) {
        var tbody = $('#tableBody');
        $('#tableBody').empty();
        for (var i = 0; i < productsArray.length; i++) {
            var tr = $('<tr/>').appendTo(tbody);
            var currentProduct = productsArray[i];
            // Loops through all the own properties of the object 
            for (var property in currentProduct) {
                if (currentProduct.hasOwnProperty(property)) {
                    tr.append('<td>' + currentProduct[property] + '</td>');
                }
            }
        }
    }

    /**
     * Function which adds a product to the shoppingcart table and adjusts the total  
     * @param name - the name of the beverage
     * @param price - the price of the beverage
     */
    function addProduct(name, price) {
        /**
         * Function which forms an array of products which have been placed in the shoppingcart.
         * @return An array with product objects as elements
         */
        function updateProductsArray() {
            var updatedProductsArray = productsData.products;
            /**
             * Loops through the total amount of separate products and checks if a certain
             * product already is added to the products array. If so the quantity of the 
             * product is just incremented by 1.
             */
            for (var i = 0; i < productsData.totalAmountOfDifferentProducts; i++) {
                var row = productsData.products[i];
                if (row.name == name) {
                    row.quantity += 1;
                    return updatedProductsArray;
                }
            }
            productsData.totalAmountOfDifferentProducts += 1;
            /**
             * Adding a new product into the array of products             
             */
            productsData.products.push({
                name: name,
                quantity: 1,
                price: price
            });
            return updatedProductsArray;
        }

        var updatedProductsArray = updateProductsArray();
        writeIntoTable(updatedProductsArray);
        totalCost += price;
        $('#total').html('Total: $' + totalCost);
    }

    /**
     * Clear the table
     */
    function clearTable() {
        productsData = { "totalAmountOfDifferentProducts": 0, "products": [] };
        totalCost = 0;
        writeIntoTable([]);
        $('#total').html('Total: $' + totalCost);
    }

    /**
     * Function that does the actual dragging and dropping
     */
    $(function() {
        $(".product").draggable({
            revert: "invalid", // when not dropped, the item will revert back to its initial position
            containment: "document",
            helper: function(e, ui) {
                /*    console.log(ui);
                    console.log(e);
                    console.log($(this).clone());*/
                return $(this).clone();
                //               return $(this).clone().height($(this).height());
            },
            cursor: "grab",
            start: function(event, ui) {
                //  $(ui.helper).addClass("ui-draggable-helper");
                // Function call to highlight the sidebar once dragging starts
                changeSidebarId(sidebar);
            },
            stop: function(event, ui) {
                // Function call to stop highlighting of the sidebar once dragging stops
                changeSidebarId(sidebar);
            }

        });

        $("#sidebar").droppable({
            //      accept: ".product",
            drop: function(event, ui) {
                // console.log(ui.draggable);
                var name = $(ui.draggable).find('p:eq(0)').html();
                var price = $(ui.draggable).find('p:eq(1)').html();
                addProduct(name, parseFloat(price));
            },
            out: function(event, ui) {
                // Not sure if this is needed in the project work.
            }
        });
    });

    /*
     * Wire the Clear Table and Purchase button
     */
    $(function() {
        $('#clearAllCart').click(function() {
            clearTable();
        });
        $('#purchaseCart').click(function() {
            console.log("ADD PURCHASE");
            clearTable();
        });
    });
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