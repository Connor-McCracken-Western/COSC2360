/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Connor McCracken
      Date:   9/7/25

      Filename: project02-01.js
 */

function FarenheitToCelsius(degree) {
    let celsius = (degree - 32) / 1.8;
    return celsius;
}

function CelsiusToFarenheit(degree) {
    let farenheit = degree * 1.8 + 32;
    return farenheit;
}

document.getElementById("cValue").onchange = function(){
       let cDegree = document.getElementById("cValue").value;
       document.getElementById("fValue").value = CelsiusToFarenheit(cDegree);
}

document.getElementById("fValue").onchange = function(){
    fDegree = document.getElementById("fValue").value;
    document.getElementById("cValue").value = FarenheitToCelsius(fDegree);    
}
