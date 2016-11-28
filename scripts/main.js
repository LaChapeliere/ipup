/**
 * @author      Emma Barme
 * @version     0.2
 */


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

/**
 * Utily function to execute js scripts linked to an html only when the page has finished loading
 * @param The funtion to be executed
 */
function docLoaded(fn) {
    'use strict';
	if (document.readyState !== 'loading'){
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}
