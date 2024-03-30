document.getElementById("addTaskBtn").addEventListener("click", function () {
    var category = document.querySelector("#taskForm input:nth-of-type(1)").value;
    var title = document.querySelector("#taskForm input:nth-of-type(2)").value;
    var content = document.querySelector("#taskForm textarea").value;

    // Tạo một phần tử mới làm task
    var newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.classList.add("box-shadow");
    newTask.innerHTML = `
        <h3>${category}</h3>
        <p class="title"> ${title}</p>
        <p class="content">${content}</p>
        <p class="date-time"> ${new Date().toLocaleString()}</p>
    `;

    // Chèn phần tử mới vào phần "Todo"
    document.querySelector(".todo").appendChild(newTask);

    // Reset form
    document.querySelector("#taskForm input:nth-of-type(1)").value = "";
    document.querySelector("#taskForm input:nth-of-type(2)").value = "";
    document.querySelector("#taskForm textarea").value = "";

    document.getElementById("taskForm").style.display = "none";
});

document.querySelector(".new_task").addEventListener("click", function () {
    document.getElementById("taskForm").style.display = "block";
});

document.querySelector("#taskForm .close").addEventListener("click", function () {
    document.getElementById("taskForm").style.display = "none";
});

