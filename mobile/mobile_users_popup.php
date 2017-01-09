<div id="popupStockEdit" class="overlay">
    <div class="popup">
        <form>
            <h2>Edit User Info</h2>
            <div class="popupContent">

                <!-- Input fields for the beverages -->

                <h3>Username</h3>
                <div class="inputDiv">
                    <input type="text" id="username" placeholder="User Name">
                </div>
                <h3>Name</h3>
                <div class="inputDiv">
                    <input type="text" id="name" placeholder="Name">
                </div>
                <h3>Debt</h3>
                <div class="inputDiv">
                    <input type="number" id="userBalance" placeholder="Debt">
                </div>

                <!-- Those fields are hidden for now -->
                <h3 class="lang" key="password" hidden>Password</h3>
                <div class="inputDiv" hidden>
                    <input type="password" id="userPassword" placeholder="Password">
                </div>
                <h3 class="lang" key="email" hidden>Email address</h3>
                <div class="inputDiv" hidden>
                    <input type="email" id="userEmail" placeholder="Email address">
                </div>
                <h3 class="lang" key="phone_number" hidden>Phone number</h3>
                <div class="inputDiv" hidden>
                    <input type="tel" id="userPhone" placeholder="Phone number">
                </div>


                <!-- Toggle button for admin-powers -->
                <h3>Is Admin?</h3>
                <div id="popup_toggle" class="inputDiv">
                    <!-- Rounded switch -->
                    <label class="switch">
                        <input type="checkbox">
                        <div class="slider round"></div>
                    </label>
                </div>
                <br>


                <!-- buttons for Save, Reset and Cancel -->

                <div class="inputDiv">
                    <button type="button" id="save" onclick="saveEditUser()">Save</button>
                    <button input type="reset" id="reset">Reset</button>
                    <button type="button" id="cancel" onclick="closeEditPopup()">Cancel</button>
                </div>
            </div>
        </form>
    </div>
</div>