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
        loginError("Please specify a username.");
        return false;
    }
    if (password == "") {
        loginError("Please specify a password.");
        return false;
    }

    //Checking the combination in the database
    api = new APIConnect();
    api.setUser(username, password);
    api.fetchIOU(function (answer) {
        var info = JSON.parse(answer),
            type = info.type,
            payload = info.payload[0];

        //If the username/password combination does not exist
        if (type === "error") {
            loginError(payload.msg);
            return;
        }

        //If mobile -should also check credentials- change form destination
        console.log($("body").css("font-size"));
        if ($("body").css("font-size") == "15px") {
            document.forms["loginForm"].action = "../mobile/mobileAdmin.php";
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
    user.fetchIOU(function (answer) {
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
        document.getElementById("welcome").textContent = firstName + "!";
        if (document.getElementById("debt") != null) {
            document.getElementById("debt").textContent = balance + " kr";
        }
    });

    //Determine if the user is an admin by sending an admin-only query to the database
    //@NOTE: This is an ugly method, but the credentials can only be checked by an admin...
    user.fetchUsers(function (answer) {
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
 * Alternative constructor for the user Object
 * Used for the mobile version
 * @param username The user's username
 * @param password The user's password
 */
function initUserMobile(username, password) {
    'use strict';
    var username = username, //The user's username
        password = password, //The user's password
        firstName, //The user's first name
        lastName; //The user's last name

    //Set up the API connection and fetch basic info on the user
    user.setUser(username, password);
    user.fetchIOU(function (answer) {
        var info = JSON.parse(answer),
            type = info.type,
            payload = info.payload[0];

        if (type === "error") {
            alert(payload.msg);
            return;
        }

        firstName = payload["first_name"];
        lastName = payload["last_name"];
    });

    //Determine if the user is an admin by sending an admin-only query to the database
    //@NOTE: This is an ugly method, but the credentials can only be checked by an admin...
    user.fetchUsers(function (answer) {
        var info = JSON.parse(answer),
            type = info.type;
        if (type === "error") {
            //If the user is not an admin, go back to login
            window.location.assign('../html/login_yeah.php');
        }
    });
}


/**
 * Display an error dialog when bad credentials for login
 * @param msg The login error
 */
function loginError(msg) {
    $(".overlay").css({
        "visibility": "visible",
        "opacity": 1
    });
    $("#errorMessage").text(msg);
}

/**
 * Close the error pop-up
 * NOTE It would be good to check that the user has entered a message and contact info if the "Message admin" button was clicked
 */
function closeLoginError() {
    $(".overlay").css({
        "opacity": 0,
        "visibility": 'hidden'
    });
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
    user.fetchIOU(function (answer) {
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
    user.fetchUsers(function (answer) {
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
                "<td class='user_username'>" + users[i].username + "</td>" +
                "<td class='user_name'>" + users[i].first_name + " " + users[i].last_name + "</td>" +
                "<td class='user_debt'>" + (Math.floor(Math.random() * 2000) - 800) + "</td>" + //For now displaying a random balance since iou_get_all doesn't not update
                "<td class='user_admin_owers'>" + (users[i].credentials == 0 ? "Yes" : "No") + "</td>" +
                "</a></div></tr>";
        }

        //Feed the html to the table
        $('#adminUserTableBody tr').first().after(html);
        //Remove first -fake- row
        $('#adminUserTableBody tr:first').remove();


        //Make the rows clickable
        $('#adminUserTableBody tr').each(function (row) {
            var username = $(this).find('.user_username')[0].innerHTML, //The username of the clicked row
                name = $(this).find('.user_name')[0].innerHTML, //The name of the clicked row
                debt = $(this).find('.user_debt')[0].innerHTML, //The debt of the clicked row
                admin = $(this).find('.user_admin_owers')[0].innerHTML; //The admin power of the clicked row
            $(this).on("click", function () {
                openEditUserPopup(name, debt, username, admin)
            });

        })
    });
}

/*
 * Open pop-up to edit user
 * @param name The name of the user
 * @param debt The debt of the debt
 * @param username The username of the user, false if create new user
 * @param admin "Yes" if admin, "No" if not
 */
function openEditUserPopup(name, debt, username, admin) {
    //Display pop-up
    $(".overlay").css({
        "visibility": "visible",
        "opacity": 1
    });

    displayInfoUserEdit(name, debt, username, admin);
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
    $("#popup_toggle").checked = (admin === "Yes");

    //Fetch user info - Fake
    $("#userEmail").attr("placeholder", name + "@it.uu.se");
    $("#userPhone").attr("placeholder", "00 46 771 793 336");

    //Lock username field if existing user
    if (username.length > 0) {
        $("#username").prop("readonly", true);
    } else {
        $("#username").prop("readonly", false);
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

/**
 * Add a user to the database
 * @param api The api connection to the database. The connected user must be an admin.
 * @param newUsername The username of the new user or the username of the target user
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
    api.editUser(newUsername, newPassword, firstName, lastName, email, phone, function () {});
    populateUsers();
}