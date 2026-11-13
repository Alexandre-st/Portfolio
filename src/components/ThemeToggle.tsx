import { ComputerIcon, Moon02Icon, Sun03Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react';
import { useTheme, type ThemePreference } from '~/providers/themeContext';

const NEXT_THEME: Record<ThemePreference, ThemePreference> = {
    light: 'dark',
    dark: 'system',
    system: 'light',
};

const THEME_LABELS: Record<ThemePreference, string> = {
    light: 'clair',
    dark: 'sombre',
    system: 'système',
};

const THEME_ICONS: Record<ThemePreference, IconSvgElement> = {
    light: Sun03Icon,
    dark: Moon02Icon,
    system: ComputerIcon,
};

const ThemeToggle = () => {
    const { preference, setPreference } = useTheme();
    const next = NEXT_THEME[preference];

    return (
        <button
            type="button"
            className="theme-toggle"
            onClick={() => setPreference(next)}
            aria-label={`Thème ${THEME_LABELS[preference]}, passer au thème ${THEME_LABELS[next]}`}
        >
            <HugeiconsIcon icon={THEME_ICONS[preference]} aria-hidden="true" />
        </button>
    );
};

export default ThemeToggle;
