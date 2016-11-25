// TODO Edit the code so that it functions properly (This is mainly just copied from the tutorial)
/*
function docLoaded(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
*/
function indexPageLoaded() {
    var api = new APIConnect();
    api.setUser('jorass','jorass');
    loadUsers(api);
}

function loadUsers(params) {
    params.fetchUsers(params);
    // console.log(params);
}
