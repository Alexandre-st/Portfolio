/** Join truthy class names. Keeps SCSS-module usage terse: cn(styles.a, active && styles.b). */
export function cn(...classes: Array<string | false | null | undefined>): string {
    return classes.filter(Boolean).join(" ");
}
