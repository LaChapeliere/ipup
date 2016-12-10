<!-- Pop Up Edit Machine Second Page PHP -->

<!-- Pop Up Edit Machine Content PHP -->

<link href="../css/reset.css" rel="stylesheet" />
<link href="../css/wrapper.css" rel="stylesheet" />
<link href="../css/userContent.css" rel="stylesheet" />    
<link href="../css/popup_machine.css" rel="stylesheet" /> 
              
<div class="box">
    <a class="button" href=#popupUserEdit>Click me!</a>
</div>
                

 <div id="popupUserEdit" class="overlay">
	<div class="popup">
        <form>
		<div class="popupContent">
            
            <button type="button" id="closeCross" onclick="closeEditPopup()">&times;</button>
            

            <!-- Input fields for the user -->
            
            <!-- Search Bar -->
            <input id="searchBar" type="search" class="light-table-filter" data-table="stock-table" placeholder="Type to Search">
            
    
            <h3>Choose beverage before clicking Select</h3>
            
            
            
            <!-- buttons for Save, Reset and Cancel -->
            
            <div>
                <button type="button" id="save" onclick="selectEditBev()">Select</button>
                <button type="button" id="cancel" onclick="closeEditPopup()">Cancel</button>
            </div>
		</div>
    </form>
	</div>
</div> 