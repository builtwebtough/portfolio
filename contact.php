
<h2>Contact Form</h2>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
    <label>First Name</label><br>
    <input type="text" required><br><br>
    <label>Last Name</label><br>
    <input type="text" required><br><br>
    <label>Contact Phone#</label><br>
    <input type="tel" name="Phone#" required placeholder="(000)000-0000" ><br><br>
    <label>Description of your project</label><br>
    <textarea type="input" required></textarea>
    <br><br><br>
    <input type="submit" name="submit" value="Submit">
    <br><br>
</form>