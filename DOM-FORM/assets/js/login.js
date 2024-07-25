const form = document.getElementById("login-form");
const validate = localStorage.getItem("entries");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validate) {
    const inputFields = JSON.parse(validate)
    if(form.username.value == inputFields.username && form.password.value == inputFields.password) {
        alert('You have successfully logged in.');

        const newText = {
            username: inputFields.username,
            password: inputFields.password
        }

        sessionStorage.setItem("logins", JSON.stringify(newText));
    
    window.location.href = "http://127.0.0.1:5500/server/dashboard.html";
    
    } else {
        alert("Wrong username or password")
    }
  }

  

})

