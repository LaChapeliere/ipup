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
 * @param name - the name of the beverage
 * @param price - the price of the beverage
 */
function addProduct(name, price) {
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
            name: name,
            quantity: 1,
            price: price
        });
        return updatedProductsArray;
    }

    //Add the product to the list and modify the table
    var updatedProductsArray = updateProductsArray();
    writeIntoTable(updatedProductsArray);
    totalCost += price;
    $('#total').html('Total: $' + totalCost);
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
 * Clear the table
 */
function clearTable() {
    productsData = [];
    numberDistinctDrinks = 0;
    totalCost = 0;
    writeIntoTable([]);
    $('#total').html('Total: $' + totalCost);
}

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