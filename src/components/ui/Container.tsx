import type { ElementType, ReactNode } from "react";
import { cn } from "~/lib/cn";

type ContainerProps = {
    /** Render as a semantic element (section, main, header…). Defaults to div. */
    as?: ElementType;
    children: ReactNode;
    className?: string;
};

/** Centered, max-width content column with responsive gutters (the global `.wrapper`). */
export function Container({ as: Tag = "div", children, className }: ContainerProps) {
    return <Tag className={cn("wrapper", className)}>{children}</Tag>;
}
