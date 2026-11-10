import { ErrorComponent, Link, useRouter, type ErrorComponentProps } from '@tanstack/react-router';

const ErrorPage = ({ error }: ErrorComponentProps) => {
    const router = useRouter();

    return (
        <main className="container">
            <h1>Une erreur est survenue.</h1>
            <ErrorComponent error={error} />
            <button type="button" onClick={() => void router.invalidate()}>
                Réessayer
            </button>
            <Link to="/">Retour sur la page principale</Link>
        </main>
    );
};

export default ErrorPage;
