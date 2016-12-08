<!DOCTYPE html>
<html lang="en">
<title>Beverage vending machine</title>
<meta charset="utf-8" />
<link href="../css/reset.css" rel="stylesheet" />
<link href="../css/sideBar.css" rel="stylesheet" />
<link href="../css/topBar.css" rel="stylesheet" />
<link href="../css/wrapper.css" rel="stylesheet" />

<link href="../css/admin.css" rel="stylesheet" /> <!--Overriding-->
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
<script src="../scripts/beverages.js"></script>
<script>
    $(document).ready(function() {
        dragNDrop()
    });
    docLoaded(populateSlotsConsumer);
</script>


<!-- Wrapper for all content-->

<div id="wrapper">
    <div class="container">
        <?php include "topBar.php";?>
        <?php include "sideBar.php";?>
        <?php include "adminContentStock.php";?>
 
</div>
    
</div>


<body>

</body>

</html>