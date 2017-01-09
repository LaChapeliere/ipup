<!--THE ADMIN SIDEBAR STARTS HERE -->
<div id="sidebar">

    <!-- Language setting - Top of sidebar -->
    <div id="language">
        <input type="image" src="../resources/img/sweden.png" class="translate" style="width:40px;" id="swe" alt="Svenska" />
        <input type="image" src="../resources/img/england.png" class="translate" style="width:40px;" id="en" alt="English" />
    </div>

    <!-- The code for the profile picture -->
    <div id="sidebar_header">
        <img id="profile_pic" src="../resources/img/placeholder.png">
    </div>

    <!-- Welcome message-->
    <div id="welcome"></div>

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




</div>