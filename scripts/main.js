// TODO Edit the code so that it functions properly (This is just copied from the tutorial)
function docLoaded(fn) {
	if (document.readyState !== 'loading'){
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}
function load() {
  var api = new APIConnect(),
  btn = document.getElementById("yourbuttonID");

  api.setUser('jorass', 'jorass');
  btn.addEventListener('click', function() { loadUsers(api) });

  api.fetchIOU(function(usr) {  });
}
