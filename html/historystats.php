<!DOCTYPE html>
<html lang="en">

	<title>Beverage vending machine</title>
	<meta charset="utf-8" />
	<link href="../css/reset.css" rel="stylesheet" />
	<link href="../css/style.css" rel="stylesheet" />
	<!-- <script src="../scripts/api.js"></script> -->
	<script src="../scripts/main.js"></script>
	<script>
		docLoaded(indexPageLoaded);
	</script>
<div id="wrapper">
	<div class="container">
		<header id="Top bar">
		<dl>
			<dt><a href="index.php?filter=all">All Beverages</a></dt>
			<dt><a href="index.php?filter=soft">Soft Drinks</a></dt>
			<dt><a href="index.php?filter=alco">Alcoholic Drinks</a></dt>
			<dt><button>History/Stats</button></dt>
		</dl>
		</header>
		

         <!--THE SIDEBAR STARTS HERE -->
         <div id="sidebar">

            <!-- Language setting - Top of sidebar -->
            <div id="language">
               <img src="img/sweden.png" style="width:40px;">
               <img src="img/england.png" style="width:40px;">
            </div>

            <!-- The code for the profil picture -->
            <div id="sidebar_header">
               <img src="img/niklas_test_photo.jpg">
            </div>

            <!-- The debt area-->
            <div id="debt">Your current debt:</div>

            <!-- The Log off button-->
            <div id="sidebar_header2">
               <a href="login_yeah.php">Log off</a> <!--We need to insert something that logs the son of gun out-->
            </div>

            <!-- The text area, where the shopping cart is-->
            <div id="sidebar_content">
               <textarea id="cart" rows="17" placeholder="This is where your drinks go"></textarea>
            </div>

            <!-- Clear all / Puchase button area-->
            <div id="sidebar_footer">
               <button>Clear all</button>
               <button>Purchase</button>
            </div>
         </div>

         <!-- THE MAIN CONTENT STARTS HERE, I.E NOT TOP BAR OR SIDE BAR -->

            
   			<div id="historycontent">
   				What do we want here? :) 
   			</div>	

	
	

<body>

</body>

</html>