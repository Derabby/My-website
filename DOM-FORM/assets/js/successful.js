const header = document.querySelector("h1");
const login = document.getElementById("login-now");

let timeout;
let timeout2;

function myFunction() {
  timeout = setTimeout(alertFunc, 6000);
  timeout2 = setTimeout(alertFunc2, 10000)
}

function alertFunc() {
    header.style.display = "none"
    login.innerHTML = "You can now log in with your username and password"
}

function alertFunc2() {
    window.location.href = "http://127.0.0.1:5500/login.html"
}



