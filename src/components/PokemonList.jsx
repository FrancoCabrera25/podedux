import { PokemonCard } from './PokemonCard';
import './PokemonList.css';
export const PokemonList = ({ pokemons = [] }) => {
    return (
        <div className='pokemonList'>
            {pokemons.map((pokemon) => (
                <PokemonCard
                    key={pokemon.name}
                    name={pokemon.name}
                    image={pokemon.sprites.front_default}
                    types={pokemon.types}
                    id = {pokemon.id}
                    favorite= {pokemon.favorite}
                />
            ))}
        </div>
    );
};

PokemonList.defaultProps = {
    pokemons: Array(10).fill(''),
};
