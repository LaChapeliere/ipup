<link href="../css/mobileAdmin.css" rel="stylesheet" />
<link href="../css/mobile_toggle.css" rel="stylesheet" />

<script type="text/javascript" src="http://code.jquery.com/jquery.min.js"></script>
<script type="text/javascript" src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>
<script src="../scripts/api.js"></script>
<script src="../scripts/main.js"></script>
<script src="../resources/machineContent.js"></script>
<script src="../scripts/users.js"></script>
<script src="../scripts/ui.js"></script>
<script src="../scripts/beverages.js"></script>
<script src="../scripts/inventory.js"></script>
<script src="../scripts/sort_table.js"></script>

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<script>
    $(document).ready(function() {
        //Get the username and password from login page
        var $_POST = <?php echo !empty($_POST)?json_encode($_POST):'null';?>;
        if ($_POST === null || typeof $_POST['username'] == 'undefined') {
            //If the page is accessed directly, for debug purposes
            $_POST = {};
            $_POST["username"] = "ervtod";
            $_POST["password"] = "ervtod";
        }
        
        //Initialize page
        initUserMobile($_POST["username"], $_POST["password"]);
        mobileNav();
        populateInventory();
        tableFilter.init();
/*
         $(function() {
             console.log($('.lang'));
                $('.translate').click(function() {
                    var lang = $(this).attr('id');
                    console.log($(this));
                //     console.log($('.lang'));
                    $('.lang').each(function(index, element) {
                        console.log(element);
                        console.log($(this));
                        $(this).text(arrLang[lang][$(this).attr('key')]);
                    });
                });
            });*/

    });
</script>

<ul class="navigation">
    <li> <img id="profile_pic" class="nav-item" src="../resources/img/placeholder.png">
    </li>
    <li class="nav-item">
        <div class="logout">
                <button class ="log_off_button"  onclick="window.location.assign('../html/login_yeah.php')">
                    <span> Log Off</span>
                </button>
        </div>
    </li>
    <li class="nav-item"><button class="SUM" id="mobileStockNav">Stock</button></li>
    <li class="nav-item"><button class="SUM" id="mobileUsersNav">Users</button></li>
    <li class="nav-item"><button class="SUM" id="mobileMachineNav">Machine <br />Content</button></li>
</ul>

<input type="checkbox" id="nav-trigger" class="nav-trigger" />
<label for="nav-trigger"></label>

<div class="site-wrap">

    <div class="content">
    <!-- Here we include seperate php, depending on which button is pressed etc.. -->
        
                    <!-- TEST AREA  -->

                <?php include "mobile_stock.php";?>


                 <!-- END OF TEST AREA  -->
        
</div>
    <div class="popup-content">
        <?php include "mobile_stock_popup.php";?>
    </div>

</div>
