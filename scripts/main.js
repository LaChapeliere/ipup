// TODO Edit the code so that it functions properly (This is mainly just copied from the tutorial)
function APIConnect() {
    var baseURL = 'http://pub.jamaica-inn.net/fpdb/api.php',
        username = '',
        password = '';

    function constructURL(params) {
        var constructedURL = baseURL + "?";
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                console.log(key + " -> " + params[key]);
                constructedURL += key + "=" + params[key] + "&";
            }
        }
        constructedURL = constructedURL.slice(0, -1);
        console.log(constructedURL);
        return constructedURL;
    }


    function request(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                console.log(this.responseText);
            }
        };
        xhr.send();
    }

    this.setUser = function(un, pw) {
        username = un;
        password = pw;
    };

    this.fetchUsers = function(callback) {
        var url = constructURL({
            action: 'user_get_all'
        });
        request(url, callback);
    };

    this.fetchIOU = function(callback) {};
}

function docLoaded(fn) {
	if (document.readyState !== 'loading'){
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}

function indexPageLoaded() {
	var api = new APIConnect();
	var testObject = {username: "Fred", password: "passwd", action: "be_a_badass!"};
	api.constructURL(testObject);
}
