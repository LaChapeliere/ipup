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
<script src="../resources/machineContent.js"></script>
<script src="../scripts/api.js"></script>
<script src="../scripts/beverages.js"></script>
<script src="../scripts/main.js"></script>

<script>
    //    docLoaded(populateSlotsConsumer);
    $(document).ready(function() {
        populateSlotsConsumer();
        dragNDrop();
    });
</script>

<!-- Wrapper for all content-->

<div id="wrapper">
    <div class="container">

        <!-- The top bar starts here-->
        <header id="topBar">
            <dl>
                <dt><button id="allBevButton">All Beverages</button></dt>
                <dt><button id="softDrinksButton">Soft Drinks</button></dt>
                <dt><button id="alcoDrinksButton">Alcoholic Drinks</button></dt>
                <dt><a href="historystats.php">History/Stats</a></dt>
            </dl>
        </header>

        <header id="adminTopbar">
            <dl>
                <dt><button>Users</button></dt>
                <dt><button>Machine stock</button></dt>
                <dt><button>Inventory</button></dt>
                <dt><a href="historystats.php">History/Stats</a></dt>
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
                <img src="img/niklas_test_photo.jpg">
            </div>

            <!-- The debt area-->
            <div id="debt">Your current debt:</div>

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

            <!-- The table, where the shopping cart is-->
            <div id="sidebar_content">
                <div id="cartBackground">
                    <h1>Shopping Cart</h1>
                    <table id="cartcontent">
                        <thead>
                            <tr>
                                <th field="name" width=120>Name</th>
                                <th field="quantity" width=30 align="right">Quantity</th>
                                <th field="price" width=30 align="right">Price</th>
                            </tr>
                        </thead>
                        <tbody id=tableBody>

                        </tbody>
                    </table>
                    <!--Added id = total here just temporarily so that the addProduct refers correctly. -Lauri -->
                    <p class="total" id="total">Total: $0</p>
                </div>
            </div>
            <!-- Clear all / Puchase button area-->
            <div id="sidebar_footer">
                <button id="clearAllCart">Clear all</button>
                <button id="purchaseCart">Purchase</button>
            </div>
        </div>

        <!-- THE MAIN CONTENT STARTS HERE, I.E NOT TOP BAR OR SIDE BAR -->

        <!-- A table for all of the drinks to appear in-->
        <div id="content">
            <table id="beveragesTable">
                <!-- Row one -->
                <tr>
                    <td class="product">
                        <div class="slotElement"> </div>
                        <div class="slotLeft">
                            <p class="drinkName">Anhorsteam delight</p>
                            <p class="price">25</p>
                            <p class="stock">Stock here</p>
                        </div>
                    </td>
                    <td class="product">
                        <div class="slotElement"> </div>
                        <div class="slotLeft">
                            <p class="drinkName">Name2</p>
                            <p class="price">30</p>
                            <p class="stock">Stock here</p>
                        </div>
                    </td>
                    <td class="product">
                        <div class="slotElement"> </div>
                        <div class="slotLeft">
                            <p class="drinkName">Name3</p>
                            <p class="price">35</p>
                            <p class="stock">Stock here</p>
                        </div>
                    </td>
                    <td class="product">
                        <div class="slotElement"> </div>
                        <div class="slotLeft">
                            <p class="drinkName">Name</p>
                            <p class="price">Price here</p>
                            <p class="stock">Stock here</p>
                        </div>
                    </td>
                    <td class="product">
                        <div class="slotElement"> </div>
                        <div class="slotLeft">
                            <p class="drinkName">Name</p>
                            <p class="price">Price here</p>
                            <p class="stock">Stock here</p>
                        </div>
                    </td>
                </tr>

                <!-- Row two -->
                <tr>
                    <td class="product">
                        <div class="slotElement"> </div>
                        <div class="slotLeft">
                            <p class="drinkName">Name</p>
                            <p class="price">Price here</p>
                            <p class="stock">Stock here</p>
                        </div>
                    </td>
                    <td class="product">
                        <div class="slotElement"> </div>
                        <div class="slotLeft">
                            <p class="drinkName">Name</p>
                            <p class="price">Price here</p>
                            <p class="stock">Stock here</p>
                        </div>
                    </td>
                    <td class="product">
                        <div class="slotElement"> </div>
                        <div class="slotLeft">
                            <p class="drinkName">Name</p>
                            <p class="price">Price here</p>
                            <p class="stock">Stock here</p>
                        </div>
                    </td>
                    <td class="product">
                        <div class="slotElement"> </div>
                        <div class="slotLeft">
                            <p class="drinkName">Name</p>
                            <p class="price">Price here</p>
                            <p class="stock">Stock here</p>
                        </div>
                    </td>
                    <td class="product">
                        <div class="slotElement"> </div>
                        <div class="slotLeft">
                            <p class="drinkName">Name</p>
                            <p class="price">Price here</p>
                            <p class="stock">Stock here</p>
                        </div>
                    </td>
                </tr>

                <!-- Row three -->
                <tr>
                    <td class="product">
                        <div class="slotElement"> </div>
                        <div class="slotLeft">
                            <p class="drinkName">Name</p>
                            <p class="price">Price here</p>
                            <p class="stock">Stock here</p>
                        </div>
                    </td>
                    <td class="product">
                        <div class="slotElement"> </div>
                        <div class="slotLeft">
                            <p class="drinkName">Name</p>
                            <p class="price">Price here</p>
                            <p class="stock">Stock here</p>
                        </div>
                    </td>
                    <td class="product">
                        <div class="slotElement"> </div>
                        <div class="slotLeft">
                            <p class="drinkName">Name</p>
                            <p class="price">Price here</p>
                            <p class="stock">Stock here</p>
                        </div>
                    </td>
                    <td class="product">
                        <div class="slotElement"> </div>
                        <div class="slotLeft">
                            <p class="drinkName">Name</p>
                            <p class="price">Price here</p>
                            <p class="stock">Stock here</p>
                        </div>
                    </td>
                    <td class="product">
                        <div class="slotElement"> </div>
                        <div class="slotLeft">
                            <p class="drinkName">Name</p>
                            <p class="price">Price here</p>
                            <p class="stock">Stock here</p>
                        </div>
                    </td>
                </tr>

                <!-- Row four -->
                <tr>
                    <td class="product">
                        <div class="slotElement"> </div>
                        <div class="slotLeft">
                            <p class="drinkName">Name</p>
                            <p class="price">Price here</p>
                            <p class="stock">Stock here</p>
                        </div>
                    </td>
                    <td class="product">
                        <div class="slotElement"> </div>
                        <div class="slotLeft">
                            <p class="drinkName">Name</p>
                            <p class="price">Price here</p>
                            <p class="stock">Stock here</p>
                        </div>
                    </td>
                    <td class="product">
                        <div class="slotElement"> </div>
                        <div class="slotLeft">
                            <p class="drinkName">Name</p>
                            <p class="price">Price here</p>
                            <p class="stock">Stock here</p>
                        </div>
                    </td>
                    <td class="product">
                        <div class="slotElement"> </div>
                        <div class="slotLeft">
                            <p class="drinkName">Name</p>
                            <p class="price">Price here</p>
                            <p class="stock">Stock here</p>
                        </div>
                    </td>
                    <td class="product">
                        <div class="slotElement"> </div>
                        <div class="slotLeft">
                            <p class="drinkName">Name</p>
                            <p class="price">Price here</p>
                            <p class="stock">Stock here</p>
                        </div>
                    </td>
                </tr>
            </table>


        </div>
    </div>
</div>


<body>

</body>

</html>