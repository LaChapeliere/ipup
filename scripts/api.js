// TODO Edit the code so that it functions properly (This is just copied from the tutorial)
function APIConnect() {
    var baseURL = 'http://pub.jamaica-inn.net/fpdb/api.php',
        username = '',
        password = '';

    function constructURL(params) {
        var constructedURL = "?";
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                console.log(key + " -> " + params[key]);
                constructedURL += key + "=" + params[key] + "&";
            }
        }
        constructedURL = constructedURL.replace('&','');
        console.log(constructedURL);
        return constructedURL;
    }


    function request(url, callback) {
        var xhr = new XMLHttpRequest(),
            url = 'http://www.someurl.com?param1=value1&param2=value2';

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
