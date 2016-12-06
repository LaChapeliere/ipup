<!DOCTYPE html>
<html lang="en">
<title>Beverage vending machine</title>
<meta charset="utf-8" />
<link href="../css/reset.css" rel="stylesheet" />
<link href="../css/style.css" rel="stylesheet" />
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
        <div id="content">
            <table id="stockTable" style="width:100%">
                <tr class ="stock_admin">
                    <th class = "head_admin">Name</th>
                    <th class = "head_admin">Price</th>
                    <th class = "head_admin">Count</th>
                    <th class = "head_admin">Category</th>
                </tr>
                
                <tr class ="stock_admin">
                    <div class="slotLeft">
                    <td class="drinkName">Name</td>
                            <td class="price">Price here</td>
                            <td class="stock">Stock here</td>
                            <td class="category">Category here</td>
                    </div>
                </tr>
                
                <tr class ="stock_admin">
                    <div class="slotLeft">
                    <td class="drinkName">Name</td>
                            <td class="price">Price here</td>
                            <td class="stock">Stock here</td>
                            <td class="category">Category here</td>
                    </div>
                </tr>
                
                <tr class ="stock_admin">
                    <div class="slotLeft">
                    <td class="drinkName">Name</td>
                            <td class="price">Price here</td>
                            <td class="stock">Stock here</td>
                            <td class="category">Category here</td>
                    </div>
                </tr>
                
                <tr class ="stock_admin">
                    <div class="slotLeft">
                    <td class="drinkName">Name</td>
                            <td class="price">Price here</td>
                            <td class="stock">Stock here</td>
                            <td class="category">Category here</td>
                    </div>
                </tr>
                
                
            </table>


        </div>
    </div>
</div>


<body>

</body>

</html>