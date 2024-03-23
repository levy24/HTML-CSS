// let data;
// async function fetchData2(){
//     data = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")//thêm await để giống như data
//     data = await data.json();//json là 1 promiss 
//     console.log(data)
//     data = await fetch(data.species.url)
//     data = await data.json();
//     console.log(data)
//     data = await fetch(data.evolution_chain.url)
//     data = await data.json();
//     console.log(data)
//     data = await fetch(data.chain.species.url)
//     data = await data.json();
//     console.log(data)
// }

// fetchData2()

// function batDongBo1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('tai du lieu 2s')
//             console.log('resolve123');
//             // reject('tai du lieu  2s that bai')
//         }, 2000)
//     })
// }
// function batDongBo2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('tai du lieu 3s')
//             console.log('123');
//             // reject('tai du lieu 3s that bai')
//         }, 3000)
//     })
// }

// // async function handleBDB(){
// //     // const bd1 = await batDongBo1();
// //     // const bd2 = await batDongBo2()
// //     const pr = Promise.all[batDongBo1(), batDongBo2()]
// //     console.log(pr);
// //     console.log('done');
// // }

// try{
//     console.log(1+2);
//     if(3 !== 4)
//         throw new Error('FJFJFJFJ');
// }catch(err){
//     console.log(err);
//     alert('loi roi')
// }

// handleBDB()

/*JSON stringify */
//local storage - session storage -- cookies
