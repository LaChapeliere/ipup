// TODO Edit the code so that it functions properly (This is just copied from the tutorial)
function APIConnect() {
	var baseURL = '',
		username = '',
		password = '';

	function constructURL(params) { }

	function request(url, callback) { }

	this.setUser = function(un, pw) {
		username = un;
		password = pw;
	};

	this.fetchUsers = function(callback) {
		var url = constructURL({action: 'user_get_all'});
		request(url, callback);
	};

	this.fetchIOU = function(callback) { };
}
