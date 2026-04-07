import { Link } from '@tanstack/react-router'

export function NotFound({ children }: { children?: any }) {
    return (
        <main className="">
            <div className="">
                {children || <p>The page you are looking for does not exist.</p>}
            </div>
            <div className="">
                <button onClick={() => window.history.back()} className="">
                    Go back
                </button>
                <Link to="/" className="">
                    Start Over
                </Link>
            </div>
        </main>
    )
}