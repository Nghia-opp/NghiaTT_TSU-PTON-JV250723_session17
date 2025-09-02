let text = document.getElementById("text");
let btn1 = document.getElementById("hide");
let btn2 = document.getElementById("show");

btn1.addEventListener("click", function(){
    text.style.display = "none";
})

btn2.addEventListener("click", function() {
    text.style.display = "block";
})
