import { ScriptOnce } from '@tanstack/react-router';
import { useCallback, useMemo, useSyncExternalStore } from 'react';
import type { ReactNode } from 'react';
import {
    DEFAULT_THEME,
    THEME_STORAGE_KEY,
    ThemeContext,
    isPreference,
    type ThemePreference,
} from '~/providers/themeContext';

const themeScript = `(function(){var t='${DEFAULT_THEME}';try{var s=localStorage.getItem('${THEME_STORAGE_KEY}');if(s==='light'||s==='dark'||s==='system'){t=s}}catch(e){}document.documentElement.dataset.theme=t})()`;

export const ThemeScript = () => <ScriptOnce>{themeScript}</ScriptOnce>;

const subscribe = (onChange: () => void) => {
    const observer = new MutationObserver(onChange);
    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme'],
    });
    return () => observer.disconnect();
};

const getSnapshot = (): ThemePreference => {
    const current = document.documentElement.dataset.theme;
    return isPreference(current) ? current : DEFAULT_THEME;
};

const getServerSnapshot = (): ThemePreference => DEFAULT_THEME;

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const preference = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

    const setPreference = useCallback((next: ThemePreference) => {
        document.documentElement.dataset.theme = next;
        try {
            window.localStorage.setItem(THEME_STORAGE_KEY, next);
        } catch {
            // Storage not available
        }
    }, []);

    const value = useMemo(() => ({ preference, setPreference }), [preference, setPreference]);

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
