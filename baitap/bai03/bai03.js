let metal = document.getElementById("made");
let button01 = document.getElementById("button01");
let button02 = document.getElementById("button02");
let body = document.querySelector("body");

button01.addEventListener("click", function () {
    metal.style.display = "block";
    body.style.backgroundColor = "rgb(168, 168, 168)";
})
button02.addEventListener("click", function () {
    metal.style.display = "none";
    body.style.backgroundColor = "white";
})