import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react';
import { Link, type LinkProps } from '@tanstack/react-router';
import type { ReactNode } from 'react';

type ButtonProps = {
    children: ReactNode;
    variant?: 'primary' | 'ghost';
    icon?: IconSvgElement;
} & ({ to: LinkProps['to']; href?: never } | { href: string; to?: never });

const Button = ({ children, variant = 'primary', icon, to, href }: ButtonProps) => {
    const className = `btn btn--${variant}`;
    const content = (
        <>
            {children}
            {icon ? <HugeiconsIcon className="btn__icon" icon={icon} aria-hidden="true" /> : null}
        </>
    );

    if (to) {
        return (
            <Link to={to} className={className}>
                {content}
            </Link>
        );
    }

    return (
        <a href={href} className={className}>
            {content}
        </a>
    );
};

export default Button;
