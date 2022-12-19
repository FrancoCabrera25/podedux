import 'antd/dist/reset.css';
import './App.css';
import { Searcher } from './components/Searcher';
import { PokemonList } from './components/PokemonList';
import { Col, Spin } from 'antd';
import logo from './static/logo.svg';
import { useEffect } from 'react';
import { getPokemons } from './api/index';
import { getPokemonsWithDetails, setLoading } from './actions/index';
import { useDispatch, useSelector } from 'react-redux';

function App() {
    const pokemons = useSelector((state) => state.pokemons);
    const loading = useSelector((state) => state.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchPokemons = async () => {
            dispatch(setLoading(true));
            const result = await getPokemons();
            dispatch(getPokemonsWithDetails(result));
            dispatch(setLoading(false));
        };

        fetchPokemons();
    }, []);

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
                <PokemonList pokemons={pokemons} />
            )}
        </div>
    );
}

export default App;
