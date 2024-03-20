document.addEventListener("DOMContentLoaded", function()
{
    const login = document.getElementById('log');
    login.addEventListener("click", function(){
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        if (typeof(Storage) != "undefined")
        {
            var users = [];
            if(localStorage.getItem("users"))
                users = JSON.parse(localStorage.getItem("users"));
            for (var i =0; i < users.length; i++){
                if (users[i].username == username && users[i].password == password)
                {
                    window.location.href ="https://www.youtube.com/";
                    return;
                }
            }
            alert("Invalid username or password");
        }
        else
            alert("No login");
    })
})