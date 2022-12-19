import { Button } from 'antd';
import { StarOutlined, StarFilled } from '@ant-design/icons';
export const StartButton = ({ isFavorite, onClick }) => {
    const icon = isFavorite ? <StarFilled /> : <StarOutlined />;

    return <Button icon={icon} onClick={onClick} />;
};
