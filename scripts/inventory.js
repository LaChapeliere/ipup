/**
 * Populate the inventory table with data from the api
 */
function populateInventory() {
    //Removing all rows but the header and the first data row -to be able to add new rows to the tbody
    $('#adminTableBody tr').not(':first').remove();
    var html = '', //The html string to build the table rows
        inventory; //The data

    //Fetch the data from the API
    user.fetchInventory(function (answer) {
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
            html += "<tr class ='stock_admin'><div class='box'>" +
                "<td class='name_entry'>" + inventory[i].namn + "</td>" +
                "<td class='price_entry'>" + inventory[i].price + "</td>" +
                "<td class='stock_entry'>" + inventory[i].count + "</td>" +
                "<td class='id_entry' hidden>" + inventory[i].beer_id + "</td>" +
                "</a></div></tr>";
        }

        //Feed the html to the table
        $('#adminTableBody tr').first().after(html);
        //Remove first -fake- row
        $('#adminTableBody tr:first').remove();

        //Make the rows clickable

        $('#adminTableBody tr').each(function (row) {
            var name = $(this).find('.name_entry')[0].innerHTML, //The name of the clicked row
                price = $(this).find('.price_entry')[0].innerHTML, //The price of the clicked row
                count = $(this).find('.stock_entry')[0].innerHTML, //The amount of the clicked row
                beer_id = $(this).find('.id_entry')[0].innerHTML; //The beer_id of the clicked row
            $(this).on("click", function () {
                openEditBevPopup(name, price, count, beer_id)
            });

        })
    });
}

/**
 * Populate the machine table in the mobile version with a fake content
 */
function populateMachineMobile() {
    //Removing all rows but the header and the first data row -to be able to add new rows to the tbody
    $('#adminMachineTableBody tr').not(':first').remove();
    var html = '', //The html string to build the table rows
        inventory; //The data

    //Fetch the data from the API
    user.fetchInventory(function (answer) {
        var info = JSON.parse(answer),
            type = info.type;

        if (type === "error") {
            alert(info.payload[0].msg);
            return;
        }

        //If the inventory was correctly retrieved
        inventory = info.payload;
        //For each drink
        for (var i = 4; i < 24; i++) {
            //If no name ignore the drink
            if (inventory[3 * i].namn.length === 0) {
                continue;
            }

            //Build the html
            html += "<tr class ='stock_admin'><div class='box'>" +
                "<td class='machine_name_entry'>" + inventory[3 * i].namn + "</td>" +
                "<td class='machine_price_entry'>" + inventory[3 * i].price + "</td>" +
                "<td class='machine_stock_entry'>" + inventory[3 * i].count + "</td>" +
                "<td class='machine_id_entry' hidden>" + inventory[3 * i].beer_id + "</td>" +
                "</a></div></tr>";
        }

        //Feed the html to the table
        $('#adminMachineTableBody tr').first().after(html);
        //Remove first -fake- row
        $('#adminMachineTableBody tr:first').remove();

        //Make the rows clickable

        $('#adminMachineTableBody tr').each(function (row) {
            var name = $(this).find('.machine_name_entry')[0].innerHTML, //The name of the clicked row
                price = $(this).find('.machine_price_entry')[0].innerHTML, //The price of the clicked row
                count = $(this).find('.machine_stock_entry')[0].innerHTML, //The amount of the clicked row
                beer_id = $(this).find('.machine_id_entry')[0].innerHTML; //The beer_id of the clicked row
            $(this).on("click", function () {
                openEditContentPopup(name, price, count, beer_id)
            });

        })
    });
}

/*
 * Open pop-up to edit drink
 * @param name The name of the drink
 * @param price The price of the drink
 * @param count The amount fo drinks
 * @param beer_id The id of the drink
 */
function openEditBevPopup(name, price, count, beer_id) {
    //Display pop-up
    $(".overlay").css({
        "visibility": "visible",
        "opacity": 1
    });

    //If new drink create a new random beer_id
    if (beer_id === -1) {
        beer_id = Math.floor((Math.random() * 1000) + 10000);
    } else {
        displayInfoBevEdit(name, price, count, beer_id);
    }
}

/*
 * Display info on the selected drink in the pop-up
 * @param name The name of the drink
 * @param price The price of the drink
 * @param count The amount fo drinks
 * @param beer_id The id of the drink
 */
function displayInfoBevEdit(name, price, count, beer_id) {
    //Display current info
    $("#bevName").attr("placeholder", name);
    $("#bevQuantity").attr("placeholder", count);
    $("#bevPrice").attr("placeholder", price + " kr");
    $("#bevId").attr("placeholder", beer_id);

    //Fetch category info
    user.fetchBeerData(beer_id, function (answer) {
        var info = JSON.parse(answer),
            type = info.type,
            categoriesName = {
                soft: "Soft Drink",
                lager: "Lager",
                stout: "Stout",
                ale: "Ale",
                beer: "Beer",
                white_wine: "White Wine",
                red_wine: "Red Wine",
                cider: "Cider"
            }, //Dictionnary of names of the categories
            category; //The category info for the drink

        if (type === "error") {
            alert("Something went wrong. Cannot find the category of the beverage.")
        }

        //If the beer data has been correctly retrieved
        category = beverageCategory(info.payload[0].varugrupp);
        $("#bevType").val(categoriesName[category[0]]);
        $("#toggle_div").checked = categoriesName[category[1]];
    })
}

/**
 * Close the edit popup without modifications
 */
function closeEditPopup() {
    //Hide pop-up
    $(".overlay").css({
        "opacity": 0,
        "visibility": 'hidden'
    });
    $('#editForm').each(function () {
        this.val("");
    });
}

/*
 * Send the modifications for the selected drink to the API
 */
function saveEditBev() {
    var price = document.getElementById("bevPrice").value, //The entered price
        count = document.getElementById("bevQuantity").value, //The entered quantity
        beer_id = document.getElementById("bevId").placeholder;

    if (price.length <= 0) {
        price = document.getElementById("bevPrice").placeholder;
    }
    if (count.length <= 0) {
        count = document.getElementById("bevQuantity").placeholder;
    }

    //Send info to API
    //Only sending the info currently required by the API, for example cannot change the name
    user.updateInventory(beer_id, count, price, function () {});

    closeEditPopup();
    //Reload the table
    populateInventory();
}