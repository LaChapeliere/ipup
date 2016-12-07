var user; //Holds the User object for the connected user

/*
 * Validate the username-password combination entered by the user to login
 */
function validateLogin() {
    'use strict';
    
    //Basic validation of input
    var username = document.forms["loginForm"]["username"].value,
        password = document.forms["loginForm"]["password"].value,
        api;
    if (username == "") {
        alert("Please specify a username.");
        return false;
    }
    if (password == "") {
        alert("Please specify a password.");
        return false;
    }

    //Checking the combination in the database
    api = new APIConnect();
    api.setUser(username, password);
    api.fetchIOU( function(answer) {
        var info = JSON.parse(answer),
            type = info.type,
            payload = info.payload[0];
        
        //If the username/password combination does not exist
        if (type === "error") {
            alert(payload.msg);
            return;
        }
        
        //Submit the login credential form if no error
        document.forms["loginForm"].submit();
    });
}

/**
 * Constructor for the user Object
 * @param username The user's username
 * @param password The user's password
 */
function initUser(username, password) {
    var username = username, //The user's username
        password = password, //The user's password
        firstName, //The user's first name
        lastName, //The user's last name
        balance, //The amount of money availaible to the user
        api; //An API connection to the database, set to this user
    
    //Set up the API connection and fetch basic info on the user
    api = new APIConnect();
    api.setUser(username, password);
    api.fetchIOU( function(answer) {
        var info = JSON.parse(answer),
            type = info.type,
            payload = info.payload[0];
        
        if (type === "error") {
            alert(payload.msg);
            return;
        }
        
        firstName = payload["first_name"];
        lastName = payload["last_name"];
        balance = payload["assets"];
        
        //Display the balance and the first name
        document.getElementById("welcome").textContent = "Welcome " + firstName + "!";
        updateBalanceDisplay(balance);
    });
    
    //Determine if the user is an admin by sending an admin-only query to the database
    //@NOTE: This is an ugly method, but the credentials can only be checked by an admin...
    api.fetchUsers( function(answer) {
        var info = JSON.parse(answer),
            type = info.type;
        console.log(info);
        if (!(type === "error")) {
            //If the request is accepted, the user is an admin
            //Display toggle button for admin view
            document.getElementById("toggle_div").style.display = "initial";
        }
        //If the user is not an admin, do nothing
    })
}

/*
 * Update the display of the balance to the current balance
 * @param balance
 */
function updateBalanceDisplay(balance) {
    document.getElementById("debt").textContent = "Balance: " + balance + " kr";
}

/**
 * Add a user to the database
 * @param api The api connection to the database. The connected user must be an admin.
 * @param newUsername The username of the new user
 * @param newPassword The password of the new user
 * @param firstName The new user first name
 * @param lastName The new user last name in the database
 * @param email The new user's email
 * @param phone The new user's phone
 * @TODO Add safeguard if the connected user is not an admin.
 * @return An error string, empty if the function completed without error
 */
function addUser(api, newUsername, newPassword, firstName, lastName, email, phone) {
    apiAnswer = api.editUser(newUsername, newPassword, firstName, lastName, email, phone, function (answer) {
        return answer;
    })
    
    if (apiAnswer.type == "error") {
        return apiAnswer.payload[0].msg;
    }
    return "";
}

/**
 * Edit a user info in the database
 * @param api The api connection to the database. The connected user must be an admin.
 * @param targetUsername The username of the user to modify
 * @param newPassword The new password of the user
 * @param firstName The new user first name
 * @param lastName The new user last name in the database
 * @param email The new user's email
 * @param phone The new user's phone
 * @TODO Add safeguard if the connected user is not an admin.
 * @TODO Add safeguard is user to be modified do no exist
 * @return An error string, empty if the function completed without error
 */
function addUser(api, targetUsername, newPassword, firstName, lastName, email, phone) {
    apiAnswer = api.editUser(targetUsername, newPassword, firstName, lastName, email, phone, function (answer) {
        return answer;
    })
    
    if (apiAnswer.type == "error") {
        return apiAnswer.payload[0].msg;
    }
    return "";
}