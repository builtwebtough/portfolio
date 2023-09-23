/************************************************************** *
 *             JavaScript for Builtwebtough.com                 *
 *                                                              *
 *              Creating dynamic web pages.                     *
 *                                                              *
 ************************************************************** */

/* 
   init- set the strict mode, 
   add onload events, 
   add any meta tags needed. etc.
*/

//event listeners


//dynamic content
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("home").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "content.txt");
    xhttp.send();
  }
