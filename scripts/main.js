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

function dragging() {
    var data = { "total": 0, "rows": [] };
    var totalCost = 0;

    $(function() {
        $('#cartcontent').datagrid({
            singleSelect: true
        });
        $('.slotElement').draggable({
            revert: true,
            proxy: 'clone',
            onStartDrag: function() {
                $(this).draggable('options').cursor = 'pointer';
                $(this).draggable('proxy').css('z-index', 10);
            },
            onStopDrag: function() {
                $(this).draggable('options').cursor = 'pointer';
            }
        });
        $('#sidebar').droppable({
            onDragEnter: function(e, source) {
                $(source).draggable('options').cursor = 'auto';
            },
            onDragLeave: function(e, source) {
                $(source).draggable('options').cursor = 'not-allowed';
            },
            onDrop: function(e, source) {
                var name = $(source).find('p:eq(0)').html();
                var price = $(source).find('p:eq(1)').html();
                addProduct(name, parseFloat(price.split('$')[1]));
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
        $('#cartcontent').datagrid('loadData', data);
        $('div.cart .total').html('Total: $' + totalCost);
    }
}