const selectedPokemon = document.getElementById("selectedPokemon")

const pokeSearch = document.getElementById("pokeBusqueda")
const baseurl = "https://pokeapi.co/api/v2/pokemon/"
const form = document.getElementById("pokeForm")


const fetchPokemons = async () =>{
    const res = await fetch(baseurl+selectedPokemon.value)
    const data = await res.json()
     return data
}
