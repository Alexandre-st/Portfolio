import { StartClient } from '@tanstack/react-start/client';
import { StrictMode, startTransition } from 'react';
import { hydrateRoot } from 'react-dom/client';

// 404.html est le shell SPA : il ne contient que la mise en page, la page introuvable est rendue
// côté client. L'écart d'hydratation y est attendu, React régénère l'arbre sans le signaler.
const isSpaShell = document.body.hasAttribute('data-spa-shell');

startTransition(() => {
    hydrateRoot(
        document,
        <StrictMode>
            <StartClient />
        </StrictMode>,
        isSpaShell ? { onRecoverableError: () => {} } : undefined,
    );
});
