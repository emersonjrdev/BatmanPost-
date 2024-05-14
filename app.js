const submit = document.getElementById("form")
 
submit.addEventListener('click', function (event) {
 
    // capturei os dados do form
    const fname = document.getElementById("fname")
    const email = document.getElementById("email")
    const password = document.getElementById("password")
 
    event.preventDefault();
 
 
    // transformar os dados em json
 
 
    const userData = JSON.stringify({
        name: fname.value,
        email: email.value,
        password: password.value
    })
 
 
    // enviar para o servidor FETCh (POST)
 
 
    fetch("http://10.92.198.38:8080/auth/signup", {
        method: "Post",
        body: userData,
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then((result) => result.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
 
 
});