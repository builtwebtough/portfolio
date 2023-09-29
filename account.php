<?php
//php code goes here to process this form
?>

<h2>Login</h2>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
<lable for="uName">User Name:</lable><br> 
<input type="text" id="uName" name="uName"><br><br>
<label for="pwd">Password:</lable><br>
<input Type="password" id="pwd" name="pwd"><br><br>
<input type="submit" value="Submit"><br><br>
</form>
