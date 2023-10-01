<!DOCTYPE html>
<html>
<body>
<?php

//This page will process all form requests

if(isset($_POST['login'])){ 

    //we shall handle the login request here and redirect to an account php page that will display 
    //content relative to the account which is logged in.
    echo "<h2>This came from the login page</h2>";

}elseif(isset($_POST['signup'])){

    //we shall post this form to a database table and send
    // an email to the admin email notifiying of new account request.
    //and possibly email the requester via their submitted email address
    //then send the user to a comfirmation page that after a few seconds
    //redirects back to the main page.
    echo "<h2>This came from the contact form</h2>";

}else{

   //handle errors on submission here.
   
}

?> 
</body>
</html>