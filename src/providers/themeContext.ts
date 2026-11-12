import { createContext, useContext } from 'react';

export type ThemePreference = 'light' | 'dark' | 'system';

export const THEME_STORAGE_KEY = 'theme';
export const DEFAULT_THEME: ThemePreference = 'light';

export const isPreference = (value: string | null | undefined): value is ThemePreference =>
    value === 'light' || value === 'dark' || value === 'system';

type ThemeContextType = {
    preference: ThemePreference;
    setPreference: (preference: ThemePreference) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
};
