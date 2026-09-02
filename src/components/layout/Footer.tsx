import { Container } from "~/components/ui/Container";
import { SOCIALS } from "~/data/socials";

export function Footer() {
    return (
        <footer id="contact" className="footer">
            <Container className="footer__inner">
                <p className="footer__tagline">Let&rsquo;s build something.</p>
                <ul className="footer__socials">
                    {SOCIALS.map((social) => (
                        <li key={social.label}>
                            <a href={social.href} target="_blank" rel="noreferrer noopener">
                                {social.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </Container>
        </footer>
    );
}
