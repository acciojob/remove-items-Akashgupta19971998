//your JS code here. If required.
// let selector=document.getElementById("colorSelect");
let button=document.getElementById("btn");
button.addEventListener("click", myFunction);
function myFunction() {
    var x = document.getElementById("colorSelect");
    x.remove(x.selectedIndex);
  }