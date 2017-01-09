<link href="../css/customerContentPopup.css" rel="stylesheet" />



<div id="customerContentPopup" class="overlay">
    <div class="popup">
        <h2 class="lang" key="confirmation_non_empty_cart">Sure you want to continue?</h2>
        <h3 class="lang" key="warning_non_empty_cart">Your cart is not empty! Leaving this page will unfortunately empty the cart.</h3>
        <a class="close" id="closeCross" href="#">&times;</a>
        <br>
        <div id="buttonDiv">
            <a class="close lang" href="#">
                <button id="no" key="cancel">Cancel</button>
            </a>
            <button id="yes" onclick="linkFormSubmit('historystats.php');" class="lang" key="continue">Continue</button>
        </div>
    </div>
</div>