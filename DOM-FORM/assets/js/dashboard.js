const welcomeMsg = document.getElementById("welcome-msg")
const validate = localStorage.getItem("entries");

sessionStorage.getItem('logins');


function pageLoad() {
   
    if (validate) {
        const userData = JSON.parse(validate)
        welcomeMsg.innerHTML = "Welcome " + userData.user
      }


    document.getElementById('logout').addEventListener('click', function() {
        sessionStorage.removeItem('logins');
        window.location.href = 'http://127.0.0.1:5500/login.html';
    });
}
