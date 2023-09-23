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

  //parse timetracker data and display it 
  function loadTimeTracker(xhttp){
    //we need to parse the xhttp.response text first then 
    //add it to a table and decorate the table with w3.css
    const txt = xhttp.responseText;
    const obj = JSON.parse(txt);
    document.getElementById("stuff").innerHTML =
    "total time on construction of this website = " + obj.total / 60 / 60 + " hours." + "array --> " + obj[0];
  }