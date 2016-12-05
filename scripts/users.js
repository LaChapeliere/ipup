
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

    api = new APIConnect();
    api.setUser(username, password);
    api.fetchIOU( function(answer) {
        var info = JSON.parse(answer),
            type = info.type,
            payload = info.payload[0];
        
        //If the username/password combination does not exist
        if (type === "error") {
            alert(payload[0].msg);
            return;
        }
        
        //If the username/password combination is correct
        loadConsumerPage(api, username, password, payload);
    });
}

function loadConsumerPage(api, usn, pwd, info) {
    //Load the main consumer page
    window.location.assign("../html/index.html");
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