document.addEventListener("DOMContentLoaded",function()
{
    const register = document.querySelector("button");
    register.addEventListener("click", function()
    {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        
        if(typeof(Storage) != "underfined")
        {
            var users = [];
            if(localStorage.getItem("users"))
                users = JSON.parse(localStorage.getItem("users"));
            users.push({username: username, password: password});
            localStorage.setItem("users", JSON.stringify(users));
            alert("Registration successful!")
        }
        else 
            alert("Registration unsuccessful!")
    })
})