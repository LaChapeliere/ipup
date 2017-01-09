<!-- Pop Up Edit User PHP -->

<link href="../css/popup_user.css" rel="stylesheet" />




<div id="popupUserEdit" class="overlay">
    <div class="popup">
        <form>
            <h2 class="lang" key="edit_user_info">Edit User Info</h2>
            <div class="popupContent">

                <button type="button" id="closeCross" onclick="closeEditPopup()">&times;</button>

                <!-- Input fields for the user -->
                <h3 class="lang" key="username">Username</h3>
                <div class="inputDiv">
                    <input type="text" id="username" placeholder="Username">
                </div>
                <h3 class="lang" key="name">Name</h3>
                <div class="inputDiv">
                    <input type="text" id="name" placeholder="Name">
                </div>
                <h3 class="lang" key="balance">Balance</h3>
                <div class="inputDiv">
                    <input type="number" id="userBalance" placeholder="Amount">
                </div>
                <h3 class="lang" key="password">Password</h3>
                <div class="inputDiv">
                    <input type="password" id="userPassword" placeholder="Password">
                </div>

                <h3 class="lang" key="email">Email address</h3>
                <div class="inputDiv">
                    <input type="email" id="userEmail" placeholder="Email address">
                </div>
                <h3 class="lang" key="phone_number">Phone number</h3>
                <div class="inputDiv">
                    <input type="tel" id="userPhone" placeholder="Phone number">
                </div>

                <!-- Toggle button for Admin or NOT -->

                <h3 class="lang" key="admin_powers">Admin Powers</h3>
                <div id="popup_toggle">
                    <!-- Rounded switch -->
                    <label class="switch">
                        <input type="checkbox">
                        <div class="slider round"></div>
                    </label>
                </div>


                <!-- buttons for Save, Reset and Cancel -->

                <div>
                    <button type="button" id="save" onclick="saveEditUser()" class="lang" key="save">Save</button>
                    <button type="button" id="cancel" onclick="closeEditPopup()" class="lang" key="cancel">Cancel</button>
                </div>
            </div>
        </form>
    </div>
</div>