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
                console.log(ui);
                console.log(event);

                //   deleteImage(ui.draggable);
            },
            out: function(event, ui) {
                console.log("Now out");

                console.log(event);
                console.log(ui);
            }
        });
    });
}
// Let the gallery be droppable as well, accepting items from the trash
/*    $contents.droppable({
        accept: "#trash li",
        classes: {
            "ui-droppable-active": "custom-state-active"
        },
        drop: function(event, ui) {
            recycleImage(ui.draggable);
        }
    });*/

/*
            // Image deletion function
            var recycle_icon = "<a href='link/to/recycle/script/when/we/have/js/off' title='Recycle this image' class='ui-icon ui-icon-refresh'>Recycle image</a>";

            function deleteImage($item) {
                $item.fadeOut(function() {
                    var $list = $("ul", $shoppingCart).length ?
                        $("ul", $shoppingCart) :
                        $("<ul class='gallery ui-helper-reset'/>").appendTo($shoppingCart);

                    $item.find("a.ui-icon-trash").remove();
                    $item.append(recycle_icon).appendTo($list).fadeIn(function() {
                        $item
                            .animate({
                                width: "48px"
                            })
                            .find("img")
                            .animate({
                                height: "36px"
                            });
                    });
                });
            }
*/
/*
            // Image recycle function
         // Image preview function, demonstrating the ui.dialog used as a modal window
            function viewLargerImage($link) {
                var src = $link.attr("href"),
                    title = $link.siblings("img").attr("alt"),
                    $modal = $("img[src$='" + src + "']");

                if ($modal.length) {
                    $modal.dialog("open");
                } else {
                    var img = $("<img alt='" + title + "' width='384' height='288' style='display: none; padding: 8px;' />")
                        .attr("src", src).appendTo("body");
                    setTimeout(function() {
                        img.dialog({
                            title: title,
                            width: 400,
                            modal: true
                        });
                    }, 1);
                }
            }
*/
/*
            // Resolve the icons behavior with event delegation
            $("ul.gallery > li").on("click", function(event) {
                var $item = $(this),
                    $target = $(event.target);

                if ($target.is("a.ui-icon-trash")) {
                    deleteImage($item);
                } else if ($target.is("a.ui-icon-zoomin")) {
                    viewLargerImage($target);
                } else if ($target.is("a.ui-icon-refresh")) {
                    recycleImage($item);
                }

                return false;
            });
        });
    
*/

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

            changeId(sidebar);
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
/*
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
}*/