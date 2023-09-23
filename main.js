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
function loadHome(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("stuff").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "home.bwt");
    xhttp.send();
  }

  function loadAbout(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("stuff").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "about.bwt");
    xhttp.send();
  }

  function loadServices(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("stuff").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "services.bwt");
    xhttp.send();
  }
