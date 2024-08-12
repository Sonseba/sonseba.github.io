document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('pokemon-container');
    const numOfPokemons = 151;

    async function fetchPokemonData() {
        const promises = [];
        for (let i = 1; i <= numOfPokemons; i++) {
            promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`));
        }
        const responses = await Promise.all(promises);
        const pokemons = await Promise.all(responses.map(res => res.json()));
        displayPokemons(pokemons);
    }

    function getTypeColor(type) {
        const typeColors = {
            fire: "#F08030",
            water: "#6890F0",
            grass: "#78C850",
            electric: "#F8D030",
            ice: "#98D8D8",
            fighting: "#C03028",
            poison: "#A040A0",
            ground: "#E0C068",
            flying: "#A890F0",
            psychic: "#F85888",
            bug: "#A8B820",
            rock: "#B8A038",
            ghost: "#705898",
            dragon: "#7038F8",
            dark: "#705848",
            steel: "#B8B8D0",
            fairy: "#F0B6BC"
        };
        return typeColors[type] || "#A8A878";
    }

    function displayPokemons(pokemons) {
        pokemons.forEach(pokemon => {
            const { name, types } = pokemon;
            const type = types[0].type.name;
            const card = document.createElement('div');
            card.className = 'card';
            card.style.backgroundColor = getTypeColor(type);

            card.innerHTML = `
                <img src="${pokemon.sprites.front_default}" alt="${name}">
                <div class="type">${type}</div>
                <div>${name.charAt(0).toUpperCase() + name.slice(1)}</div>
            `;
            container.appendChild(card);
        });
    }

    fetchPokemonData();
});