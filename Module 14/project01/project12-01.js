"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-01

      Project to display a dropdown menu
      Author: Connor McCracken
      Date:   11/22/25

      Filename: project12-01.js
*/

$(document).ready(function(){
      $("li.submenu").mouseover(function(e){
            $(e.currentTarget).children("ul").show();
      })
      .mouseout(function(e){
            $(e.currentTarget).children("ul").hide();
      });
});




                                                