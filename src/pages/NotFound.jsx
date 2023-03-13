import { Link } from 'react-router-dom';
import notFound from '../assets/images/36395-lonely-404.gif';

const NotFound = () => {
  return (
    <main className="container">
      <div className="not-found">
        <img src={notFound} alt="404 image" />
        <div className="not-found-text">
          <h1 className="text">OOPS, cette page n'est pas disponible.</h1>
          <Link className="not-found-text-link text" to="/">
            Retour sur la page principale
          </Link>
        </div>
      </div>
    </main>
  );
}
 
export default NotFound;