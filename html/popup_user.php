<!-- Pop Up Edit User PHP -->

<link href="../css/popup_user.css" rel="stylesheet" />            
              
                    <div class="box">
                        
                        <a class="button" href=#popupStockEdit>Click me!</a>
                    </div>
                




 <div id="popupStockEdit" class="overlay">
	<div class="popup">
        <form>
		<h2>Edit Beverage Info</h2>
		<div class="popupContent">
            
            <button type="button" id="closeCross" onclick="closeEditPopup()">&times;</button>
            <!-- Input fields for the beverages -->
            
            Beverage name:<br>
            <div class="inputDiv"><input type="text" id="bevName" placeholder="Beverage Name"></div><br>
            Quantity in stock:<br>
            <div class="inputDiv"><input type="number" id="bevQuantity" placeholder="Quantity"></div><br>
            Price of beverage<br>
            <div class="inputDiv"><input type="text" id="bevPrice" placeholder="Price"></div><br>
            
            <div class="inputDiv"><input type="text" id="bevId" placeholder="Id" hidden></div><br>
            
            <!-- Beverage typ selection meny-->
            Beverage type:
            <div>
            <select id="bevType" name="bvt">
                <option disabled selected value> -- select a beverage -- </option>
                <option>Soft Drink</option>
                <option>Lager</option>
                <option>Stout</option>
                <option>Ale</option>
                <option>Beer</option>
                <option>White Wine</option>
                <option>Red Wine</option>
                <option>Cider</option>
            </select>
            </div>
            
            <!-- Toggle button for alcohol/non alcohol -->
            Alcoholic?<br>
            <div id="toggle_div">
                <label class="switch">
               <input type="checkbox"> 
               <div class="slider round"></div>
               </label>
            </div><br>
            
            
            <!-- buttons for Save, Reset and Cancel -->
            
            <div>
                <button type="button" id="save" onclick="saveEditBev()">Save</button>
                <input type="reset">
                <button type="button" id="cancel" onclick="closeEditPopup()">Cancel</button>
            </div>
		</div>
    </form>
	</div>
</div> 