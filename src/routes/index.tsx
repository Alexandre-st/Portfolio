import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
    component: Home
});

function Home() {
    return (
        <main className="main">
            <h1>Hello Tanstack Start !!</h1>
        </main>
    );
}