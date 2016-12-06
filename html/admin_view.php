<!DOCTYPE html>
<html lang="en">
<title>Beverage vending machine</title>
<meta charset="utf-8" />
<link href="../css/reset.css" rel="stylesheet" />
<link href="../css/style.css" rel="stylesheet" />
<link href="../css/admin.css" rel="stylesheet" /> <!--Overriding-->
<!--<script src="http://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
-->
<script type="text/javascript" src="http://code.jquery.com/jquery.min.js"></script>
<script type="text/javascript" src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>
<!--<script type="text/javascript" src="http://www.pureexample.com/js/lib/jquery.ui.touch-punch.min.js"></script>
-->
<script src="../scripts/api.js"></script>
<!--<script type="text/javascript" src="http://www.jeasyui.com/easyui/jquery.easyui.min.js"></script>
-->
<script src="../scripts/main.js"></script>
<script src="../scripts/api.js"></script>
<script src="../scripts/beverages.js"></script>
<script>
    $(document).ready(function() {
        dragNDrop()
    });
    docLoaded(populateSlotsConsumer);
</script>


<!-- Wrapper for all content-->

<div id="wrapper">
    <div class="container">

        <!-- The top bar starts here-->
        <header id="topBar">
            
            <dl>
                <dt><button>Users</button></dt>
                <dt><button>Machine stock</button></dt>
                <dt><button>Inventory</button></dt>
            </dl>
        </header>

        <!--THE SIDEBAR STARTS HERE -->
        <div id="sidebar">

            <!-- Language setting - Top of sidebar -->
            <div id="language">
                <img src="img/sweden.png" style="width:40px;">
                <img src="img/england.png" style="width:40px;">
            </div>

            <!-- The code for the profile picture -->
            <div id="sidebar_header">
                <img src="img/derpface.jpg">
            </div>

            <!-- Toggle button -->
            <div id="toggle_div">
                <p>Admin view</p>
                <label class="switch">
               <input type="checkbox"> 
               <div class="slider round"></div>
               </label>
            </div>

            <!-- The Log off button-->
            <div id="sidebar_header2">
                <a href="login_yeah.php">Log off</a>
                <!--We need to insert something that logs the son of gun out-->
            </div>
        </div>

        <!-- THE MAIN CONTENT STARTS HERE, I.E NOT TOP BAR OR SIDE BAR -->

        <!-- A table for all of the drinks to appear in-->
            
        
        <table id="stockTable" style="width:100%">
        <thead>
                <tr class ="stock_admin">
                    <th class = "head_admin"> <a href="javascript:SortTable(0,'T');">Le Name</a></th>
                    <th class = "head_admin"> <a href="javascript:SortTable(1,'T');">Le Price</a></th>
                    <th class = "head_admin"> <a href="javascript:SortTable(2,'T');">Le Count</a></th>
                    <th class = "head_admin"> <a href="javascript:SortTable(3,'T');">Le Category</a></th>
                    
                </tr>
        </thead>
        <tbody>      
                <tr class ="stock_admin">
                    
                            <td class="name_entry">Fame</td>
                            <td class="price_entry">Rice here</td>
                            <td class="stock_entry">Stock here</td>
                            <td class="category_entry">Category here</td>
                   
                </tr>
                
                <tr class ="stock_admin">
                    
                            <td class="name_entry">Name</td>
                            <td class="price_entry">Price here</td>
                            <td class="stock_entry">Stock here</td>
                            <td class="category_entry">Category here</td>
                   
                </tr>
                
                <tr class ="stock_admin">
                    
                            <td class="name_entry">Name</td>
                            <td class="price_entry">Price here</td>
                            <td class="stock_entry">Stock here</td>
                            <td class="category_entry">Category here</td>
                   
                </tr>
                
                <tr class ="stock_admin">
                    
                            <td class="name_entry">Name</td>
                            <td class="price_entry">Price here</td>
                            <td class="stock_entry">Stock here</td>
                            <td class="category_entry">Category here</td>
                   
                </tr>
                
                <tr class ="stock_admin">
                    
                            <td class="name_entry">Name</td>
                            <td class="price_entry">Price here</td>
                            <td class="stock_entry">Stock here</td>
                            <td class="category_entry">Category here</td>
                   
                </tr>
                
                <tr class ="stock_admin">
                    
                            <td class="name_entry">Name</td>
                            <td class="price_entry">Price here</td>
                            <td class="stock_entry">Stock here</td>
                            <td class="category_entry">Category here</td>
                   
                </tr>
                <tr class ="stock_admin">
                    
                            <td class="name_entry">Name</td>
                            <td class="price_entry">Price here</td>
                            <td class="stock_entry">Stock here</td>
                            <td class="category_entry">Category here</td>
                   
                </tr>
                
                <tr class ="stock_admin">
                    
                            <td class="name_entry">Name</td>
                            <td class="price_entry">Price here</td>
                            <td class="stock_entry">Stock here</td>
                            <td class="category_entry">Category here</td>
                   
                </tr>
                
                <tr class ="stock_admin">
                    
                            <td class="name_entry">Name</td>
                            <td class="price_entry">Price here</td>
                            <td class="stock_entry">Stock here</td>
                            <td class="category_entry">Category here</td>
                   
                </tr>
                <tr class ="stock_admin">
                    
                            <td class="name_entry">Name</td>
                            <td class="price_entry">Price here</td>
                            <td class="stock_entry">Stock here</td>
                            <td class="category_entry">Category here</td>
                   
                </tr>
                
                <tr class ="stock_admin">
                    
                            <td class="name_entry">Name</td>
                            <td class="price_entry">Price here</td>
                            <td class="stock_entry">Stock here</td>
                            <td class="category_entry">Category here</td>
                   
                </tr>
                
                <tr class ="stock_admin">
                    
                            <td class="name_entry">Name</td>
                            <td class="price_entry">Price here</td>
                            <td class="stock_entry">Stock here</td>
                            <td class="category_entry">Category here</td>
                   
                </tr>
                <tr class ="stock_admin">
                    
                            <td class="name_entry">Name</td>
                            <td class="price_entry">Price here</td>
                            <td class="stock_entry">Stock here</td>
                            <td class="category_entry">Category here</td>
                   
                </tr>
                
                <tr class ="stock_admin">
                    
                            <td class="name_entry">Name</td>
                            <td class="price_entry">88839</td>
                            <td class="stock_entry">Stock here</td>
                            <td class="category_entry">Category here</td>
                   
                </tr>
                
                <tr class ="stock_admin">
                    
                            <td class="name_entry">Name</td>
                            <td class="price_entry">Price here</td>
                            <td class="stock_entry">StOIHSAIUDHIre</td>
                            <td class="category_entry">Category here</td>
                   
                </tr>
                
                
                <tr class ="stock_admin">
                    
                            <td class="name_entry">blarrghhhharjj</td>
                            <td class="price_entry">Price here</td>
                            <td class="stock_entry">Stock here</td>
                            <td class="category_entry">Category here</td>
                   
                </tr>
            <tr class ="stock_admin">
                    
                            <td class="name_entry">Name</td>
                            <td class="price_entry">Price here</td>
                            <td class="stock_entry">Stock here</td>
                            <td class="category_entry">FATGEMONY</td>
                   
                </tr>
                
                <tr class ="stock_admin">
                    
                            <td class="name_entry">Name</td>
                            <td class="price_entry">Price here</td>
                            <td class="stock_entry">Stock here</td>
                            <td class="category_entry">Category here</td>
                   
                </tr>
                
                
                <tr class ="stock_admin">
                    
                            <td class="name_entry">Name</td>
                            <td class="price_entry">Price here</td>
                            <td class="stock_entry">Stock here</td>
                            <td class="category_entry">Category here</td>
                   
                </tr>
            <tr class ="stock_admin">
                    
                            <td class="name_entry">Name</td>
                            <td class="price_entry">Price here</td>
                            <td class="stock_entry">Stock here</td>
                            <td class="category_entry">Category here</td>
                   
                </tr>
                
                <tr class ="stock_admin">
                    
                            <td class="name_entry">Name</td>
                            <td class="price_entry">Price here</td>
                            <td class="stock_entry">Stock here</td>
                            <td class="category_entry">Category here</td>
                   
                </tr>
                
                
                <tr class ="stock_admin">
                    
                            <td class="name_entry">Name</td>
                            <td class="price_entry">Price here</td>
                            <td class="stock_entry">Stock here</td>
                            <td class="category_entry">Category here</td>
                   
                </tr>
                
            </tbody>      
            </table>
        </div>

        </div>



