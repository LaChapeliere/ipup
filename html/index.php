<!DOCTYPE html>
<html lang="en">
<title>Beverage vending machine</title>
<meta charset="utf-8" />
<link href="../css/reset.css" rel="stylesheet" />
<link href="../css/wrapper.css" rel="stylesheet" />
<link href="../css/topBar.css" rel="stylesheet" />
<link href="../css/sideBar.css" rel="stylesheet" />
<link href="../css/userContent.css" rel="stylesheet" />
<!--<script src="http://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
-->
<script type="text/javascript" src="http://code.jquery.com/jquery.min.js"></script>
<script type="text/javascript" src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>
<script src="../resources/machineContent.js"></script>
<script src="../scripts/api.js"></script>
<script src="../scripts/beverages.js"></script>
<script src="../scripts/users.js"></script>
<script src="../scripts/shopping_cart.js"></script>
<script src="../scripts/ui.js"></script>
<script src="../scripts/main.js"></script>

<script>
    //    docLoaded(populateSlotsConsumer);
    $(document).ready(function() {
        //Get the username and password from login page
        var $_POST = <?php echo !empty($_POST)?json_encode($_POST):'null';?>;
        if ($_POST === null || typeof $_POST['username'] == 'undefined') {
            //If the page is accessed directly, for debug purposes
            $_POST = {};
            $_POST["username"] = "ervtod";
            $_POST["password"] = "ervtod";
        }
        //Get filtering parameters for drinks
        var paramsDict = {};
        window.location.search.substr(1).split("&").forEach(function(item) {paramsDict[item.split("=")[0]] = item.split("=")[1]});
        if (paramsDict["filter"] == 'undefined') {
            paramsDict["filter"] = "all";
        }
        
        //Initialize page
        initUser($_POST["username"], $_POST["password"]);
        populateSlotsConsumer(paramsDict["filter"] !== "soft", paramsDict["filter"] !== "alco");
        dragNDrop();
        switchView()
    });
</script>

<!-- Wrapper for all content-->

<div id="wrapper">
    <div class="container">
        <?php include "topBar.php";?>
        <?php include "sideBar.php";?>
        <?php include "userContent.php";?>
        <?php include "customerContentPopup.php";?>
        

    </div>
</div>
<body>
</body>
</html>