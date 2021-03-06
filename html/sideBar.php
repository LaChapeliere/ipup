<!--THE SIDEBAR STARTS HERE -->
<div id="sidebar">

    <!-- Language setting - Top of sidebar -->
    <div id="language">
        <?php $search_en= http_build_query(array_merge($_GET, array('lang'=>'eng')));?>
            <?php $search_swe= http_build_query(array_merge($_GET, array('lang'=>'swe')));?>
                <?php 
            function selfURL() { 
                $s = empty($_SERVER["HTTPS"]) ? '' : ($_SERVER["HTTPS"] == "on") ? "s" : ""; 
                $protocol = strleft(strtolower($_SERVER["SERVER_PROTOCOL"]), "/").$s; 
                $port = ($_SERVER["SERVER_PORT"] == "80") ? "" : (":".$_SERVER["SERVER_PORT"]); 
                return $protocol."://".$_SERVER['SERVER_NAME'].$port.$_SERVER['REQUEST_URI']; 
                } 
            function strleft($s1, $s2) { 
                return substr($s1, 0, strpos($s1, $s2)); 
                }
            ?>
        <?php 
            function makeBeginningURL($preProcessedURL){
                $processedURL = $preProcessedURL;
                 if(empty($_GET)){
                    $processedURL .= "?";
                }
                if(array_key_exists("lang", $_GET)){
                    $processedURL = substr($processedURL, 0, -8);
                }
                return $processedURL; 
            }
            // This function is not used but was meant to attempt to fix the accumulation of query strings when switching from history_stats.php 
            // to  consumer_main.php and changing the language.
             function makeEndURL($begURL){
                $endURL = "";
                if(empty($_GET) && substr($begURL,-1)!=="?"){
                    $endURL .= "?";
                }
                if(array_key_exists("filter", $_GET)){
                    $endURL .= "filter=".$_GET["filter"];
                    if(array_key_exists("lang", $_GET)){
                        $endURL .=  "&lang=".$_GET["lang"];
                    }
                }
                elseif(array_key_exists("lang", $_GET)){
                     $endURL .=  "lang=".$_GET["lang"];
                }
                return $endURL; 
            }
        ;?>
    <!-- The buttons for changing languages -->
                        <a href="<?php echo makeBeginningURL(selfURL()).$search_swe?>">
                            <input type="image" src="../resources/img/sweden.png" class="translate" style="width:40px;" id="swe" alt="Svenska" />
                        </a>
                        <a href="<?php echo makeBeginningURL(selfURL()).$search_en?>">
                            <input type="image" src="../resources/img/england.png" class="translate" style="width:40px;" id="en" alt="English" />
                        </a>

    </div>

    <!-- The code for the profile picture -->
    <div id="sidebar_header">
        <img id="profile_pic" src="../resources/img/placeholder.png">
    </div>

    <!-- Welcome message-->
    <div id="welcome_block">
        <div class="welcome lang" key="welcome">Welcome</div>
        <div class="welcome" id="welcome"></div>
    </div>


    <!-- The debt area-->

    <div class="lang" id="balance" key="balance_colon">Balance:</div>
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
        <button class="log_off_button lang" style="vertical-align:middle" key="log_off" onclick="window.location.assign('index.php')"><span> Log Off</span></button>
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
            <p class="total" id="total">=></p>
        </div>
    </div>
    <!-- Clear all / Puchase button area-->
    <div id="sidebar_footer">
        <button id="clearAllCart" class="lang" key="clear_all">Clear all</button>
        <button id="purchaseCart" class="lang" key="purchase">Purchase</button>
    </div>
</div>