/**
 * @author      Emma Barme
 * @version     0.2
 */

/**
 * Utily function to execute js scripts linked to an html only when the page has finished loading
 * @param The function to be executed
 */
function docLoaded(fn) {
    'use strict';
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
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

        var updatedProductsArray = updateProductsArray();
        writeIntoTable(updatedProductsArray);
        totalCost += price;
        $('#total').html('Total: $' + totalCost);
    }

    /**
     * Function that does the actual dragging and dropping
     */
    $(function() {
        var $contents = $("#beveragesTable"),
            $shoppingCart = $("#sidebar");

        $("td", $contents).draggable({
            cancel: "a.ui-icon", // clicking an icon won't initiate dragging
            revert: "invalid", // when not dropped, the item will revert back to its initial position
            containment: "document",
            helper: "clone",
            cursor: "grab",
            start: function(event, ui) {
                // Function call to highlight the sidebar once dragging starts
                //    changeSidebarId(sidebar);
            },
            stop: function(event, ui) {
                // Function call to stop highlighting of the sidebar once dragging stops
                //    changeSidebarId(sidebar);
            }

        });

        $shoppingCart.droppable({
            accept: ".product",
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
}