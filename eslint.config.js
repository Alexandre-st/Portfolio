import js from '@eslint/js';
import pluginRouter from '@tanstack/eslint-plugin-router';
import prettier from 'eslint-config-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
    globalIgnores([
        'portfolio-v1',
        'dist',
        '.output',
        '.tanstack',
        '.netlify',
        'src/routeTree.gen.ts',
    ]),
    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs.flat['recommended-latest'],
            reactRefresh.configs.vite,
            pluginRouter.configs['flat/recommended'],
        ],
        languageOptions: {
            globals: globals.browser,
        },
    },
    {
        // Le plugin TanStack Router gère le fast refresh des fichiers de routes
        files: ['src/routes/**/*.tsx'],
        rules: {
            'react-refresh/only-export-components': 'off',
        },
    },
    prettier,
]);
