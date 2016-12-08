<link href="../css/popup_stock.css" rel="stylesheet" />            
               
                    <div class="box">
                        
                        <a class="button" href=#popupStockEdit>Click me!</a>
                    </div>
                




 <div id="popupStockEdit" class="overlay">
	<div class="popup">
        <form>
		<h2>Edit Beverage Info</h2>
		<a class="close" id="closeCross" href="#">&times;</a>
		<div class="popupContent">
            
            
            <!-- Input fields for the beverages -->
            
            Beverage name:<br>
            <div class="inputDiv"><input type="text" id="bevName" placeholder="Beverage Name"></div><br>
            Quantity in stock:<br>
            <div class="inputDiv"><input type="number" id="bevQuantity" placeholder="Quantity"></div><br>
            Price of beverage<br>
            <div class="inputDiv"><input type="text" id="bevPrice" placeholder="Price"></div><br>
            
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
            <input type="submit" value="Save">
            <input type="reset">
            <button id="Cancel"><a class="close" href="#">Cancel</a></button>
            </div>
		</div>
            </form>
	</div>
</div> 