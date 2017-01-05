<div id="popupStockEdit" class="overlay">
	<div class="popup">
        <form>
		<h2>Edit Beverage Info</h2>
		<div class="popupContent">
 
            <!-- Input fields for the beverages -->
            
            <h3>Username</h3>
            <div class="inputDiv"><input type="text" id="uName" placeholder="User Name"></div>
            <h3>Name</h3>
            <div class="inputDiv"><input type="number" id="Name" placeholder="Name"></div>
            <h3>Debt</h3>
            <div class="inputDiv"><input type="text" id="Debt" placeholder="Debt"></div>

            
            <!-- Toggle button for admin-powers -->
            <h3>Is Admin?</h3>
            <div id="popup_toggle" class="inputDiv">
                <!-- Rounded switch -->
                <label class="switch">
                  <input type="checkbox">
                  <div class="slider round"></div>
                </label>
            </div><br>
            
            
            <!-- buttons for Save, Reset and Cancel -->
            
            <div class="inputDiv">
                <button type="button" id="save" onclick="saveEditUsers()">Save</button>
                <button input type="reset" id="reset" >Reset</button>
                <button type="button" id="cancel" onclick="closeEditPopup()">Cancel</button>
            </div>
		</div>
    </form>
	</div>
</div>