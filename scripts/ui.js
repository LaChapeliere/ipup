/**
 * Function to execute drag 'n drop functionality of the beverages in consumer view
 */
function dragNDrop() {
    'use strict';
    var sidebar = document.getElementById("sidebar");

    /**
     * Function to change the id of the sidebar
     * @use To highlight the sidebar when dragging an object
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
                var priceString = $(ui.draggable).find('p:eq(1)').html();
                var price = priceString.split(" ")[0];
                addProduct(name, parseFloat(price));
            },
            out: function(event, ui) {
                // Not sure if this is needed in the project work.
            }
        });
    });
}