document.getElementById("btn_login_form").addEventListener("click", loginForm);
document.getElementById("btn_register_form").addEventListener("click", registerForm);


//declarar variables
let container_login_register =document.querySelector(".container_login_register");
let login_form = document.querySelector(".login-form");
let register_form = document.querySelector(".register-form");
let backBox_login = document.querySelector(".backBox_login");
let backBox_register = document.querySelector(".backBox_register");

function loginForm(){
    register_form.style.display = "none";
    container_login_register.style.left ="10px";
    login_form.style.display = "block";
    backBox_register.style.opacity ="1";
    backBox_login.style.opacity = "0";
}

function registerForm(){
    register_form.style.display = "block";
    container_login_register.style.left ="500px";
    login_form.style.display = "none";
    backBox_register.style.opacity ="0";
    backBox_login.style.opacity = "1";
}