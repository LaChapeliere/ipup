<!-- Pop Up Edit Machine Second Page PHP -->

<!-- Pop Up Edit Machine Content PHP -->    
 <div id="popupUserEdit" class="overlay_bis">
	<div class="popup">
        <form>
		<div class="popupContent">
            
            <button type="button" id="closeCross" onclick="closeEditPopup()">&times;</button>
            

            <!-- Input fields for the user -->
            
            <!-- Search Bar -->
            <input id="searchBar" type="search" class="light-table-filter" data-table="stock-table" placeholder="Type to Search">
            
    
            <h3>Choose beverage before clicking Select</h3>
            
            <!-- Table for beverages -->
            <table id="stockTableHead">
                <thead>
                    <tr class ="stock_admin">
                        <th class = "head_admin"> Name</th>
                        <th class = "head_admin">Price</th>
                     </tr>
                </thead>
            </table>
            
            
            <!-- buttons for Save, Reset and Cancel -->
            
            <div>
                <button type="button" id="save" onclick="selectEditBev()">Select</button>
                <button type="button" id="cancel" onclick="closeEditPopup()">Cancel</button>
            </div>
		</div>
    </form>
	</div>
</div> 