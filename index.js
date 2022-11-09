// We will call pokemon API.
//URL, METHOD, WHAT WE NEED TO PASS 
let pokemon= null
let id= null

const pokemonImage = document.getElementById("pokemon-image")
const pokemonName = document.getElementById("pokemon-name")
const pokemonInfo = document.getElementById("pokemon-info")
const searchBox= document.getElementById("searchBox")
const button = document.getElementById("submit")

button.addEventListener("click", (e) =>{
    id=searchBox.value
    fetch( `https://pokeapi.co/api/v2/pokemon/${id}/ `, {
    method: "GET" 
}).then((res) => res.json().then( data =>{
    pokemon = data
    pokemonImage.setAttribute("src",pokemon.sprites.front_default)
    pokemonName.innerText= pokemon.name.toUpperCase().charAt(0) + pokemon.name.slice(1)
    pokemonInfo.innerHTML=  `<span id="height"> Height: ${pokemon.height}</span><br><span id="weight"> Weight: ${pokemon.weight}</span>` 
    //console.log(pokemon)
    //div1.innerHTML= pokemon.name
    //div1.innerHTML= '<img src="'+ pokemon.sprites.back_shiny+'" alt="pokemon">'
} ))
})






//console.log(data)

//data.catch(()=>console.log("data")) //This means that its working WITH THEN

//Promise(console.log("hi"))
//.then(() => console.log("Waiting for her"))
//.catch(() => console.log("Send some else"))

//Promises Catch/ Then




