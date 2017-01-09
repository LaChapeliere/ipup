<!DOCTYPE html>
<html lang="en">
<title>Beverage vending machine</title>
<meta charset="utf-8" />
<link href="../css/reset.css" rel="stylesheet" />
<link href="../css/wrapper.css" rel="stylesheet" />
<link href="../css/topbar.css" rel="stylesheet" />
<link href="../css/sidebar.css" rel="stylesheet" />
<link href="../css/user_content.css" rel="stylesheet" />
<link href="../css/logoff_toggle.css" rel="stylesheet" />
<!--<script src="http://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
-->
<script type="text/javascript" src="http://code.jquery.com/jquery.min.js"></script>
<script type="text/javascript" src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>
<script src="../resources/machine_content.js"></script>
<script src="../resources/arrLang.js"></script>
<script src="../scripts/api.js"></script>
<script src="../scripts/beverages.js"></script>
<script src="../scripts/users.js"></script>
<script src="../scripts/shopping_cart.js"></script>
<script src="../scripts/ui.js"></script>
<script src="../scripts/main.js"></script>

<script>
    $(document).ready(function () {
        //Get the username and password from login page
        var $_POST = <?php echo !empty($_POST)?json_encode($_POST):'null'; ?>;
        if ($_POST === null || typeof $_POST['username'] == 'undefined') {
            //If the page is accessed directly, for debug purposes
            $_POST = {};
            $_POST["username"] = "ervtod";
            $_POST["password"] = "ervtod";
        }
        //Get filtering parameters for drinks and language parameter
        var paramsDict = checkParameters();

        console.log(paramsDict);
        //Initialize page
        initUser($_POST["username"], $_POST["password"]);
        populateSlotsConsumer(paramsDict["filter"] !== "soft", paramsDict["filter"] !== "alco", false);
        dragNDrop();


        // var currentLang = changeLanguage();      
        changeLanguage(paramsDict["lang"]);

    });
</script>

<!-- Wrapper for all content-->

<div id="wrapper">
    <div class="container">
        <?php include "topbar.php";?>
            <?php include "sidebar.php";?>
                <?php include "user_content.php";?>
                    <?php include "customer_content_popup.php";?>


    </div>
</div>

<body>
</body>

</html>