const form = document.getElementById("create-account-form");

let inputFields = JSON.parse(localStorage.getItem("entries"))

let arr = [];

console.log(inputFields)

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const text = {
        name: form.username.value,        
        // email: form.email.value,
        password: form.password.value,
        // confirmpassword: form.confirm.value,
    }


//     if(text.username == inputFields.username && text.email == inputFields.email) {
        
//         document.getElementById("errMsg").innerHTML = "Username already exists!";
      
//         return
//     }

  let game = arr.push(text)

    console.log(arr)

    

    localStorage.setItem("entries", JSON.stringify(arr));


    if(game) {
        alert("Registration Successful")
        form.reset();

        location.href = "http://127.0.0.1:5500/product.html"
        
    g} else {
        alert("Registration failed")
    }



        
    console.log(text)
    
    
    
})
