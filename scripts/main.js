/**
 * @author      Emma Barme
 * @version     0.2
 */

/**
 * Utily function to execute js scripts linked to an html only when the page has finished loading
 * @param The function to be executed
 * @NOTE Deprecated
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

/*
<!--
Copyright (c) 2016 by Captain Anonymous (http://codepen.io/anon/pen/rWKYqK)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
-->
*/
var tableFilter = (function(Arr) {

    var _input;

    function _onInputEvent(e) {
        _input = e.target;
        var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
        Arr.forEach.call(tables, function(table) {
            Arr.forEach.call(table.tBodies, function(tbody) {
                console.log(tbody);
                console.log(tbody.rows);
                Arr.forEach.call(tbody.rows, _filter);
            });
        });
    }

    function _filter(row) {
        var text = row.textContent.toLowerCase(),
            val = _input.value.toLowerCase();
        row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
    }

    return {
        init: function() {
            var inputs = document.getElementsByClassName('light-table-filter');
            console.log(inputs);
            Arr.forEach.call(inputs, function(input) {
                input.oninput = _onInputEvent;
            });
        }
    };
})(Array.prototype);

/**
 * The function goes through the query in the URL
 * @return Array of key-value pairs
 */
function checkParameters() {
    var paramsDict = {};
    window.location.search.substr(1).split("&").forEach(function(item) { paramsDict[item.split("=")[0]] = item.split("=")[1] });
    if (paramsDict["filter"] == 'undefined') {
        paramsDict["filter"] = "all";
    }
    if (paramsDict["lang"] == 'undefined') {
        paramsDict["lang"] = "en";
    }
    return paramsDict;
}