/*
 * Total cost of the products in the cart
 */
var totalCost = 0;

/*
 * Number of distinct drinks -identified by beer_id- present in the cart
 */
var numberDistinctDrinks = 0;

/*
 * Products in the shopping cart
 * Each product is an object with beer_id, name, price and quantity properties
 */
var productsData = [];


/**
 * Function which adds a product to the shoppingcart table and adjusts the total  
 * @param id The beer_id of the beverage
 * @param name The name of the beverage
 * @param price The price of the beverage
 */
function addProduct(id, name, price) {
    'use strict';
    /**
     * Function which forms an array of products which have been placed in the shoppingcart.
     * @return An array with product objects as elements
     */
    function updateProductsArray() {
        var updatedProductsArray = productsData;
        /**
         * Loops through the total amount of separate products and checks if a certain
         * product already is added to the products array. If so the quantity of the 
         * product is just incremented by 1.
         */
        // @ to-do: check id instead of name 
        for (var i = 0; i < numberDistinctDrinks; i++) {
            var row = productsData[i];
            if (row.name == name) {
                row.quantity += 1;
                return updatedProductsArray;
            }
        }
        numberDistinctDrinks += 1;
        /**
         * Adding a new product into the array of products             
         */
        productsData.push({
            beer_id: id,
            name: name,
            quantity: 1,
            price: price
        });
        return updatedProductsArray;
    }

    //Update quantity in machine content and slot display
    updateMachineContentQuantities(id, 1);

    //Add the product to the list and modify the table
    var updatedProductsArray = updateProductsArray();
    writeIntoTable(updatedProductsArray);
    totalCost += price;
    displayTotal();
}

/**
 * Function which handles writing into shoppingcart.
 * @param an array of product objects           
 */
function writeIntoTable(productsArray) {
    'use strict';
    var tbody = $('#tableBody');
    $('#tableBody').empty();
    for (var i = 0; i < productsArray.length; i++) {
        var tr = $('<tr/>').appendTo(tbody);
        var currentProduct = productsArray[i];
        // Loops through all the own properties of the object 
        for (var property in currentProduct) {
            if (currentProduct.hasOwnProperty(property) && property != 'beer_id') {
                tr.append('<td>' + currentProduct[property] + '</td>');
            }
        }
    }
}

/**
 * Display the total cost with max one decimal
 */
function displayTotal() {
    totalCost = +totalCost.toFixed(1);
    $('#total').html('=> ' + totalCost + ' kr');
}

/**
 * Purchase the drinks in the shopping cart
 */
function purchaseTable() {
    'use strict';
    var i = 0, //Loop index
        j, //Loop index
        singleProductsArray = [], //Transformed productData in a list of beer_id representing each single beverage
        product, //Product object
        purchased = 0;

    //Transform productData into a list of beer_id for each drink
    for (; i < productsData.length; i++) {
        //For each distinct beverage
        product = productsData[i];
        for (j = 0; j < product.quantity; j++) {
            singleProductsArray.push(product.beer_id);
        }
    }

    //Send the purchase requests to the api
    for (i = 0; i < singleProductsArray.length; i++) {
        user.appendPurchases(product.beer_id, function (answer) {
            if (answer.type === "error") {
                alert("Apparently, something went wrong. Please try again.");
                console.log(answer); //Debug in case of error
            }

            purchased += 1;
            //Update display when all purchases have been done
            if (purchased === singleProductsArray.length) {
                //Update user debt
                updateBalanceDisplay();
            }
        });
    }
}

/**
 * Undo the purchases from the shopping cart in machineContent and the display
 */
function resetContentAndDisplay() {
    //Update machine content and slot displays for each distinct beverage
    for (i = 0; i < productsData.length; i++) {
        updateMachineContentQuantities(productsData[i].beer_id, -productsData[i].quantity);
    }
}

/**
 * Clear the table
 */
function clearTable() {
    'use strict';
    productsData = [];
    numberDistinctDrinks = 0;
    totalCost = 0;
    writeIntoTable([]);
    displayTotal();
}

/**
 * Wire the Clear Table and Purchase button
 */
$(function () {
    'use strict';
    $('#clearAllCart').click(function () {
        resetContentAndDisplay();
        clearTable();
    });
    $('#purchaseCart').click(function () {
        purchaseTable();
        clearTable();
    });
});

/**
 * Checks if the shopping cart is empty
 * @returns true if shopping cart is empty
 * @returns false if shopping cart has items
 */
function shoppingcartIsEmpty() {
    'use strict';
    if (productsData.length == 0) {
        return true;
    } else {
        return false;
    }
}