let form = document.getElementById("form");

form.addEventListener("submit", function(event){
    let emailValue = form.email.value;
    let passwordValue = form.password.value;
    if (emailValue === "huanrose@gmail.com" && passwordValue === "123456") {
        alert("Thông báo đăng nhập thành công");
    } else {
        alert("Thông báo đăng nhập thất bại");
    }
})