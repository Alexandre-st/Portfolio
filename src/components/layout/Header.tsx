import { Link } from "@tanstack/react-router";
import { Container } from "~/components/ui/Container";

const NAV = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

export function Header() {
    return (
        <header className="header">
            <Container as="nav" className="header__nav">
                <Link to="/" className="header__brand" aria-label="Home">
                    Alexandre Saint-Prix
                </Link>
                <ul className="header__links">
                    {NAV.map((item) => (
                        <li key={item.href}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </Container>
        </header>
    );
}
