import { SET_POKEMONS, SET_LOADING, SET_FAVORITE } from './types';
import { getPokemonDetail } from '../api/index';
export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload,
});

export const getPokemonsWithDetails =
    (pokemons = []) =>
    async (dispatch) => {
        const pokemonsDetail = await Promise.all(
            pokemons.map((poke) => getPokemonDetail(poke))
        );
        dispatch(setPokemons(pokemonsDetail));
    };

export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload,
});

export const setFavorite = (payload) => ({
    type: SET_FAVORITE,
    payload,
});
