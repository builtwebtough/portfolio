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
getText("content.txt");

async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  document.getElementById("home").innerHTML = myText;
}
