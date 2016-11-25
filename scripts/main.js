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

    console.log("Test");

    //Test fetchIOU
    api.setUser('jorass', 'jorass');
    api.fetchIOU(function (usr) {
        var info = JSON.parse(usr),
            name = info.payload[0].first_name + " " + info.payload[0].last_name,
            credit = info.payload[0].assets;
        console.log(name);
        console.log(credit);
    });
    api.setUser('edraug', 'edraug');
    api.fetchIOU(function (usr) {
        var info = JSON.parse(usr),
            name = info.payload[0].first_name + " " + info.payload[0].last_name,
            credit = info.payload[0].assets;
        console.log(name);
        console.log(credit);
    });

    //Test user_get_all
    api.setUser('jorass', 'jorass');
    api.fetchUsers(function (usr) {
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
