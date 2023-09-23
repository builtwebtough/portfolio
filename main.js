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

//XMLHttpRequest to get text files to fill content
function loadDoc(url, cFunction) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {cFunction(this);}
  xhttp.open("GET", url);
  xhttp.send();
}

//dynamic content
function loadHome(xhttp){
      document.getElementById("stuff").innerHTML =
      xhttp.responseText;
  }

  function loadAbout(xhttp){
      document.getElementById("stuff").innerHTML =
      xhttp.responseText;
  }

  function loadServices(xhttp){
      document.getElementById("stuff").innerHTML =
      xhttp.responseText;
  }

  function loadAccount(xhttp){
    document.getElementById("stuff").innerHTML =
    xhttp.responseText;
}

function loadProjects(xhttp){
  document.getElementById("stuff").innerHTML =
  xhttp.responseText;
}

function loadContact(xhttp){
  document.getElementById("stuff").innerHTML =
  xhttp.responseText;
}



  