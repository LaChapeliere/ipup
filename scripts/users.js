/**
 * @author      Emma Barme
 * @version     0.1
 */

var user = new APIConnect(); //Holds the User object for the connected user

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
    api.fetchIOU(function(answer) {
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
    'use strict';
    var username = username, //The user's username
        password = password, //The user's password
        firstName, //The user's first name
        lastName, //The user's last name
        balance; //The amount of money availaible to the user

    //Set up the API connection and fetch basic info on the user
    user.setUser(username, password);
    user.fetchIOU(function(answer) {
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
        if (document.getElementById("debt") != null) {
            document.getElementById("debt").textContent = "Balance: " + balance + " kr";
        }
    });

    //Determine if the user is an admin by sending an admin-only query to the database
    //@NOTE: This is an ugly method, but the credentials can only be checked by an admin...
    user.fetchUsers(function(answer) {
        var info = JSON.parse(answer),
            type = info.type;
        if (!(type === "error")) {
            //If the request is accepted, the user is an admin
            //Display toggle button for admin view
            document.getElementById("toggle_div").style.display = "initial";
            switchView();
        }
        //If the user is not an admin, do nothing
    });
    
    //Display profile pic
    //@NOTE: For now always placeholder
    //$(#profile_pic).attr("src",profilePic);
}

/**
 * Send the credentials via POST to a new page
 * @param The url of the new page
 */
function linkFormSubmit(url) {
    var myform = '<form id="temporary_form" action="' + url + '" method="POST">', //A temporary form to POST
        credentials = user.getUser(); //The credentials to send
    
    myform += '<input name=username value="' + credentials[0] + '"/>';
    myform += '<input name=password value="' + credentials[1] + '"/>';
    myform += '</form>';
    $(myform).appendTo('body').submit();
    $('#temporary_form').remove();
}

/*
 * Update the display of the balance to the current balance
 */
function updateBalanceDisplay() {
    'use strict';
    user.fetchIOU(function(answer) {
        var info = JSON.parse(answer), //Result from fetchIOU
            type = info.type, //Type of the answer
            payload = info.payload[0], //Payload of the answer
            balance; //New balance of the user
        
        if (type === "error") {
            alert(payload.msg);
            return;
        }

        balance = payload["assets"];

        document.getElementById("debt").textContent = "Balance: " + balance + " kr";
    });
}

/**
 * Populate the users table with data from the api
 */
function populateUsers() {
    //Removing all rows but the header and the first data row -to be able to add new rows to the tbody
    $('#adminUserTableBody tr').not(':first').remove();
    var html = '', //The html string to build the table rows
        users; //The data
    
    //Fetch the data from the API
    user.fetchUsers(function(answer) {
        var info = JSON.parse(answer),
            type = info.type;
        
        if (type === "error") {
            alert(info.payload[0].msg);
            return;
        }
        
        //If the inventory was correctly retrieved
        users = info.payload;
        //For each drink
        for (var i = 0; i < users.length; i++) {
            //If no name ignore the user
            if (users[i].username.length === 0) {
                continue;
            }
            //Build the html
            html += "<tr class ='users_admin'><div class='box'>" +
                    "<td class='user_name'>" + users[i].first_name + " " + users[i].last_name + "</td>" +
                    "<td class='user_debt'>" + (Math.floor(Math.random() * 2000) - 800) + "</td>" + //For now displaying a random balance since iou_get_all doesn't not update
                    "<td class='user_ID'>" + users[i].user_id + "</td>" +
                    "<td class='user_admin_owers'>" + (users[i].credentials == 0 ? "Yes" : "No")  + "</td>" +
                    "<td class='username' hidden>" + users[i].username + "</td>" +
                    "</a></div></tr>";
        }

        //Feed the html to the table
        $('#adminUserTableBody tr').first().after(html);
        //Remove first -fake- row
        $('#adminUserTableBody tr:first').remove();
        
        
        //Make the rows clickable
        /*
        $('#adminTableBody tr').each( function(row) {
            var name = $(this).find('.name_entry')[0].innerHTML, //The name of the clicked row
                price = $(this).find('.price_entry')[0].innerHTML, //The price of the clicked row
                count = $(this).find('.stock_entry')[0].innerHTML, //The amount of the clicked row
                beer_id = $(this).find('.id_entry')[0].innerHTML; //The beer_id of the clicked row
            $(this).on("click", function() {openEditPopup(name, price, count, beer_id)});
            
        })*/
    });
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
    'use strict';
    apiAnswer = api.editUser(newUsername, newPassword, firstName, lastName, email, phone, function(answer) {
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
    'use strict';
    apiAnswer = api.editUser(targetUsername, newPassword, firstName, lastName, email, phone, function(answer) {
        return answer;
    })

    if (apiAnswer.type == "error") {
        return apiAnswer.payload[0].msg;
    }
    return "";
}