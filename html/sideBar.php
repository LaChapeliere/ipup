        <!--THE SIDEBAR STARTS HERE -->
        <div id="sidebar">

            <!-- Language setting - Top of sidebar -->
            <div id="language">
                <input type="image" src="../resources/img/sweden.png" class="translate" style="width:40px;" id="swe" alt="Svenska"/>
                <input type="image" src="../resources/img/england.png" class="translate" style="width:40px;" id="en" alt="English"/>
             <!--   <button class="translate" id="en">English</button>
                <button class="translate" id="swe">Swedish</button>
                <img src="../resources/img/sweden.png" style="width:40px;" alt="Svenska">
                <img src="../resources/img/england.png" style="width:40px;" alt="English">-->
            </div>

            <!-- The code for the profile picture -->
            <div id="sidebar_header">
                <img id="profile_pic" src="../resources/img/placeholder.png">
            </div>
            
            <!-- Welcome message-->
            <div id = "welcome_block">
                <div class= "welcome lang" key="welcome">Welcome</div>
                <div class= "welcome" id="welcome"></div>
            </div>
         
 
            <!-- The debt area-->
           
            <div class="lang" id="balance" key="balance">Balance:</div>
            <div id="debt"></div>
 
            <!-- Toggle button -->
            <div id="toggle_div">
                <p class="lang" id="admin_view_text" key="admin_view">Admin view</p>
                <!-- Rounded switch -->
                <label class="switch">
                  <input type="checkbox">
                  <div class="slider round"></div>
                </label>
            </div>

            <!-- The Log off button-->
            <div class="logout">
                <button class ="log_off_button lang" style="vertical-align:middle" key="log_off" onclick="window.location.assign('login_yeah.php')"><span> Log Off</span></button>
            </div>
                

            <!-- The table, where the shopping cart is-->
            <div id="sidebar_content">
                <div id="cartBackground">
                    <h1 class="lang" key="shopping_cart">Shopping Cart</h1>
                    <table id="cartcontent">
                        <thead>
                            <tr>
                                <th field="name" width=110 class="lang" key="name">Name</th>
                                <th field="quantity" width=20>#</th>
                                <th field="price" width=49 class="lang" key="price">Price</th>
                            </tr>
                        </thead>
                        <tbody id=tableBody>

                        </tbody>
                    </table>
                    <!--Added id = total here just temporarily so that the addProduct refers correctly. -Lauri -->
                    <p class="total lang" key="total">Total:</p>
                     <p class="total" id="total"></p>
                </div>
            </div>
            <!-- Clear all / Puchase button area-->
            <div id="sidebar_footer">
                <button id="clearAllCart" class="lang" key="clear_all">Clear all</button>
                <button id="purchaseCart" class="lang" key="purchase">Purchase</button>
            </div>
        </div>