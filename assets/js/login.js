const form = document.getElementById("login-form");
const check = JSON.parse(localStorage.getItem("entries"));  []

console.log(check);
// const validate = localStorage.getItem("entries");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = form.username.value;
  const password = form.password.value;
  

  const user = check.find(users => users.username === username && users.password === password);

  if (user) {

    sessionStorage.setItem('signedInUser', JSON.stringify(user));

    alert("Login successfull");

    form.reset();
    location.href = 'dashboard.html'
  } else{
    alert("Invalid login credentials!")
  }

})
function myFunction() {
  var popup = document.getElementById("myPopup")
   popup.classList.toggle("show")
}
















//   if (validate) {
//     const inputFields = JSON.parse(validate)
//     if(form.username.value == inputFields.username && form.password.value == inputFields.password) {
//         alert('You have successfully logged in.');

//         const newText = {
//             username: inputFields.username,
//             password: inputFields.password
//         }

//         sessionStorage.setItem("logins", JSON.stringify(newText));
    
//     window.location.href = "http://127.0.0.1:5500/server/product.html";
    
//     } else {
//         alert("Wrong username or password")
//     }
//   }

  

// k