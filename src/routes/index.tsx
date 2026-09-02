import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "~/components/layout/Footer";
import { Header } from "~/components/layout/Header";
import { Hero } from "~/features/hero";
import { Portfolio } from "~/features/portfolio";

export const Route = createFileRoute("/")({
    component: Home,
});

function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Portfolio />
            </main>
            <Footer />
        </>
    );
}
