<link href="../css/mobileAdmin.css" rel="stylesheet" />
<link href="../css/mobile_toggle.css" rel="stylesheet" />

<script src="../scripts/inventory.js"></script>


<meta name="viewport" content="width=device-width, initial-scale=1.0">

<ul class="navigation">
    <li> <img id="profile_pic" class="nav-item" src="../resources/img/placeholder.png">
    </li>
    <li class="nav-item">
        <div class="logout">
                <button class ="log_off_button"  onclick="window.location.assign('login_yeah.php')">
                    <span> Log Off</span>
                </button>
        </div>
    </li>
    <li class="nav-item"><button class="SUM">Stock</button></li>
    <li class="nav-item"><button class="SUM">Users</button></li>
    <li class="nav-item"><button class="SUM">Machine <br />Content</button></li>
</ul>

<input type="checkbox" id="nav-trigger" class="nav-trigger" />
<label for="nav-trigger"></label>

<div class="site-wrap">

    <div class="content">
    <!-- Here we include seperate php, depending on which button is pressed etc.. -->
        
                    <!-- TEST AREA  -->

                <?php include "mobile_machine.php";?>


                 <!-- END OF TEST AREA  -->
        
</div>

</div>
