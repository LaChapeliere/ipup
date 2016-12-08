<link href="../css/popup_stock.css" rel="stylesheet" />            
               
                    <div class="box">
                        
                        <a class="button" href=#popupStockEdit>Click me!</a>
                    </div>
                




 <div id="popupStockEdit" class="overlay">
	<div class="popup">
		<h2>Here you are</h2>
		<a class="close" href="#">&times;</a>
		<div class="popupContent">
            
            
            <!-- Input fields for the beverages -->
            
            <input type="text" id="bevName" placeholder="Beverage Name">
            <input type="text" id="bevQuantity" placeholder="Quantity">
            <input type="text" id="bevPrice" placeholder="Price">
            
            
            <!-- Toggle button for alcohol/non alcohol -->
            <div id="toggle_div">
                <p>Admin view</p>
                <label class="switch">
               <input type="checkbox"> 
               <div class="slider round"></div>
               </label>
            </div>
            
            
            <!-- Beverage typ selection meny-->
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
	</div>
</div> 