// //cắt các khoảng trắng
// let data = "        hello        "
// console.log(data.trim());

// //tách chuỗi thành mảng
// let text = "a,b,c,d,e,f";
// const data1 = text.split(",");
// console.log(data1);

// //lấy ra string mới từ string cũ dựa vào vị trí đầu và vị trí cuối yêu cầu 
// let str = "aaa, bbb, ccc";
// const test = str.substring(3, 6);
// console.log(test);

// //trong 1 arr có thể có nhiều kiểu dữ liệu 
// const arr = [12, "heheheh"];
// arr.unshift("456");//thêm phần tử đầu tiên vào mảng
// arr.shift();
// arr.push(123);
// arr.pop();//lấy ra phần tử cuối 
// arr.find(1);
// const data2 =arr.join(); // chuyển arr thành string 

//object
// let flex = "hihi"
// const obj = {
//     name: "Vy",
//     age: 20,
//     email: "gmail.com",
//     [flex]: 'huhu'
// }
// console.log(obj)

// function User(name, age, id, gender) {
//     this.name = name;
//     this.age = age;
//     this.id = id;
//     this.gender = gender
//     this.getName = function () {
//         return this.name;
//     }
// }
// let p1 = new User("Vy", 20, 1223345, 1)

// User.prototype.gender = 0
// p1.heheh = 'cuoi' // thêm 1 cặp key value 
// console.log(p1)
// console.log(p1.getName())
// console.log(p1['age'])
// console.log(p1.gender)
// console.log(Object.getPrototypeOf(p1).gender)

// // Date
// let date = new Date();// dữ liệu object
// let date2 = Date();//dữ liệu string
// console.log(date)
// console.log(date.getTime());// mili = today - 1/1/1970
// console.log(date.getMonth() + 1)

// //Math
// let abcd = 10.4//trunc lấy phần nguyên, floor làm tròn dưới 
// console.log(Math.trunc(abcd))
// console.log(Math.ceil(abcd))

const fruits = ["Banana", "Orange", "Apple", "Mango"]
// fruits.splice(2, "hhhehe", "hhehehe", 123)//index, số phần tử bị xóa nếu là string thì 0
// console.log(fruits);
// console.log(fruits.slice(1, 3));

// for (let i = 0; i < fruits.length; i++)
//     console.log(fruits[i]);

// const obj2 = {
//     name: "heheheh",
//     age: 45
// }

// for (let x in obj2)
//     console.log(obj2[x]);

// for (const x of obj2.name) {//for of không dùng với object
//     console.log();
// }
// fruits.forEach((value, index, arr) => {
//     console.log(value);
//     console.log(index);
//     console.log(arr);
// });

for (let i = 0; i < fruits.length; i++) {
    console.log(`index: ${i}, value: ${fruits[i]}, ${fruits}`)
}
const hihi = [1, 4, 5, 6]
// const test = hihi.find((value, index, arr) => {//find tìm được giá trị thỏa mãn yêu cầu sẽ break ngay lập tức 
//     return value > 2
// })
// console.log(test)

// const test2 = hihi.filter((value, index, arr) => {//filter lọc các phần tử thỏa mãn điều kiện
//     return value > 2
// } )
// console.log(test2)

// const test3 = hihi.includes("1");//so sánh giống ===
// console.log(test3)

// const test4 = hihi.map((value) => {
//     value +=2
//     console.log(value)
//     return value
// })

// console.log(test4);

const test5 = hihi.reduce((preVal, curVal, index, arr) => {
    console.log(preVal);
    console.log(curVal);
    console.log(index);
    console.log(arr);
    console.log();
}, 0)