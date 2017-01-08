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
                /* console.log($(this).clone());*/
                return $(this).clone();
            },
            cursor: "grab",
            start: function(event, ui) {
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
                var name = $(ui.draggable).find('p:eq(0)').html();
                var priceString = $(ui.draggable).find('p:eq(1)').html();
                var price = priceString.split(" ")[0];
                var id = availableBevIds[name]; //Fetching the id corresponding to the name
                if (typeof id == "undefined") {
                    id = 0;
                }
                addProduct(id, name, parseFloat(price));
            },
            out: function(event, ui) {
                // Not sure if this is needed in the project work.
            }
        });
    });
}

/**
 * Wire the navigation of the mobile version
 */
function mobileNav() {
    $("#mobileStockNav").click(function() {
        $.get('mobile_stock.php', function(data) {
            $(".content").html(data);
        });
        $.get('mobile_stock_popup.php', function(data) {
            $(".popup-content").html(data);
        });
        populateInventory();
    });

    $("#mobileUsersNav").click(function() {
        $.get('mobile_users.php', function(data) {
            $(".content").html(data);
        });
        $.get('mobile_users_popup.php', function(data) {
            $(".popup-content").html(data);
        });
        populateUsers();
    });

    $("#mobileMachineNav").click(function() {
        $.get('mobile_machine.php', function(data) {
            $(".content").html(data);
        });
        $.get('mobile_machine_popup.php', function(data) {
            $(".popup-content").html(data);
        });
    });
}

function switchView() {
    'use strict';
    $('#toggle_div :checkbox').on('change', function(event) {
        if (this.checked) {
            linkFormSubmit('./admin_machine.php');
        } else {
            linkFormSubmit('./index.php');
        }
    });
}

/**
 * Wire the History/Stats button
 * Adds a href link when the shopping cart has items and removes it when not 
 */
$(function() {
    'use strict';
    $('#historyStatsButton').click(function() {
        if (shoppingcartIsEmpty()) {
            $("#historyStatsButton").removeAttr("href");
            document.location = './historystats.php';
        } else {
            $("#historyStatsButton").attr('href', '#customerContentPopup');
        }
    });
});

/*function changeLanguage() {
function changeLanguage() {
    'use strict';
    $('.translate').click(function() {
        var lang = $(this).attr('id');
        $('.lang').each(function(index, element) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
        return lang;
    });
}*/

/**
 * Changes the language of the interface.
 * @param lang is the language to be translated to. 
 */
function changeLanguage(lang) {
    'use strict';
    $('.lang').each(function(index, element) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
    });
}