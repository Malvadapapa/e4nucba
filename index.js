
const searchedPokemon = async () => {
const respPokemon = await fetchPokemons()
console.log(respPokemon)

let pokeObjeto = {
    id:respPokemon.id,
    name:respPokemon.name,
    altura:`${respPokemon.height/10}`

}
console.log(pokeObjeto)
return respPokemon
}

const init = () =>{
form.addEventListener('submit',(e) =>{
    e.preventDefault()
    searchedPokemon()
})
}
init()