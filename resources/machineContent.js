var machineContent = [{
        "beer_id": "1158103",
        "price": 18.90,
        "name": "BrewDog Trashy Blonde",
        "category": "lager",
        "amount": 10,
        "alcoholic": true
    },
    {
        "beer_id": "168803",
        "price": 22.90,
        "name": "East India Pale Ale",
        "category": "ale",
        "amount": 4,
        "alcoholic": true
    },
    {
        "beer_id": "181803",
        "price": 19.90,
        "name": "Äppelcider Halvtorr",
        "category": "cider",
        "amount": 8,
        "alcoholic": true
    },
    {
        "beer_id": "1125001",
        "price": 21.90,
        "name": "Paulaner Oktoberfest",
        "category": "beer",
        "amount": 2,
        "alcoholic": true
    },
    {
        "beer_id": "197702",
        "price": 11.90,
        "name": "Apple Green Tea",
        "category": "soft",
        "amount": 10,
        "alcoholic": false
    },
    {
        "beer_id": "167101",
        "price": 29.40,
        "name": "St Peter's Cream Stout",
        "category": "stout",
        "amount": 3,
        "alcoholic": true
    },
    {
        "beer_id": "223301",
        "price": 99,
        "name": "Château Pech-Latt",
        "category": "red_wine",
        "amount": 10,
        "alcoholic": true
    },
    {
        "beer_id": "669702",
        "price": 45,
        "name": "Chilcas Sauvignon Blanc",
        "category": "white_wine",
        "amount": 5,
        "alcoholic": true
    },
    {
        "beer_id": "1",
        "price": 23,
        "name": "Test1",
        "category": "beer",
        "amount": 10,
        "alcoholic": true
    },
    {
        "beer_id": "2",
        "price": 23,
        "name": "Test2",
        "category": "cider",
        "amount": 10,
        "alcoholic": true
    },
    {
        "beer_id": "3",
        "price": 23,
        "name": "Test3",
        "category": "lager",
        "amount": 10,
        "alcoholic": true
    },
    {
        "beer_id": "214401",
        "price": 23,
        "name": "Poliziano Vino Nobile di Montepulciano",
        "category": "red_wine",
        "amount": 10,
        "alcoholic": true
    },
    {
        "beer_id": "4",
        "price": 23,
        "name": "Test4",
        "category": "soft",
        "amount": 10,
        "alcoholic": false
    },
    {
        "beer_id": "5",
        "price": 23,
        "name": "Test5",
        "category": "soft",
        "amount": 10,
        "alcoholic": false
    },
    {
        "beer_id": "6",
        "price": 23,
        "name": "Test6",
        "category": "beer",
        "amount": 10,
        "alcoholic": true
    },
    {
        "beer_id": "207504",
        "price": 23,
        "name": "Test",
        "category": "white_wine",
        "amount": 10,
        "alcoholic": true
    },
    {
        "beer_id": "7",
        "price": "23",
        "name": "Test7",
        "category": "ale",
        "amount": 10,
        "alcoholic": true
    },
    {
        "beer_id": "8",
        "price": 23,
        "name": "Test8",
        "category": "stout",
        "amount": 10,
        "alcoholic": true
    },
    {
        "beer_id": "9",
        "price": 23,
        "name": "Test9",
        "category": "beer",
        "amount": 0,
        "alcoholic": true
    },
    {
        "beer_id": "10",
        "price": 23,
        "name": "Test10",
        "category": "ale",
        "amount": 10,
        "alcoholic": true
    }
];

/**
 * Modifies the quantity of a beverage in the machine
 * @NOTE This modification only lasts for the current connection
 * @param beerId The id of the beverage. If several slots are occupied by this beverage, picks the first one in the list
 * @param modifyer How many beverages to add/remove
 */
function updateMachineContentQuantities(beerId, modifyer) {
    var i = 0; //Loop index
    for (; i < machineContent.length; i++) {
        if (machineContent[i].beer_id === beerId) {
            machineContent[i].amount -= modifyer;
            if (beveragesSlots.length > 1) {
                beveragesSlots[i].updateSlotQuantity(machineContent[i].amount);
            }
            //Shortcut for fake history view
            else {
                beveragesSlots[0].updateSlotQuantity(machineContent[i].amount);
            }
            return;
        }
    }

    console.log("Error in updateMachineContentQuantities: no such drink");
}

/*
 * Open pop-up to edit machine content slot
 * @param beerId The id of the drink
 * @param name The name of the drink
 * @param price The price of the drink
 * @param amount The quantity of drink in the machine
 */
function openEditContentPopup(beerId, name, price, amount) {
    //Display pop-up
    $(".overlay").css({
        "visibility": "visible",
        "opacity": 1
    });

    displayInfoContentEdit(beerId, name, price, amount);
    /*
    $("#edited_drink").on("click", function() {
        openEditContentListPopup();
    });
    */
}

/*
 * Open list to edit beverage
 * @param beerId The id of the drink
 * @param name The name of the drink
 * @param price The price of the drink
 * @param amount The quantity of drink in the machine
 */
function openEditContentListPopup() {
    //Display pop-up
    $(".overlay_bis").css({
        "visibility": "visible",
        "opacity": 1
    });
}

/*
 * Display info on the selected user in the pop-up
 * @param beerId The id of the drink
 * @param name The name of the drink
 * @param price The price of the drink
 */
function displayInfoContentEdit(beerId, name, price, amount) {
    //Display current info
    $("#edited_drink .drinkName").text(name);
    $("#bevName").text(name); //Mobile version
    $("#edited_drink .price").text(price + " kr");
    $("#edited_drink .stock").text(amount);
    $("#edited_drink .drinkId").text(beerId);
    $("#quantity").val(amount);

    //Fetch category info
    user.fetchBeerData(beerId, function (answer) {
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
        $("#edited_drink .slotElement").css("background-image", 'url("./../resources/img/' + category[0] + '.png")');
        $("#edited_drink .slotElement").prop('title', category[0].replace("_", " ")); //Information pop-up + voice-over
    })
}

/**
 * Close the edit popup without modifications
 * See inventory.js - closeEditPopup
 */


/**
 * Close the list edit popup without modifications
 */
function closeEditPopup() {
    //Hide pop-up
    $(".overlay_bis").css({
        "opacity": 0,
        "visibility": 'hidden'
    });
}

/*
 * Send the modifications for the selected drink to the API
 */
function saveEditContent() {
    var beerId = $("#edited_drink .drinkId").text(); //The id to modify
    modifyer = $("#quantity").val(); //The entered modifyer to the quantity

    //Send info to machine content
    updateMachineContentQuantities(beerId, -modifyer);

    closeEditPopup();
    //Reload the table
    populateSlotsConsumer(false, false, true);
}