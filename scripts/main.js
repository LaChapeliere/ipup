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
     * This method handles the drag 'n drop functionality
     */
    $(function() {
        // Attempts to highlight when the draggable is over the droppable.
        /*
        function changeId() {
            if (sidebar.id == "sidebar") {
                sidebar.setAttribute('id', 'sidebarHighlighted');
            } else {
                sidebar.className = "sidebar";
            }
        }

*/
        $('#cartcontent').datagrid({
            singleSelect: true
        });
        $('.product').draggable({
            revert: true,
            //     proxy: 'clone',
            onStartDrag: function() {
                console.log("Started dragging");
                $(this).draggable('options').cursor = 'pointer';
                //     $(this).draggable('proxy').css('z-index', 10);
            },
            onStopDrag: function() {
                console.log("Stopped dragging");
                console.log($(this));
                $(this).draggable('options').cursor = 'pointer';
            }
        });
        $('#sidebar').droppable({
            onDragEnter: function(e, source) {
                $(source).draggable('options').cursor = 'auto';
                //   sidebar.changeId();
                console.log($(this));

            },
            onDragLeave: function(e, source) {
                console.log("Started onDragLeave");
                //     sidebar.changeId();
                $(source).draggable('options').cursor = 'not-allowed';
            },
            onDrop: function(e, source) {
                console.log("Started onDrop");
                //       sidebar.changeId();
                var name = $(source).find('p:eq(0)').html();
                console.log(source);
                console.log(name);
                var price = $(source).find('p:eq(1)').html();
                console.log(price);
                addProduct(name, parseFloat(price));
            }
        });
    });
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
        $('#total').html('Total: $' + totalCost);
    }
}