<!-- Pop Up Edit User PHP -->

<link href="../css/popup_user.css" rel="stylesheet" />            
              
                    <div class="box">
                        
                        <a class="button" href=#popupUserEdit>Click me!</a>
                    </div>
                




 <div id="popupUserEdit" class="overlay">
	<div class="popup">
        <form>
		<h2>Edit User Info</h2>
		<div class="popupContent">
            
            <button type="button" id="closeCross" onclick="closeEditPopup()">&times;</button>
            
            <!-- Input fields for the user -->
            
            <h3>User Name</h3>
            <div class="inputDiv"><input type="text" id="userName" placeholder="Name"></div>
            <h3>Balance</h3>
            <div class="inputDiv"><input type="number" id="userBalance" placeholder="Amount"></div>
            <h3>User ID</h3>
            <div class="inputDiv"><input type="text" id="userID" placeholder="ID"></div>
            <h3>Password</h3>
            <div class="inputDiv"><input type="password" id="userPassword" placeholder="Password"></div>
            
            <!-- Beverage typ selection meny-->
            
            <!-- Toggle button for Admin or NOT -->
            
            <h3>Admin Powers</h3>
            <div id="toggle_div">
                <label class="switch">
               <input type="checkbox"> 
               <div class="slider round"></div>
               </label>
            </div><br>
            
            
            <!-- buttons for Save, Reset and Cancel -->
            
            <div>
                <button type="button" id="save" onclick="saveEditBev()">Save</button>
                <button type="button" id="cancel" onclick="closeEditPopup()">Cancel</button>
            </div>
		</div>
    </form>
	</div>
</div> 