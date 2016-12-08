/**
 * Populate the inventory table with data from the api
 */
function populateInventory() {
    //Removing all rows but the header and the first data row -to be able to add new rows to the tbody
    $('#adminTableBody tr').not(':first').remove();
    var html = '', //The html string to build the teble rows
        inventory; //The data
    
    //Fetch the data from the API
    user.fetchInventory(function(answer) {
        var info = JSON.parse(answer),
            type = info.type;
        
        if (type === "error") {
            alert(info.payload[0].msg);
            return;
        }
        
        //If the inventory was correctly retrieved
        inventory = info.payload;
        //For each drink
        for (var i = 0; i < inventory.length; i++) {
            //If no name ignore the drink
            if (inventory[i].namn.length === 0) {
                continue;
            }
            
            //Build the html
            html += "<tr class ='stock_admin'><div class='box'><a class='button' href=#popupStockEdit>" + 
                    "<td class='name_entry'>" + inventory[i].namn + "</td>" +
                    "<td class='price_entry'>" + inventory[i].price + "</td>" +
                    "<td class='stock_entry'>" + inventory[i].count + "</td>" +
                    "</a></div></tr>";
        }

        //Feed the html to the table
        $('#adminTableBody tr').first().after(html);
        //Remove first -fake- row
        $('#adminTableBody tr:first').remove();
    });
}

/*
<!--
Copyright (c) 2016 by Captain Anonymous (http://codepen.io/anon/pen/rWKYqK)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
-->
*/
var tableFilter = (function(Arr) {

    var _input;

    function _onInputEvent(e) {
        _input = e.target;
        var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
        Arr.forEach.call(tables, function(table) {
            Arr.forEach.call(table.tBodies, function(tbody) {
                console.log(tbody);
                console.log(tbody.rows);
                Arr.forEach.call(tbody.rows, _filter);
            });
        });
    }

    function _filter(row) {
        console.log("Filter");
        var text = row.textContent.toLowerCase(),
            val = _input.value.toLowerCase();
        row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
    }

    return {
        init: function() {
            var inputs = document.getElementsByClassName('light-table-filter');
            Arr.forEach.call(inputs, function(input) {
                input.oninput = _onInputEvent;
            });
        }
    };
})(Array.prototype);

