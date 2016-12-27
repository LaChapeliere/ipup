<!DOCTYPE html>
<html lang="en">
<title>Beverage vending machine</title>
<meta charset="utf-8" />
<link href="../css/reset.css" rel="stylesheet" />
<link href="../css/sidebar.css" rel="stylesheet" />
<link href="../css/topBar.css" rel="stylesheet" />
<link href="../css/wrapper.css" rel="stylesheet" />
<link href="../css/logoff_toggle.css" rel="stylesheet" />

<link href="../css/adminContent.css" rel="stylesheet" /> <!--Overriding-->
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
<script src="../scripts/sort_table.js"></script>
<script src="../scripts/ui.js"></script>
<script src="../scripts/users.js"></script>
<script src="../scripts/beverages.js"></script>
<script src="../scripts/inventory.js"></script>
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
        initUser($_POST["username"], $_POST["password"]);
        populateUsers();
        tableFilter.init();
        $("#usersButton").attr('class', 'selected');
        $('#toggle_div :checkbox').prop('checked', true);
    });
</script>

<!-- Wrapper for all content-->

<div id="wrapper">
    <div class="container">
        <?php include "adminTopBar.php";?>
        <?php include "adminSideBar.php";?>
        <?php include "adminContentUsers.php";?>
 
</div>
    
</div>


<body>
<?php include "popup_user.php";?>
</body>

</html>*/