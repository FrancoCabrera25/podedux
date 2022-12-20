import { StartButton } from './StartButton';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../slices/pokemonSlice';
export const PokemonCard = ({ name, image, types = [], id, favorite }) => {
    const dispatch = useDispatch();
    const typesString = types.map((item) => item.type.name).join(', ');

    const handleOnFavorite = () => {
        dispatch(setFavorite(id));
    };
    return (
        <Card
            title={name}
            extra={<StartButton isFavorite={favorite} onClick={handleOnFavorite} />}
            cover={<img src={image} alt={name} />}>
            <Meta description={typesString} />
        </Card>
    );
};
