const selectedPokemon = document.getElementById("selectedPokemon")
const pokeSearch = document.getElementById("pokeBusqueda")
const baseurl = "https://pokeapi.co/api/v2/pokemon/"
const form = document.getElementById("pokeForm")
const renderCardSection = document.getElementById("printedCardsSection")


const showError = (error) =>{
    error === "" ?  alert("El campo se encuentra vacio") : alert("El numero seleccionado no es un Pokemón valido.")
}

const fetchPokemons = async () =>{
    try {
            const res = await fetch(baseurl+selectedPokemon.value)
    const data = await res.json()
     return data
    } catch {
        showError()
    }
}

const searchedPokemon = async () => {
const respPokemon = await fetchPokemons()
if(!selectedPokemon.value){
    showError(selectedPokemon.value)
} else{

let pokeObjeto = {
    id:respPokemon.id,
    name:respPokemon.name,
    altura:`${respPokemon.height/10} mts`,
    peso:`${respPokemon.weight/10} kg`,
    tipo: respPokemon.types[0].type.name,
    img: `${respPokemon.sprites.other.dream_world.front_default}`,
    hp: respPokemon.stats[0].base_stat
}
renderPokemon(pokeObjeto)
}
}

const renderPokemon = (pokemonObjet) => {
renderCardSection.innerHTML = ` 
<div class="printedCard">

<div class="pokedataContainer">
    <h3>${pokemonObjet.name.toUpperCase()}</h3>
    <hr class="${pokemonObjet.tipo}">
    <ol>
        <li>Tipo: <span class="${pokemonObjet.tipo}"> ${pokemonObjet.tipo}</span></li>
        <li>Peso:  ${pokemonObjet.peso}</li>
        <li>Altura:  ${pokemonObjet.altura}</li>
        <li>Puntos de Vida:  ${pokemonObjet.hp}</li>
    </ol>
</div>

<div class="imgContainer">
<img src="${pokemonObjet.img}" alt=""> 
</div>

</div>
`
}

const init = () =>{
form.addEventListener('submit',(e) =>{
    e.preventDefault()
    searchedPokemon()
})
}
init()