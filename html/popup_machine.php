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
		<h2>Edit Machine Content</h2>
		<div class="popupContent">
            
            <button type="button" id="closeCross" onclick="closeEditPopup()">&times;</button>
            
            <!-- Clicked Item presented-->
            <td>
                <div id="favorite_drink" class="product">
                    <div class="slotElement"> </div>
                        <div class="slotLeft">
                            <p class="drinkName">Name</p>
                            <p class="price">Price here</p>
                            <p class="stock">Stock here</p>
                            <p class ="imgDescription">Click to Edit</p>
                        </div>
                </div>
            </td>

            <!-- Input fields for the user -->
            
    
            <h3>Quantity</h3>
            <div class="inputDiv"><input type="number" id="quantity" placeholder="Amount"></div>
            
            
            <!-- buttons for Save, Reset and Cancel -->
            
            <div>
                <button type="button" id="save" onclick="saveEditBev()">Save</button>
                <button type="button" id="cancel" onclick="closeEditPopup()">Cancel</button>
            </div>
		</div>
    </form>
	</div>
</div> 