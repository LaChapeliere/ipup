<div id="popupStockEdit" class="overlay">
    <div class="popup">
        <form>
            <h2>Edit Beverage Info</h2>
            <div class="popupContent">

                <button type="button" id="closeCross" onclick="closeEditPopup()">&times;</button>
                <!-- Input fields for the beverages -->

                <h3>Beverage name</h3>
                <div class="inputDiv">
                    <input type="text" list="beverageList" id="bevName" placeholder="Beverage Name">
                </div>


                <datalist id="beverageList">
                    <option value="Beer">
                        <option value="Grape Juice">
                            <option value="Water">
                                <option value="Dragons blood">
                                    <option value="Virgins blood">
                                        <option value="Golden Shower">
                                            <option value="Red wine">
                                                <option value="White wine">
                                                    <option value="tea">
                                                        <option value="ice tea">
                                                            <option value="sprite">
                                                                <option value="coca cola">
                </datalist>




                <h3>Quantity in stock</h3>
                <div class="inputDiv">
                    <input type="number" id="bevQuantity" placeholder="Quantity">
                </div>


                <!-- Beverage typ selection meny-->
                <h3>Beverage type</h3>
                <div class="inputDiv">
                    <select id="bevType" name="bvt">
                        <option disabled selected value> -- select a row -- </option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>


                <div class="inputDiv">
                    <select id="bevType" name="bvt">
                        <option disabled selected value> -- select a column -- </option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>



                <!-- buttons for Save, Reset and Cancel -->

                <div>
                    <button type="button" id="save" onclick="saveEditBev()">Save</button>
                    <button input type="reset" id="reset">Reset</button>
                    <button type="button" id="cancel" onclick="closeEditPopup()">Cancel</button>
                </div>
            </div>
        </form>
    </div>
</div>