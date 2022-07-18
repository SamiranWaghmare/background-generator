let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");

function changeColor(){
    body.style.background =
   "linear-gradient(to right,"
   +color1.value
   +","
   +color2.value
   +")";

   css.innerText = body.style.background ;

}
color1.addEventListener("input",changeColor); 

color2.addEventListener("input",changeColor);