<body>
    
    
/*
    The following is a script taken from http://www.willmaster.com/library/features/sorting-a-table-with-javascript.php
    
    */
    
    <script type="text/javascript">
/* 
   Willmaster Table Sort
   Version 1.1
   August 17, 2016
   Updated GetDateSortingKey() to correctly sort two-digit months and days numbers with leading 0.
   Version 1.0, July 3, 2011

   Will Bontrager
   http://www.willmaster.com/
   Copyright 2011,2016 Will Bontrager Software, LLC

   This software is provided "AS IS," without 
   any warranty of any kind, without even any 
   implied warranty such as merchantability 
   or fitness for a particular purpose.
   Will Bontrager Software, LLC grants 
   you a royalty free license to use or 
   modify this software provided this 
   notice appears on all copies. 
*/
//
// One placed to customize - The id value of the table tag.

var TableIDvalue = "stockTable";

//
//////////////////////////////////////
var TableLastSortedColumn = -1;
function SortTable() {
var sortColumn = parseInt(arguments[0]);
var type = arguments.length > 1 ? arguments[1] : 'T';
var dateformat = arguments.length > 2 ? arguments[2] : '';
var table = document.getElementById(TableIDvalue);
var tbody = table.getElementsByTagName("tbody")[0];
var rows = tbody.getElementsByTagName("tr");
var arrayOfRows = new Array();
type = type.toUpperCase();
dateformat = dateformat.toLowerCase();
for(var i=0, len=rows.length; i<len; i++) {
	arrayOfRows[i] = new Object;
	arrayOfRows[i].oldIndex = i;
	var celltext = rows[i].getElementsByTagName("td")[sortColumn].innerHTML.replace(/<[^>]*>/g,"");
	if( type=='D' ) { arrayOfRows[i].value = GetDateSortingKey(dateformat,celltext); }
	else {
		var re = type=="N" ? /[^\.\-\+\d]/g : /[^a-zA-Z0-9]/g;
		arrayOfRows[i].value = celltext.replace(re,"").substr(0,25).toLowerCase();
		}
	}
if (sortColumn == TableLastSortedColumn) { arrayOfRows.reverse(); }
else {
	TableLastSortedColumn = sortColumn;
	switch(type) {
		case "N" : arrayOfRows.sort(CompareRowOfNumbers); break;
		case "D" : arrayOfRows.sort(CompareRowOfNumbers); break;
		default  : arrayOfRows.sort(CompareRowOfText);
		}
	}
var newTableBody = document.createElement("tbody");
for(var i=0, len=arrayOfRows.length; i<len; i++) {
	newTableBody.appendChild(rows[arrayOfRows[i].oldIndex].cloneNode(true));
	}
table.replaceChild(newTableBody,tbody);
} // function SortTable()

