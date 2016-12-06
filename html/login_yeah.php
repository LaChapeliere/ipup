<!DOCTYPE html>
<html lang="en">
    <script src="../scripts/api.js"></script>
    <script src="../scripts/users.js"></script>
    <head>
      <meta charset="utf-8">
        <link href="../css/style_front.css" rel="stylesheet" />
      <title>Jamaican Log Inn</title>
    </head>

    <body>
    <img src="img/logo.gif" alt="Tha Jamaica" style="width:400px;">
      <section class="container">
        <div class="login">
          <h1>Log in by filling in the fields below</h1>
          <form name="loginForm">
            <div><input class = "field" type="text" name="username" value="" placeholder="Nickname"></div>
            <div><input class = "field" type="password" name="password" value="" placeholder="Password"></div>
          </form>
          <button class="button" style="vertical-align:middle" onclick="validateLogin()"><span>Log In </span></button>
        </div>
      </section>
    </body>
</html>