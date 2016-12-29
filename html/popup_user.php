<!-- Pop Up Edit User PHP -->

<link href="../css/popup_user.css" rel="stylesheet" />            




 <div id="popupUserEdit" class="overlay">
	<div class="popup">
        <form>
		<h2>Edit User Info</h2>
		<div class="popupContent">
            
            <button type="button" id="closeCross" onclick="closeEditPopup()">&times;</button>
            
            <!-- Input fields for the user -->
            <h3>Username</h3>
            <div class="inputDiv"><input type="text" id="username" placeholder="Username"></div>
            <h3>Name</h3>
            <div class="inputDiv"><input type="text" id="name" placeholder="Name"></div>
            <h3>Balance</h3>
            <div class="inputDiv"><input type="number" id="userBalance" placeholder="Amount"></div>
            <h3>Password</h3>
            <div class="inputDiv"><input type="password" id="userPassword" placeholder="Password"></div>
            
            <h3>Email address</h3>
            <div class="inputDiv"><input type="email" id="userEmail" placeholder="Email address"></div>
            <h3>Phone number</h3>
            <div class="inputDiv"><input type="tel" id="userPhone" placeholder="Phone number"></div>
            
            <!-- Toggle button for Admin or NOT -->
            
            <h3>Admin Powers</h3>
            <div id="popup_toggle">
                <!-- Rounded switch -->
                <label class="switch">
                  <input type="checkbox">
                  <div class="slider round"></div>
                </label>
            </div><br>
            
            
            <!-- buttons for Save, Reset and Cancel -->
            
            <div>
                <button type="button" id="save" onclick="saveEditUser()">Save</button>
                <button type="button" id="cancel" onclick="closeEditPopup()">Cancel</button>
            </div>
		</div>
    </form>
	</div>
</div> 