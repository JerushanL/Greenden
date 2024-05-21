// Selecting side nav bar
var sideNav = document.getElementById("sidenav")
var navIcon = document.getElementById("navicon")
var close = document.getElementById("close-nav")

navIcon.addEventListener("click", function () {
   sideNav.style.right = 0
})

close.addEventListener("click", function () {
   sideNav.style.right = "-30%"
})

// Search functionality

var search = document.getElementById("search")
var container = document.getElementById("product-container");
var productList = container.querySelectorAll("div");

search.addEventListener("keyup", function (event) {
   var enteredValue = event.target.value.toUpperCase();
   console.log(enteredValue)

   for (count = 0; count < productList.length; count++)
   {
      var productName = productList[count].querySelector("h1").textContent
      
      if (productName.toUpperCase().indexOf(enteredValue) < 0) {
         productList[count].style.display = "none"
      }
      else {
         productList[count].style.display = "block"
      }
   }

})

