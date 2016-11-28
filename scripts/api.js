/**
 * @author      Emma Barme
 * @version     0.2
 */

/**
 * Constructor for the APIConnect object
 */

function APIConnect() {
    'use strict';
    var baseURL = 'http://pub.jamaica-inn.net/fpdb/api.php', //The base url to connect to the database
        username = '', //The field to hold the username
        password = ''; // The field to hold the password

    /**
    * Append the parameters for a request to the baseURL in order to create the url for the request
    * @param params The dictionnary of the parameters
    * @return The string of the request url
    */
    function constructURL(params) {
        var param,
            url = baseURL;
        url += "?";
        for (param in params) {
            if (params.hasOwnProperty(param)) {
                url += param;
                url += "=";
                url += params[param];
                url += "&";
            }
        }
        return url.substr(0, url.length - 1);
    }

    /**
    * Send the request with a GET and call a function on the response
    * @param url The url of the request
    * @param callback The callback function to call on the response
    */
    function request(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                callback(this.responseText);
            }
        };
        xhr.send();
    }


// Using Jquery to access the server to get the JSON
// This is an alternative to the request function
    function requestWithJquery(url, callback) {
        $.getJSON(url, callback);
    }

    /**
    * Method to set the username and password
    * @param un The new username
    * @param pw The new password
    */
    this.setUser = function(un, pw) {
        username = un;
        password = pw;
    };
    
    
    /**
    * Method to fetch the inventory from the database -admin-
    * @param callback The callback function to call on the response
    */
    this.fetchInventory = function (callback) {
        var url = constructURL({action: 'inventory_get', username: username, password: password});
        request(url, callback);
    };
    
    /**
    * Method to fetch the history of purchases for the current user from the database
    * @param callback The callback function to call on the response
    */
    this.fetchPurchases = function (callback) {
        var url = constructURL({action: 'purchases_get', username: username, password: password});
        request(url, callback);
    };
    
    /**
    * Method to fetch the history of purchases for all users from the database -admin-
    * @param callback The callback function to call on the response
    */
    this.fetchPurchasesAll = function (callback) {
        var url = constructURL({action: 'purchases_get_all', username: username, password: password});
        request(url, callback);
    };
    
    /**
    * Method to append a purchase for the current user in the database
    * @param beerId The id of the purchased beer
    * @param callback The callback function to call on the response
    */
    this.appendPurchases = function (beerId, callback) {
        var url = constructURL({action: 'purchases_append', username: username, password: password, beer_id: beerId});
        request(url, callback);
    };
    
    /**
    * Method to fetch the history of payments for the current user from the database
    * @param callback The callback function to call on the response
    */
    this.fetchPayments = function (callback) {
        var url = constructURL({action: 'payments_get', username: username, password: password});
        request(url, callback);
    };
    
    /**
    * Method to fetch the history of payments for all users from the database -admin-
    * @param callback The callback function to call on the response
    */
    this.fetchPaymentsAll = function (callback) {
        var url = constructURL({action: 'payments_get_all', username: username, password: password});
        request(url, callback);
    };
    
    /**
    * Method to append a payment for a user in the database -admin-
    * The api doc says the role for this is user but in reality it is admin
    * @param amount The amount of the payment
    * @param user_id The user id to add the payment to
    * @param callback The callback function to call on the response
    */
    this.appendPayments = function (amount, userId, callback) {
        var url = constructURL({action: 'payments_append', username: username, password: password, amount: amount, user_id: userId});
        request(url, callback);
    };
    
    /**
    * Method to fetch the basic information for the current user from the database
    * @param callback The callback function to call on the response
    */
    this.fetchIOU = function (callback) {
        var url = constructURL({action: 'iou_get', username: username, password: password});
        request(url, callback);
    };
    
    /**
    * Method to fetch the basic information for all users from the database -admin-
    * @param callback The callback function to call on the response
    */
    this.fetchIOUall = function (callback) {
        var url = constructURL({action: 'iou_get_all', username: username, password: password});
        request(url, callback);
    };
        
    /**
    * Method to fetch the data on a specified beer from the database
    * @param beerId The id of the specified beer
    * @param callback The callback function to call on the response
    */
    this.fetchBeerData = function (beerId, callback) {
        var url = constructURL({action: 'beer_data_get', username: username, password: password, beer_id: beerId});
        request(url, callback);
    };
    
    /**
    * Method to create a new user or edit the user info for a user in the database -admin-
    * @param targetUsername The new username to create a new user or the username of the user to modify
    * @param newPassword The new password of the user
    * @param firstName The new user first name
    * @param lastName The new user last name in the database
    * @param email The new user's email
    * @param phone The new user's phone
    * @param callback The callback function to call on the response
    */
    this.editUser = function (targetUsername, newPassword, firstName, lastName, email, phone, callback) {
        var url = constructURL({action: 'user_edit', username: username, password: password, new_username: targetUsername, new_password: newPassword, first_name: firstName, last_name: lastName, email: email, phone: phone});
        request(url, callback);
    };

    /**
    * Method to fetch the users from the database and all their information from the database -admin-
    * @param callback The callback function to call on the response
    */
    this.fetchUsers = function (callback) {
        var url = constructURL({action: 'user_get_all', username: username, password: password});
        request(url, callback);
    };
    
    /**
    * Method to update the amount of bottles and the price for a specified beer in the database
    * @param beerId The id of the specified beer
    * @param amount The new amount of bottle in inventory
    * @param price The new price of the beer
    * @param callback The callback function to call on the response
    */
    this.updateInventory = function (beerId, amount, price, callback) {
        var url = constructURL({action: 'inventory_append', username: username, password: password, beer_id: beerId, amount: amount, price: price});
        request(url, callback);
    };
}


