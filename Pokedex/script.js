/**
 * @namespace data.sprites  Sprite of the returned Pokemon
 * @namespace data.sprites.other.official-artwork.front_default Other artwork.
 */

const poke_container = document.getElementById("poke-container");
const pokemon_count = 151
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}

const main_types = Object.keys(colors)

const fetchPokemon = async () => {
    for(let i =1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

const getPokemon= async (index) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${index}`
    const response = await fetch(url)
    const data = await response.json()
    createPokemonCard(data)
}

function createPokemonCard(data){
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')
    const name = data.name[0].toUpperCase() + data.name.slice(1)
    const id = data.id.toString().padStart(3,'0')
    const artWork = data.sprites.other["official-artwork"].front_default

    const poke_types = data.types.map(type => type.type.name)
    const type = main_types.find(type => poke_types.indexOf(type) > -1)
    pokemonEl.style.backgroundColor = colors[type]
    pokemonEl.innerHTML = `
                <div class="img-container">
                        <img src="${artWork}" alt="">
                </div>
                <div class="info">
                    <span class="number">#${id}</span>
                    <h3 class="name">${name}</h3>
                    <small class="type">Type: <span>${type}</span></small>
                </div>
                `

    poke_container.appendChild(pokemonEl)
}

fetchPokemon()