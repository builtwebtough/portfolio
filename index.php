<!DOCTYPE html>
<!-- build web tough is a portfolio page for front end web development -->
<html lang="en-US">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link rel="stylesheet" href="w3.css">
  <title>Built-Web-Tough</title>
  <meta name="google-site-verification" content="CI88aEswT6i0PlSHbVe2aOWyu5ggXJzZpokCvSa-htk" />
</head>

<body onload="loadDoc('home.bwt', loadHome)" >
<h1 class="w3-text-teal" style="text-shadow:1px 2px 0 black; text-align: center; font-weight: bold;">Welcome to Built Web Tough.</h1>

  <hr> 

  <div class="w3-bar w3-border w3-light-grey">
    <a  class="w3-bar-item button w3-hover-teal" onclick="loadDoc('home.bwt', loadHome)">Home</a>
    <a  class="w3-bar-item button w3-hover-teal" onclick="loadDoc('about.bwt', loadAbout)">About</a>
    <a  class="w3-bar-item button w3-hover-teal" onclick="loadDoc('services.bwt', loadServices)">Services</a>
    <a  class="w3-bar-item button w3-hover-teal" onclick="loadDoc('projects.bwt', loadProjects)">Projects</a>
    <a  class="w3-bar-item button w3-hover-teal" onclick="loadDoc('contact.php', loadContact)">Contact</a>
    <a  class="w3-bar-item button w3-hover-teal" onclick="loadDoc('account.bwt', loadAccount)">Account</a>
  </div>

  <div id="stuff" class="w3-container w3-card-4 w3-teal" style="width:100%; display: block">
  In order to view this website please enable javascript.
  </div>

</body>
<footer style="text-align: center;"><hr><p id="foot">&#169;All Rights Reserved.<br>&bigstar; Built-Web-Tough &bigstar;</p></footer>
<script src="main.js"></script>
<script src="w3.js"></script>
</html>
