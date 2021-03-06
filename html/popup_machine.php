<!-- Pop Up Edit Machine Content PHP -->



<div id="popupUserEdit" class="overlay">
    <div class="popup">
        <form>
            <h2 class="lang" key="edit_machine_content">Edit Machine Content</h2>
            <div class="popupContent">

                <button type="button" id="closeCross" onclick="closeEditPopup()">&times;</button>

                <!-- Clicked Item presented-->
                <td>
                    <div id="edited_drink" class="product">
                        <div class="slotElement"> </div>
                        <div class="slotLeft">
                            <p class="drinkId" hidden>Id</p>
                            <p class="drinkName">Name</p>
                            <p class="price">Price here</p>
                            <p class="stock">Stock here</p>
                            <p class="imgDescription">Click to Edit</p>
                        </div>
                    </div>
                </td>
                <!-- Input fields for the user -->

                <h3 class="lang" key="update_amount_in_machine">Update the amount in the machine</h3>
                <div class="inputDiv">
                    <input type="number" id="quantity" placeholder="Amount" min="0" max="10">
                </div>
                <br>

                <!-- buttons for Save, Reset and Cancel -->

                <div>
                    <button type="button" id="save" onclick="saveEditContent()" class="lang" key="save">Save</button>
                    <button type="button" id="cancel" onclick="closeEditPopup()" class="lang" key="cancel">Cancel</button>
                </div>
            </div>
        </form>
    </div>
</div>