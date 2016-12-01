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
    var data = { "total": 0, "rows": [] };
    var totalCost = 0;
    var sidebar = document.getElementById("sidebar");
    console.log(sidebar);

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

    $(function() {
        console.log("Function ran");
        $(".product").draggable({
            revert: "valid",
            // revert: false,
            drag: function(event, ui) {
                console.log("Dragging");

                console.log(event);
                console.log(ui);
                //   $("#info").html("<font color=red>This square will go back to it`s original position, unless it`s dropped in target zone.</font> ");
            }
        });
        $("#sidebar").droppable({
            drop: function(event, ui) {
                console.log("Dropping");

                console.log(event);
                console.log(ui);
                //  $(this).css("background-color", "lightgreen")
            },
            out: function(event, ui) {
                console.log("Now out");

                console.log(event);
                console.log(ui);
                //  $(this).css("background-color", "")
            }
        });
    });


    /**
     * This method handles the drag 'n drop functionality
     */
    /*
    $(function() {
        $('#cartcontent').datagrid({
            singleSelect: true
        });
        console.log(sidebar);
        $('.product').draggable({
            revert: true,

            onStartDrag: function() {
                console.log("Started dragging");
                changeSidebarId(sidebar);
                console.log(sidebar);

                $(this).draggable('options').cursor = 'pointer';
                //     $(this).draggable('proxy').css('z-index', 10);
            },
            onStopDrag: function() {
                console.log("Stopped dragging");
                console.log($(this));
                changeSidebarId(sidebar);
                console.log(sidebar);

                $(this).draggable('options').cursor = 'pointer';
            }
        });
        $('#sidebar').droppable({
            onDragEnter: function(e, source) {
                $(source).draggable('options').cursor = 'auto';
                //     changeSidebarId(sidebar);
                //     console.log($(this));

            },
            onDragLeave: function(e, source) {
                console.log("Started onDragLeave");
                //   changeSidebarId(sidebar);
                $(source).draggable('options').cursor = 'not-allowed';
            },
            onDrop: function(e, source) {
                console.log("Started onDrop");
                //   changeSidebarId(sidebar);
                var name = $(source).find('p:eq(0)').html();
                //     console.log(source);
                //     console.log(name);
                var price = $(source).find('p:eq(1)').html();
                //    console.log(price);
                addProduct(name, parseFloat(price));
            }
        });
    });
    */
    /**
     * Function handles adding a product with a certain price to data array which holds information
     * on the product and price and finally loads the new row or quantity number to datagrid.  
     * @param name The name of the product
     * @param price The price of the product placed 
     */
    function addProduct(name, price) {
        console.log("The addProduct price: " + price);

        function add() {
            console.log("Add method ran now.");
            // For loop handles increasing the quantity of a same named product
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
        console.log("The total cost is now: " + totalCost);
        console.log(data);
        $('#cartcontent').datagrid('loadData', data);
        // Here is needed to maybe change the reference from #total to .total in the shopping cart
        $('#total').html('Total: $' + totalCost);
    }
}