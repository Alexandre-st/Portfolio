import { Link } from '@tanstack/react-router';
import Logo from '~/components/Logo';

type BrandProps = {
    animated?: boolean;
    onClick?: () => void;
};

const Brand = ({ animated = true, onClick }: BrandProps) => {
    return (
        <Link to="/" className="brand" onClick={onClick}>
            <Logo animated={animated} />
            <span className="brand__text">
                <span className="brand__name">Alexandre Saint-Prix</span>
                <span className="brand__role text-label">Développeur front-end</span>
            </span>
        </Link>
    );
};

export default Brand;
