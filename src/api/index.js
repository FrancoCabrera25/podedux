import axios from 'axios';

export const getPokemons = () => {
    return axios
        .get('https://pokeapi.co/api/v2/pokemon?limit=150')
        .then((res) => res.data.results)
        .catch((err) => console.log(err));
};

export const getPokemonDetail = (poke) => {
    return axios
        .get(poke.url)
        .then((res) => res.data)
        .catch((err) => console.log(err));
};
