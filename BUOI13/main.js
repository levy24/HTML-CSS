// const User = {
//     name: "Vy",
//     age: 20, 
//     ID: 348,
//     get getName(){
//         return this.name;
//     },
    // getName : function(){
    //     return this.name;
    // }
//     set setAge(age){
//         this.age = age;
//     }
// }
// console.log(User.getName);
// User.setAge = 10
// console.log(User.age)


// const data = {
//     userName: "hello", 
//     password: "123",
//     id: "123123",
//     age: 15
// }
// const {userName, id, age = 12} = data//không dựa vào vị trí 
// console.log(userName, id, age);//mặc định lấy default value

//destructing
// const arr = [1, 2, 3, 4, 5];
// const [e, d, r, a] = arr;//default value
// const [m, n, , g, f] = arr//bỏ 1 giá trị bất kỳ
// console.log(m, n, g, f);
// const [b, ...c] = arr;
// console.log(b, ...c);//...rest

//spread
// const arr1 = [1,2];
// const arr2 = [3,4];
// const arr = [...arr1, ...arr2];//arr = [1, 2, 3, 4]+
// console.log(arr);

// const user = {
//     name: "hello", 
//     age: 13,
//     gender: 1
// }

// const user2 ={
//     ...user,
//     name: "khac"
// }
// console.log(user2);

// async function fetchData(){
//     const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
//     const data = await response.json();
//     console.log(data);
//     const {id, price, description} = data;
//     console.log(id, price, description);
// }
// fetchData()

async function login()
{
    const userName = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const data = await fetch('https://dummyjson.com/auth/login',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({
            userName, 
            password
        })
    })
    const res = await data.json();
    localStorage.setItem("token", res.token)
    redirectToNewPage();
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('log').addEventListener("click", login);
})

function redirectToNewPage(){
    const token = localStorage.getItem('token');
    console.log(token);
    if (token !== null)
        window.location ="https://www.youtube.com/";
    else 
        console.log("Token not found in localStoregae");
}
