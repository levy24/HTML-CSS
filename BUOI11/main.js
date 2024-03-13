setTimeout(() => {
    const a = document.getElementById('title');
    a.innerText = 'PIKACHU';
    console.log(a)
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')

.then(res => {

    return res.json();
})
.then((data) =>{
    const i = document.getElementById('image');
    i.src = data.sprites.back_default;
})

.catch(res => {
    console.log(res);
})
},3000)

