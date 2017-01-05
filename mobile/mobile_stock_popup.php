<div id="popupStockEdit" class="overlay">
	<div class="popup">
        <form>
		<h2>Edit Beverage Info</h2>
		<div class="popupContent">
            
            <button type="button" id="closeCross" onclick="closeEditPopup()">&times;</button>
            <!-- Input fields for the beverages -->
            
            <h3>Beverage name</h3>
            <div class="inputDiv"><input type="text" id="bevName" placeholder="Beverage Name"></div>
            <h3>Quantity in stock</h3>
            <div class="inputDiv"><input type="number" id="bevQuantity" placeholder="Quantity"></div>
            <h3>Price of beverage</h3>
            <div class="inputDiv"><input type="text" id="bevPrice" placeholder="Price"></div>
            
            <div class="inputDiv"><input type="text" id="bevId" placeholder="Id" hidden></div>
            
            <!-- Beverage typ selection meny-->
            <h3>Beverage type</h3>
            <div class="inputDiv">
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
            <h3>Alcoholic?</h3>
            <div id="popup_toggle">
                <!-- Rounded switch -->
                <label class="switch">
                  <input type="checkbox">
                  <div class="slider round"></div>
                </label>
            </div><br>
            
            
            <!-- buttons for Save, Reset and Cancel -->
            
            <div>
                <button type="button" id="save" onclick="saveEditBev()">Save</button>
                <button input type="reset" id="reset" >Reset</button>
                <button type="button" id="cancel" onclick="closeEditPopup()">Cancel</button>
            </div>
		</div>
    </form>
	</div>
</div> 