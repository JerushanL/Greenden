// Selecting side nav bar
 var sideNav = document.getElementById("sidenav")
 var navIcon = document.getElementById("navicon")
 var close = document.getElementById("close-nav")

 navIcon.addEventListener("click",function() {
    sideNav.style.right= 0
 })

 close.addEventListener("click",function(){
    sideNav.style.right="-40%"
 })
    
