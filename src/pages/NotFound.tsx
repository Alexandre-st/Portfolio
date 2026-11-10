import { Link } from '@tanstack/react-router';
import notFound from '~/assets/images/36395-lonely-404.gif';

const NotFound = () => {
    return (
        <main className="container not-found">
            <div className="not-found-content">
                <p className="not-found-eyebrow small-text">Erreur 404</p>
                <div className="not-found-tiles" aria-hidden="true">
                    <span className="not-found-tile">4</span>
                    <span className="not-found-tile not-found-tile-dark">0</span>
                    <span className="not-found-tile">4</span>
                </div>
                <h1 className="not-found-title middle-title">Cette page n'est pas disponible.</h1>
                <p className="not-found-text text">
                    La page que vous cherchez a été déplacée, renommée, ou n'a jamais existé.
                </p>
                <nav className="not-found-actions" aria-label="Pages principales">
                    <Link className="button button-white" to="/">
                        Accueil
                    </Link>
                    <Link className="button button-white" to="/portfolio/">
                        Portfolio
                    </Link>
                    <Link className="button button-white" to="/contact/">
                        Contact
                    </Link>
                </nav>
            </div>
            <img className="not-found-img" src={notFound} alt="" />
        </main>
    );
};

export default NotFound;
