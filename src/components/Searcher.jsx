import { Input } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../slices/pokemonSlice';
export const Searcher = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const handleSearch = ({ target }) => {
        setInput(target.value);
        dispatch(setSearch(target.value));
    };

    return (
        <Input.Search
            placeholder='Buscar...'
            style={{ marginBottom: 10 }}
            onChange={handleSearch}
            value={input}
        />
    );
};
