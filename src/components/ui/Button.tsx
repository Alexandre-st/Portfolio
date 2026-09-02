import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "~/lib/cn";

type Variant = "primary" | "ghost";

type ButtonProps = {
    variant?: Variant;
    children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ variant = "primary", className, children, ...rest }: ButtonProps) {
    return (
        <button className={cn("button", `button--${variant}`, className)} {...rest}>
            {children}
        </button>
    );
}