/**
 * A test function executed when the index page is loaded, printing info in the console to test if the API is correctly wired
 */
function testAPIConnection() {
    'use strict';
    var api = new APIConnect();

    console.log("Test api connection");
    
    //Test inventory_get
    api.setUser('jorass', 'jorass');
    api.fetchInventory(function (usr) {
        console.log("Test inventory");
        console.log(usr);
    });
    
    //Test purchases_get
    api.setUser('jorass', 'jorass');
    api.fetchPurchases( function (usr) {
        console.log("Test purchases_get admin");
        console.log(usr);
    });
    api.setUser('edraug', 'edraug');
    api.fetchPurchases( function (usr) {
        console.log("Test purchases_get user");
        console.log(usr);
    });
    
    //Test purchases_get_all
    api.setUser('jorass', 'jorass');
    api.fetchPurchasesAll( function (usr) {
        console.log("Test purchases_get_all");
        console.log(usr);
    });
    
    //Test purchases_append
    api.setUser('jorass', 'jorass');
    api.appendPurchases( "207504", function (usr) {
        console.log("Test purchases_append admin");
        console.log(usr);
    });
    api.setUser('edraug', 'edraug');
    api.appendPurchases( "207504", function (usr) {
        console.log("Test purchases_append user");
        console.log(usr);
    });
    
    //Test payments_get
    api.setUser('jorass', 'jorass');
    api.fetchPayments( function (usr) {
        console.log("Test payments_get admin");
        console.log(usr);
    });
    api.setUser('edraug', 'edraug');
    api.fetchPayments( function (usr) {
        console.log("Test payments_get user");
        console.log(usr);
    });
    
    //Test payments_get_all
    api.setUser('jorass', 'jorass');
    api.fetchPaymentsAll( function (usr) {
        console.log("Test payments_get_all");
        console.log(usr);
    });
    
    //Test payments_append
    api.setUser('jorass', 'jorass');
    api.appendPayments( "59", "18", function (usr) {
        console.log("Test payments_append admin");
        console.log(usr);
    });

    //Test iou_get
    api.setUser('jorass', 'jorass');
    api.fetchIOU(function (usr) {
        var info = JSON.parse(usr),
            name = info.payload[0].first_name + " " + info.payload[0].last_name,
            credit = info.payload[0].assets;
        console.log("Test iou_get admin");
        console.log(name);
        console.log(credit);
    });
    api.setUser('edraug', 'edraug');
    api.fetchIOU(function (usr) {
        var info = JSON.parse(usr),
            name = info.payload[0].first_name + " " + info.payload[0].last_name,
            credit = info.payload[0].assets;
        console.log("Test iou_get user");
        console.log(name);
        console.log(credit);
    });
    
    //Test iou_get_all
    api.setUser('jorass', 'jorass');
    api.fetchIOUall(function (usr) {
        console.log("Test iou_get_all");
        console.log(usr);
    });
    
    //Test beer_data_get
    api.setUser('jorass', 'jorass');
    api.fetchBeerData("207504", function (usr) {
        console.log("Test beer_data_get admin");
        console.log(usr);
    });
    api.setUser('edraug', 'edraug');
    api.fetchBeerData("207504", function (usr) {
        console.log("Test beer_data_get user");
        console.log(usr);
    });
    
    //Test user_edit
    api.setUser('jorass', 'jorass');
    api.editUser('tester', 'retset', 'Tes', 'Ter', 'testmail@web.com', '0123456789', function(usr) {
        console.log("Test user_edit");
        console.log(usr);
    });

    //Test user_get_all
    api.setUser('jorass', 'jorass');
    api.fetchUsers(function (usr) {
        console.log("Test user_get_all");
        console.log(usr);
    });
    
    //Test inventory_append -the result cannot really be tested because inventory_get is static
    api.setUser('jorass', 'jorass');
    api.updateInventory("22590", "20", "6.0", function (usr) {
        console.log("Test inventory_append");
        console.log(usr);
    });
}