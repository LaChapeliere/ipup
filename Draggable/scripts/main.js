function docLoaded(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}


function indexPageLoaded() {
//    window.setInterval(rotateBanner, 3000);
		interact('.dropzone');
}
