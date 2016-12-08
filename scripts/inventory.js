/**
 * Populate the inventory table with data from the api
 */
function populateInventory() {
    $('#stockTable tr').not(':first').remove();
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
        $('#stockTable tr').first().after(html);
    });
}