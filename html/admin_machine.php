<!DOCTYPE html>
<html lang="en">
<title>Beverage vending machine</title>
<meta charset="utf-8" />
<link href="../css/reset.css" rel="stylesheet" />
<link href="../css/wrapper.css" rel="stylesheet" />
<link href="../css/topbar.css" rel="stylesheet" />
<link href="../css/sidebar.css" rel="stylesheet" />
<link href="../css/user_content.css" rel="stylesheet" />
<link href="../css/admin_content.css" rel="stylesheet" />
<link href="../css/logoff_toggle.css" rel="stylesheet" />
<link href="../css/popup_machine.css" rel="stylesheet" />
<link href="../css/popup_machine_list.css" rel="stylesheet" />
<script type="text/javascript" src="http://code.jquery.com/jquery.min.js"></script>
<script type="text/javascript" src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>
<script src="../resources/arrLang.js"></script>
<script src="../scripts/api.js"></script>
<script src="../scripts/main.js"></script>
<script src="../resources/machine_content.js"></script>
<script src="../scripts/ui.js"></script>
<script src="../scripts/users.js"></script>
<script src="../scripts/beverages.js"></script>
<script src="../scripts/inventory.js"></script>
<script>
    $(document).ready(function () {
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
        populateSlotsConsumer(false, false, true);
        $("#machineContentButton").addClass('selected lang');
        $('#toggle_div :checkbox').prop('checked', true);

        changeJSLanguage();

    });
</script>

<!-- Wrapper for all content-->

<div id="wrapper">
    <div class="container">
        <?php include "admin_topbar.php";?>
            <?php include "admin_sidebar.php";?>
                <?php include "admin_content_machine.php";?>
                    <!-- The popups for editing machine content -->
                    <?php include "popup_machine.php";?>
                        <?php include "popup_machine_list.php";?>
    </div>

</div>


<body>

</body>

</html>