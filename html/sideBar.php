        <!--THE SIDEBAR STARTS HERE -->
        <div id="sidebar">

            <!-- Language setting - Top of sidebar -->
            <div id="language">
                <img src="../resources/img/sweden.png" style="width:40px;" alt="Svenska">
                <img src="../resources/img/england.png" style="width:40px;" alt="English">
            </div>

            <!-- The code for the profile picture -->
            <div id="sidebar_header">
                <img id="profile_pic" src="../resources/img/placeholder.png">
            </div>
            
            <!-- Welcome message-->
            <div id="welcome"></div>

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
            <div class="logout">
                <button class ="log_off_button" style="vertical-align:middle" onclick="window.location.assign('login_yeah.php')"><span> Log Off</span></button>
            </div>
                

            <!-- The table, where the shopping cart is-->
            <div id="sidebar_content">
                <div id="cartBackground">
                    <h1>Shopping Cart</h1>
                    <table id="cartcontent">
                        <thead>
                            <tr>
                                <th field="name" width=110>Name</th>
                                <th field="quantity" width=20>#</th>
                                <th field="price" width=49>Price</th>
                            </tr>
                        </thead>
                        <tbody id=tableBody>

                        </tbody>
                    </table>
                    <!--Added id = total here just temporarily so that the addProduct refers correctly. -Lauri -->
                    <p class="total" id="total">Total: 0 kr</p>
                </div>
            </div>
            <!-- Clear all / Puchase button area-->
            <div id="sidebar_footer">
                <button id="clearAllCart">Clear all</button>
                <button id="purchaseCart">Purchase</button>
            </div>
        </div>