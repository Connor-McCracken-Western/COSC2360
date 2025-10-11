"use strict";


window.addEventListener("load", function() {
   // Calculate the shopping cart when the page loads
   calcCart();
   
   // Verify that the user has selected a crust option
   document.getElementById("regSubmit").onclick = crustTest;   
   
   // Recalculate the shopping chart when any field loses the focus
   document.getElementById("fnBox").onblur = calcCart;
   document.getElementById("lnBox").onblur = calcCart; 
   document.getElementById("addressBox").onblur = calcCart;   
   document.getElementById("mailBox").onblur = calcCart;   
   document.getElementById("phoneBox").onblur = calcCart;   
   document.getElementById("CrustBox").onblur = calcCart;
   document.getElementById("TopPep").onblur = calcCart;
   document.getElementById("TopSau").onblur = calcCart;
   document.getElementById("TopHam").onblur = calcCart;
});


// Function to verify that a crust was selected by the user
function crustTest() {
   var confCrust = document.getElementById("crustBox");
   if (confCrust.selectedIndex === -1){
      confCrust.setCustomValidity("Select a crust option");
   } else {
      confCrust.setCustomValidity("");
   }
}

// Function to calculate the shopping cart total
function calcCart() {
   
   
   // Determine the cost of the selected crust
   let crustCost = 0;       // Initial cost of crust
   let crustChoice = "";    // Initial chosen crust

   // Index of the chosen session
   let selectedCrust = document.getElementById("CrustBox").selectedIndex;
   
   // Retrieve the name and cost of the selected crust
   if (selectedCrust !== -1) {
      crustChoice = document.forms.register.elements.CrustBox[selectedCrust].text;
      crustCost = document.forms.register.elements.CrustBox[selectedCrust].value;
   }
   
   // Determine the cost of toppings
   let toppingCost = 0;      // Initial topping cost
   
   // If the user selects a topping, update the cost
   if (document.forms.register.elements.TopPep.checked) {
      toppingCost += 2;
   }
   if (document.forms.register.elements.TopSau.checked) {
      toppingCost += 2;
   }
   if (document.forms.register.elements.TopHam.checked) {
      toppingCost += 2;
   }
   
   // Calculate total cost of the order
   // Multiply field values by 1 to convert them from text strings to numeric values
   let totalCost = + crustCost*1 + toppingCost*1;
   
   // Display the field values and calculated values in the Shopping Cart table
   document.getElementById("regName").textContent = document.forms.register.elements.firstName.value + " " + document.forms.register.elements.lastName.value;
   document.getElementById("regAddress").textContent = document.forms.register.elements.address.value;
   document.getElementById("regEmail").textContent = document.forms.register.elements.email.value;
   document.getElementById("regPhone").textContent = document.forms.register.elements.phoneNumber.value;
   document.getElementById("regCrust").textContent = crustChoice;
   document.getElementById("regTop").textContent = toppingCost;
   document.getElementById("regTotal").textContent = totalCost.toLocaleString("en-US", {style:"currency", currency: "USD"});
}
