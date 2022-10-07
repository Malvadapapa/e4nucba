
const searchedPokemon = async () => {
const respPokemon = await fetchPokemons()
if(!selectedPokemon.value){
    showError(selectedPokemon.value)
} else{
console.log(respPokemon)
let mapedTypes = respPokemon.types.map((tipos) => {return tipos.type.name}).join(" ,")
let pokeObjeto = {
    id:respPokemon.id,
    name:respPokemon.name,
    altura:`${respPokemon.height/10} mts`,
    peso:`${respPokemon.weight/10} kg`,
    tipos: mapedTypes,
    img: `${respPokemon.sprites.other.home.front_default}`,
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
    <hr>
    <ol>
        <li>Tipo:  ${pokemonObjet.tipos}</li>
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