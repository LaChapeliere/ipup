
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
