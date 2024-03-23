// setTimeout(function () {
//     console.log('setTimeout');
// }, 1000)
// console.log('No SetTimeOut')

// function abc()
// {
//     console.log('a');
// }
// setTimeout(abc, 1000)
//LÀM 1 LẦN DUY NHẤT 
// setTimeout(function(){
//     console.log('a');
// }, 1000)

//LÀM LIÊN TỤC 
// setInterval(function(){
//     console.log('a');
// }, 1000)

// let i = 0;
// const vonglap = setInterval(function(){
//     console.log(i);
//     i++;

//     if(i>=5)//tránh trường hợp i>=6
//     {
//         clearInterval(vonglap);
//         console.log(('Ket thuc interva;'));
//     }
// }, 1000)
// let i = 0;
// setTimeout(clearInterval(i, 1000), 5000)
// for (i=0; i<3; i++)
// {
//     setTimeout(()=>{
//         console.log(i)
//     }, 0)
// }
// const myPromise = new Promise((resolve, reject) =>{
//     //fulfilled
//     randomNumber = Math.random()*10;
//     if (randomNumber > 5) resolve('OK');
//     //rejected
//     else reject('No')
// })

// myPromise
// .then(function(fulfillednumber){//value trong resole se truyen vao then
//     console.log(fulfillednumber);
// })

// .catch(function(rejectednumber){
//     console.log(rejectednumber)
// });

//BTVN
// const myPromise = new Promise((resolve, reject) =>{
//     let randomNumber = Math.random();
//     if(randomNumber > 50) {
//         resolve(randomNumber);
//     } else if (randomNumber < 10) {
//         reject('So nho qua');
//     }
// });

// myPromise
//     .then((value) =>{
//         console.log(value);
//     })
//     .catch((data) =>{
//         console.log(data);
//     });

const API_URL = "https://pokeapi.co/api/v2/pokemon/ditto";

const pokemonData = fetch(API_URL);

pokemonData.then(res=>{
    console.log(res);
})

