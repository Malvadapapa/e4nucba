const selectedPokemon = document.getElementById("selectedPokemon")
const pokeSearch = document.getElementById("pokeBusqueda")
const baseurl = "https://pokeapi.co/api/v2/pokemon/"
const form = document.getElementById("pokeForm")
const renderCardSection = document.getElementById("printedCardsSection")

const showError = (error) =>{
    error === "" ?  alert("El imput se encuentra vacio") : alert("El numero seleccionado no existe")
}

const fetchPokemons = async () =>{
    try {
            const res = await fetch(baseurl+selectedPokemon.value)
    const data = await res.json()
     return data
    } catch {
        showError("El numero seleccionado no existe")
    }
}

