<!--PHP for Log in error that will be presented when wrong password or wrong username-->

<!-- Pop Up Edit User PHP -->

<link href="../css/login_error.css" rel="stylesheet" />        

 <div id="loginError" class="overlay">
	<div class="popup">
        <form>
		<h2>Login Error</h2>
		<div class="popupContent">
            
            <button type="button" id="closeCross" onclick="closeLoginError()">&times;</button>
            
            <!-- Text presented for the user -->
            <h3 id="errorMessage">Hello! Incorrect username or password has been entered. Please try again or contact an admin.</h3><br>
            
            <h3>Message to Admin</h3>
            <div class="inputDiv"><input type="text" id="messageText" placeholder="Hi, I have an issue..."></div>
        
            <h3>My Contact Info</h3>
            <div class="inputDiv"><input type="text" id="contactInfo" placeholder="Phone/Email"></div><br>
            
            
            <!-- buttons for Save, Reset and Cancel -->
            
            <div>
                <button type="button" id="tryAgain" onclick="closeLoginError()">Try Again</button>
                <button type="button" id="message" onclick="closeLoginError()">Message Admin</button>
            </div>
		</div>
    </form>
	</div>
</div> 