<!DOCTYPE html>
<html lang="en">

<title>Beverage vending machine</title>
<meta charset="utf-8" />
<link href="../css/reset.css" rel="stylesheet" />
<link href="../css/wrapper.css" rel="stylesheet" />
<link href="../css/topbar.css" rel="stylesheet" />
<link href="../css/sidebar.css" rel="stylesheet" />
<link href="../css/user_content.css" rel="stylesheet" />
<link href="../css/history_stats.css" rel="stylesheet" />
<link href="../css/logoff_toggle.css" rel="stylesheet" />

<!-- <script src="../scripts/api.js"></script> -->
<script type="text/javascript" src="http://code.jquery.com/jquery.min.js"></script>
<script type="text/javascript" src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>
<script src="../resources/arrLang.js"></script>
<script src="../scripts/api.js"></script>
<script src="../scripts/users.js"></script>
<script src="../scripts/shopping_cart.js"></script>
<script src="../scripts/ui.js"></script>
<script src="../scripts/sort_table.js"></script>
<script src="../scripts/beverages.js"></script>
<script src="../resources/machine_content.js"></script>
<script src="../scripts/main.js"></script>
<script src="../scripts/history_stats.js"></script>
<script>
    $(document).ready(function () {
        //Get the username and password
        var $_POST = <?php echo !empty($_POST)?json_encode($_POST):'null';?>;
        if ($_POST === null || typeof $_POST['username'] == 'undefined') {
            //If the page is accessed directly, for debug purposes
            $_POST = {};
            $_POST["username"] = "ervtod";
            $_POST["password"] = "ervtod";
        }

        //Initialize page
        initUser($_POST["username"], $_POST["password"]);
        getHistory();
        dragNDrop();

        changeLanguage();

    });
</script>


<div id="wrapper">

    <div class="container">

        <?php include "stats_topbar.php";?>
            <?php include "sidebar.php";?>
                <?php include "history_stats_content.php";?>



                    <!-- THE MAIN CONTENT STARTS HERE, I.E NOT TOP BAR OR SIDE BAR -->


    </div>
</div>

</html>