import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemons, getPokemonDetail } from '../api/index';
import { setLoading } from '../slices/uiSlice';
const initialState = {
    pokemons: [],
    pokemonsSearched: [],
};

export const fetchPokemonsWithDetails = createAsyncThunk(
    'pokemon/fetchPokemonsWithDetails',
    async (_, { dispatch }) => {
        dispatch(setLoading(true));
        const result = await getPokemons();
        const pokemonsDetail = await Promise.all(
            result.map((poke) => getPokemonDetail(poke))
        );
        dispatch(setPokemons(pokemonsDetail));
        dispatch(setLoading(false));
    }
);
export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload;
        },
        setFavorite: (state, action) => {
            state.pokemons = state.pokemons.map((poke) => {
                if (poke.id === action.payload) {
                    console.log('set fa');
                    return {
                        ...poke,
                        favorite: !poke.favorite,
                    };
                }
                return poke;
            });
        },
        setSearch: (state, action) => {
            const imputValue = action.payload.toLocaleLowerCase();
            state.pokemonsSearched = state.pokemons.filter((pokemon) => {
                return pokemon.name.includes(imputValue);
            });
        },
    },
});

export const { setPokemons, setFavorite, setSearch } = pokemonSlice.actions;
