import 'antd/dist/reset.css';
import './App.css';
import { Searcher } from './components/Searcher';
import { PokemonList } from './components/PokemonList';
import { Col, Spin } from 'antd';
import logo from './static/logo.svg';

import { useSelector } from 'react-redux';
import { usePokemons } from './hooks/usePokemons';

function App() {
    const { pokemonsList } = usePokemons();

    const { loading } = useSelector((state) => state.ui);
    return (
        <div className='App'>
            <Col span={4} offset={10}>
                <img src={logo} alt='pokedux' />
            </Col>
            <Col span={8} offset={8}>
                <Searcher />
            </Col>
            {loading ? (
                <Col offset={12}>
                    <Spin size='large' spinning />
                </Col>
            ) : (
                <PokemonList pokemons={pokemonsList} />
            )}
        </div>
    );
}

export default App;
