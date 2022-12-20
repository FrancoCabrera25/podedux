import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPokemonsWithDetails } from '../slices/pokemonSlice';
export const usePokemons = () => {
    const dispatch = useDispatch();

    const { pokemons, pokemonsSearched } = useSelector(
        (state) => state.pokemonsData,
        shallowEqual
    );

    useEffect(() => {
        dispatch(fetchPokemonsWithDetails());
    }, []);

    return {
        pokemonsList: pokemonsSearched.length > 0 ? pokemonsSearched : pokemons,
    };
};
