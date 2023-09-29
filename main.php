<!DOCTYPE html>
<html>
<body>

<?php
if(isset($_POST['login'])){ echo "<h2>This came from the login page</h2>";
}elseif(isset($_POST['signup'])){
echo "<h2>This came from the contact form</h2>";
}else{
echo "<h2>This is where we handle all php post from the account page and the contact form<br>
we will load various pages from this code.
</h2>";
}
?> 

</body>
</html>