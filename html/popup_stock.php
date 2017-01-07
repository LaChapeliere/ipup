<link href="../css/popup_stock.css" rel="stylesheet" />            
<!--            
                    <div class="box">
                        <a class="button" href=#popupStockEdit>Click me!</a>
                    </div>
-->

 <div id="popupStockEdit" class="overlay">
	<div class="popup">
        <form>
		<h2 class="lang" key="edit_bev_info">Edit Beverage Info</h2>
		<div class="popupContent">
            
            <button type="button" id="closeCross" onclick="closeEditPopup()">&times;</button>
            <!-- Input fields for the beverages -->
            
            <h3 class="lang" key="bev_name">Beverage name</h3>
            <div class="inputDiv"><input type="text" id="bevName" placeholder="Beverage Name"></div>
            <h3 class="lang" key="quantity_in_stock">Quantity in stock</h3>
            <div class="inputDiv"><input type="number" id="bevQuantity" placeholder="Quantity"></div>
            <h3 class="lang" key="bev_price">Price of beverage</h3>
            <div class="inputDiv"><input type="text" id="bevPrice" placeholder="Price"></div>
            
            <div class="inputDiv"><input type="text" id="bevId" placeholder="Id" hidden></div>
            
            <!-- Beverage typ selection meny-->
            <h3 class="lang" key="bev_type">Beverage type</h3>
            <div>
            <select id="bevType" name="bvt">
                <option disabled selected value class="lang" key="select_bev"> -- select a beverage -- </option>
                <option class="lang" key="soft_drink">Soft Drink</option>
                <option class="lang" key="lager">Lager</option>
                <option class="lang" key="stout">Stout</option>
                <option class="lang" key="ale">Ale</option>
                <option class="lang" key="beer">Beer</option>
                <option class="lang" key="white_wine">White Wine</option>
                <option class="lang" key="red_wine">Red Wine</option>
                <option class="lang" key="cider">Cider</option>
            </select>
            </div>
            
            <!-- Toggle button for alcohol/non alcohol -->
            <h3 class="lang" key="alcoholic">Alcoholic?</h3>
            <div id="popup_toggle">
                <!-- Rounded switch -->
                <label class="switch">
                  <input type="checkbox">
                  <div class="slider round"></div>
                </label>
            </div><br>
            
            
            <!-- buttons for Save, Reset and Cancel -->
            
            <div>
                <button type="button" id="save" onclick="saveEditBev()" class="lang" key="save">Save</button>
                <button input type="reset" id="reset" class="lang" key="reset">Reset</button>
                <button type="button" id="cancel" onclick="closeEditPopup()" class="lang" key="cancel">Cancel</button>
            </div>
		</div>
    </form>
	</div>
</div> 