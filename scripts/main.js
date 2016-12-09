/**
 * @author      Emma Barme
 * @version     0.2
 */

/**
 * Utily function to execute js scripts linked to an html only when the page has finished loading
 * @param The function to be executed
 * @NOTE Unused
 */
function docLoaded(fn) {
    'use strict';
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}


/**
 * Utility function transforming the timestamp strings into JS Date objects
 * @param The timestamp string to parse
 * @return A corresponding Date object
 */
function timestampToDate(timestamp) {
    var dateAndTime = timestamp.split(" "), //Separate the date and the time in the timestamp
        dateSplit = dateAndTime[0].split("-"), //Separate the date
        timeSplit = dateAndTime[1].split(":"), //Separate the time
        date = new Date(parseInt(dateSplit[0]), parseInt(dateSplit[1]), parseInt(dateSplit[2]), parseInt(timeSplit[0]), parseInt(timeSplit[1]), parseInt(timeSplit[2]), 0); //The Date object
    return date;
}


function switchView() {
    'use strict';
    $('#toggle_div :checkbox').on('change', function(event) {
        if (this.checked) {
            document.location = './admin_view.php';
        } else {
            document.location = './index.php';
        }
    });
}