// TODO Edit the code so that it functions properly
function APIConnect() {
    var baseURL = 'http://pub.jamaica-inn.net/fpdb/api.php?',
        username = '',
        password = '';
    /*    testObject = {
            username: "Fred",
            password: "passwd",
            action: "be_a_badass!"
        };
        */

    function constructURL(params) {
        var constructedURL = baseURL +"username"+ "=" + username +"&" + "password"+"="+password+"&";
    //    var userArray = [];
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                constructedURL += key + "=" + params[key] +"&";
            //    console.log(constructedURL);
            //    userArray.push(key);
            //    userArray.push(params[key]);
            //    console.log(key + " -> " + params[key]);
            //    console.log(userArray);
            }
        }
    //    userArray = userArray.slice(4);
    //    console.log(userArray);
        constructedURL = constructedURL.slice(0, -1);
        // console.log(constructedURL);
        return constructedURL;
    }


    function request(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                console.log(xhr.responseText);
        //        var info = JSON.parse(xhr.responseText);
                callback(xhr.responseText);
            }
        };
        xhr.send();
    }

// Using Jquery to access the server to get the JSON
// This is an alternative to the request function
    function requestWithJquery(url, callback) {
        $.getJSON(url, callback);
    }


    this.setUser = function(un, pw) {
        username = un;
        password = pw;
/*
        console.log(constructURL({
            action: 'user_get_all',
            action12: 'be_a_superman'
        }));
        */
    };

    this.fetchUsers = function(callback) {
        var url = constructURL({
            action: 'user_get_all'
        });
        request(url, callback);
    };

    this.fetchIOU = function(callback) {
        var url = constructURL({
            action: 'iou_get'
        });
        request(url, callback);
    };
}
