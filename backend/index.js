document.getElementById("form").addEventListener("submit", function (event){
    event.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("errorMessege");

    if(email==="admin@empher.com" && password=== "empher@123"){
        alert("Logged in as Admin ");
        window.location.href= "admin.html";
    }
    else if (email==="user@empher.com" && password==="user@123" ){
       alert("Logged in as User")
        window.location.href="books.html"
    }
    else{
        errorMessage.textContent= "Invalid credentials ! "
    }
});