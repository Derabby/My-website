const form = document.getElementById("login-form");

let inputFields = JSON.parse(localStorage.getItem("entries"))

let arr = [];

console.log(inputFields)

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const text = {
        user: form.user.value,
        surname: form.surname.value,        
        username: form.username.value,
        password: form.password.value,
        email: form.email.value,
        gender: form.gender.value,              
        age: form.age.value,
        address: form.address.value,        
    }

    

    if(text.username == inputFields.username && text.email == inputFields.email) {
        
        document.getElementById("errMsg").innerHTML = "Username already exists!";
      
        return
    }

  let game = arr.push(text)

    console.log(arr)

    

    localStorage.setItem("entries", JSON.stringify(arr));


    if(game) {
        alert("Registration Successful")
        form.reset();

        location.href = "http://127.0.0.1:5500/successful.html"
        
    } else {
        alert("Registration failed")
    }



        
    console.log(text)
    
    
    
})
