<!DOCTYPE html>
<html lang="en">
    <script type="text/javascript" src="http://code.jquery.com/jquery.min.js"></script>
    <script type="text/javascript" src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>
    <script src="../scripts/api.js"></script>
    <script src="../scripts/users.js"></script>
    <head>
      <meta charset="utf-8">
        <link href="../css/style_front.css" rel="stylesheet" />
      <title>Jamaican Log Inn</title>
    </head>

    <body>
    <img src="../resources/img/logo.gif" alt="Jamaica Inn" style="width:45%;">
      <section class="container">
        <div class="login">
          <h1>Log in by filling in the fields below</h1>
          <form name="loginForm" method="post" action="index.php?filter=all&lang=en">
            <div><input class = "field" type="text" name="username" value="" placeholder="Nickname"></div>
            <div><input class = "field" type="password" name="password" value="" placeholder="Password"></div>
          </form>
          <button class="button" style="vertical-align:middle" onclick="validateLogin()"><span>Log In </span></button>
        </div>
        <?php include "login_error.php";?>
      </section>
    </body>
</html>
