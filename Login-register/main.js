document.addEventListener("DOMContentLoaded", function () {
    const registerBtn = document.getElementById("registerBtn");
    const loginBtn = document.getElementById("loginBtn");
    const log = document.getElementById('log');

    registerBtn.addEventListener("click", function () {
        registerBtn.style.borderBottom = "2px solid #11698E";
        loginBtn.style.borderBottom ="none";
        log.textContent = "Register";
    });

    loginBtn.addEventListener("click", function () {
        log.textContent = "Login";
        loginBtn.style.borderBottom = "2px solid #11698E";
        registerBtn.style.borderBottom ="none";
    });

    log.addEventListener("click", function () {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        if (password == "" && username == "") {
            alert('Please enter your password and username');
            return;
        }
        if (password == "") {
            alert("Please enter your password");
            return;
        }
        if (username == "") {
            alert("Please enter your username");
            return;
        }

        if (log.textContent === "Login") {
            // Xử lý đăng nhập
            if (typeof (Storage) != "undefined") {
                var users = [];
                if (localStorage.getItem("users")) {
                    users = JSON.parse(localStorage.getItem("users"));
                }
                for (var i = 0; i < users.length; i++) {
                    if (users[i].username == username && users[i].password == password) {
                        window.location.href = "https://www.youtube.com/";
                        return;
                    }
                }
                alert("Invalid username or password");
            } else {
                alert("No login");
            }
        } else if (log.textContent === "Register") {
            // Xử lý đăng ký
            if (typeof (Storage) != "undefined") {
                var users = [];
                if (localStorage.getItem("users")) {
                    users = JSON.parse(localStorage.getItem("users"));
                }
                for (var i = 0; i < users.length; i++) {
                    if (users[i].username == username && users[i].password == password) {
                        alert("Account already exists");
                        return;
                    }
                }
                users.push({ username: username, password: password });
                localStorage.setItem("users", JSON.stringify(users));
                alert("Registration successful!");
            } else {
                alert("Registration unsuccessful!");
            }
        }
    });
});
