const pokemonName = document.querySelectorAll('.pokemon_name');
const pokemonNumber = document.querySelectorAll('.pokemon_number');
const pokemonImage = document.querySelectorAll('.pokemon_image')

const fetchPokemon = async (pokemon) => {
    
    const APIResponde = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = APIResponde.json();
    return data;
}

const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);

    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

}

renderPokemon('');