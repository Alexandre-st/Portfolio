import { Link } from '@tanstack/react-router';
import github from '~/assets/icons/github-mark.svg';
import linkedIn from '~/assets/icons/iconmonstr-linkedin-3.svg';
import twitter from '~/assets/icons/twitter.svg';
import { FOOTER_LINKS } from '~/constants/navLinks';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container container">
                <ul className="footer-content-list">
                    {FOOTER_LINKS.map((link) => (
                        <li key={link.url} className="nav-link">
                            <Link
                                activeProps={{ className: 'active' }}
                                activeOptions={{ exact: link.url === '/' }}
                                to={link.url}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="footer-social">
                    <a
                        href="https://github.com/Alexandre-st"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={github} alt="Lien pour accéder à mon Github" />
                    </a>
                    <a
                        href="https://twitter.com/a_saintprix"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={twitter} alt="Lien pour accéder à mon Twitter" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/alexandre-saint-prix/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={linkedIn} alt="Lien pour accéder à mon LinkedIn" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
