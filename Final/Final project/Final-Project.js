"use strict";
/*  JavaScript 7th Edition

    Final-Project
    Author: Connor McCracken
    Date:   12/5/25

    Filename: Final-Project.js
*/


function showMap() {
   
   let homeTown = document.getElementById("homeTown");
   let hamburg = document.getElementById("hamburg")
   let distance = document.getElementById("distance");
   let yourHome;
   let burger;

    //User position
    navigator.geolocation.getCurrentPosition(
        position => {
            yourHome = new google.maps.LatLng(position.coords.latitude, position.coords.longitude) 

            new google.maps.Map(homeTown, {
            zoom: 12,
            center: yourHome
            });
        },
        error => {
            console.error("Couldnt get location",error.message);
            yourHome= new google.maps.LatLng(41.592106467223466, -109.23699417557584)

            new google.maps.Map(homeTown, {
                zoom: 17,
                center: yourHome
            });
        }
    )  

    //hamburg
    burger = new google.maps.LatLng(53.551086, 9.993682);

    new google.maps.Map(hamburg, {
    zoom: 12,
    center: burger
   });
   document.getElementById("button").addEventListener("click", () => {
    let distanceMeters = google.maps.geometry.spherical.computeDistanceBetween(yourHome, burger);
    let metersToKm = (distanceMeters / 1000).toFixed(1);
    distance.textContent = `The distance between you and hamburg is ${metersToKm} KM!`;
   })
}