function CompareRowOfText(a,b) {
var aval = a.value;
var bval = b.value;
return( aval == bval ? 0 : (aval > bval ? 1 : -1) );
} // function CompareRowOfText()

function CompareRowOfNumbers(a,b) {
var aval = /\d/.test(a.value) ? parseFloat(a.value) : 0;
var bval = /\d/.test(b.value) ? parseFloat(b.value) : 0;
return( aval == bval ? 0 : (aval > bval ? 1 : -1) );
} // function CompareRowOfNumbers()

function GetDateSortingKey(format,text) {
if( format.length < 1 ) { return ""; }
format = format.toLowerCase();
text = text.toLowerCase();
text = text.replace(/^[^a-z0-9]*/,"");
text = text.replace(/[^a-z0-9]*$/,"");
if( text.length < 1 ) { return ""; }
text = text.replace(/[^a-z0-9]+/g,",");
var date = text.split(",");
if( date.length < 3 ) { return ""; }
var d=0, m=0, y=0;
for( var i=0; i<3; i++ ) {
	var ts = format.substr(i,1);
	if( ts == "d" ) { d = date[i]; }
	else if( ts == "m" ) { m = date[i]; }
	else if( ts == "y" ) { y = date[i]; }
	}
d = d.replace(/^0/,"");
if( d < 10 ) { d = "0" + d; }
if( /[a-z]/.test(m) ) {
	m = m.substr(0,3);
	switch(m) {
		case "jan" : m = String(1); break;
		case "feb" : m = String(2); break;
		case "mar" : m = String(3); break;
		case "apr" : m = String(4); break;
		case "may" : m = String(5); break;
		case "jun" : m = String(6); break;
		case "jul" : m = String(7); break;
		case "aug" : m = String(8); break;
		case "sep" : m = String(9); break;
		case "oct" : m = String(10); break;
		case "nov" : m = String(11); break;
		case "dec" : m = String(12); break;
		default    : m = String(0);
		}
	}
m = m.replace(/^0/,"");
if( m < 10 ) { m = "0" + m; }
y = parseInt(y);
if( y < 100 ) { y = parseInt(y) + 2000; }
return "" + String(y) + "" + String(m) + "" + String(d) + "";
} // function GetDateSortingKey()
</script>


</body>

</html>