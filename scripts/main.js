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
    var productsData = { "totalAmountOfSeparateProducts": 0, "products": [] };
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

    //var sum
    // var totalPrice = $("#total")
    // $("#total").html("The sum of purchases is" + sum)
    $(function() {

        // There's the gallery and the trash
        var $contents = $("#beveragesTable"),
            $shoppingCart = $("#sidebar");

        // Let the gallery items be draggable
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

        // Let the trash be droppable, accepting the gallery items
        $shoppingCart.droppable({
            accept: ".product",
            /*    classes: {
                   "ui-droppable-active": "ui-state-highlight"
               },*/

            drop: function(event, ui) {
                /*     console.log(ui);
                     console.log(event);*/
                console.log(ui.draggable);
                var name = $(ui.draggable).find('p:eq(0)').html();
                var price = $(ui.draggable).find('p:eq(1)').html();
                console.log(name);
                console.log(price);
                addProduct(name, parseFloat(price));
            },
            out: function(event, ui) {

            }
        });
    });

    function addProduct(name, price) {
        function updateProductsArray() {
            var updatedProductsArray = productsData.products;
            for (var i = 0; i < productsData.totalAmountOfSeparateProducts; i++) {
                var row = productsData.products[i];
                if (row.name == name) {
                    row.quantity += 1;
                    return updatedProductsArray;
                }
            }
            productsData.totalAmountOfSeparateProducts += 1;
            productsData.products.push({
                name: name,
                quantity: 1,
                price: price
            });
            return updatedProductsArray;
        }
        /*
                function writeIntoTable(productsArray) {
                    // cache <tbody> element:
                    var tbody = $('#tableBody');
                    //     console.log(productsData.products.length);
                    //  $( ".draggableProducts" ).remove();
                    for (var i = 0; i < productsData.totalAmountOfSeparateProducts; i++) {
                        // create an <tr> element, append it to the <tbody> and cache it as a variable:
                        var tr = $('<tr/>').appendTo(tbody);
                        //     console.log(tr);
                        //    tr.addClass(draggableProducts);
                        for (var j = 0; j < productsData.products.length; j++) {
                            // append <td> elements to previously created <tr> element:
                            console.log(productsData.products[j]);
                            tr.append('<td>' + productsData.products[j] + '</td>');
                        }
                    }
                    //   console.log(tr);
                }
        */
        var updatedProductsArray = updateProductsArray();
        /*     console.log(updatedProductsArray);
             console.log(updatedProductsArray.length);
             console.log(productsData.products);
             console.log(productsData.products.length);
         console.log("Total amount of separate products: " + productsData.totalAmountOfSeparateProducts);
          */
        //     writeIntoTable(updatedProductsArray);
        // $('#cartcontent > tbody:last-child').append('<tr> </tr>');
        totalCost += price;
        $('#total').html('Total: $' + totalCost);

    }



}