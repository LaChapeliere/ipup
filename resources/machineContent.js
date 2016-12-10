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
 * @param debt The price of the drink
 * @param admin "Yes" if admin, "No" if not
 */
function openEditContentPopup(beerId, name, price) {
    //Display pop-up
    $(".overlay").css({"visibility": "visible", "opacity": 1});

    //displayInfoUserEdit(name, debt, username, admin);
}

/*
 * Display info on the selected user in the pop-up
 * @param name The name of the user
 * @param debt The debt of the debt
 * @param username The username of the user, false if create new user
 * @param admin "Yes" if admin, "No" if not
 */
function displayInfoUserEdit(name, debt, username, admin) {
    //Display current info
    $("#username").attr("placeholder", username);
    $("#name").attr("placeholder", name);
    $("#userBalance").attr("placeholder", debt + " kr");
    $("#toggle_div").checked = (admin === "Yes");

    //Fetch user info - Fake
    $("#userEmail").attr("placeholder", name + "@it.uu.se");
    $("#userPhone").attr("placeholder", "00 46 771 793 336");
    
    //Lock username field if existing user
    if (username !== "") {
        $("#username").prop("readonly", true);
    }
}

/**
 * Close the edit popup without modifications
 * See inventory.js - closeEditPopup
 */

/*
 * Send the modifications for the selected drink to the API
 */
function saveEditUser() {
    var debt = document.getElementById("userBalance").value, //The entered debt
        name = document.getElementById("name").value, //The entered name
        username = document.getElementById("username").value, //The entered username
        password = document.getElementById("userPassword").value, //The entered password
        email = document.getElementById("userEmail").value, //The entered email
        phone = document.getElementById("userPhone").value; //The entered phone number

    //If no modification
    if (username.length <= 0) {
        username = document.getElementById("username").placeholder;
    }
    if (password.length <= 0) {
        //If no password had been entered, keep the same one
        password = user.getUser[1];
    }
    if (debt.length <= 0) {
        debt = document.getElementById("userBalance").placeholder.split(" ")[0];
    }
    if (name.length <= 0) {
        name = document.getElementById("name").placeholder;
    }
    if (phone.length <= 0) {
        phone = document.getElementById("userPhone").placeholder;
    }
    if (email.length <= 0) {
        email = document.getElementById("userEmail").placeholder;
    }
    
    //Force name to be of form first name - last name
    if (name.split(" ").length < 2) {
        name = name + " " + name;
    }
    
    //Send info to API
    //Only sending the info currently required by the API, for example cannot change the name
    addUser(user, username, password, name.split(" ")[0], name.split(" ")[1], email, phone);
        
    closeEditPopup();
    //Reload the table
    populateUsers();
}