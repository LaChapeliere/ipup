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
    var data = { "total": 0, "rows": [] };
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
                //    changeSidebarId(sidebar);
            },
            stop: function(event, ui) {
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
                console.log("Now dragged out");
            }
        });
    });

    function addProduct(name, price) {
        function add() {
            for (var i = 0; i < data.total; i++) {
                var row = data.rows[i];
                if (row.name == name) {
                    row.quantity += 1;
                    return;
                }
            }
            data.total += 1;
            data.rows.push({
                name: name,
                quantity: 1,
                price: price
            });
        }
        add();
        totalCost += price;
        $('#cartcontent > tbody:last-child').append('<tr>...</tr>');
        $('#total').html('Total: $' + totalCost);
    }

}