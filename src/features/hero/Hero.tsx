import { motion } from "motion/react";
import { Button } from "~/components/ui/Button";
import { Container } from "~/components/ui/Container";
import { fadeInUp, staggerContainer } from "~/lib/motion";

export function Hero() {
    return (
        <Container as="section" className="hero">
            <motion.div
                className="hero__content"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                <motion.p className="hero__eyebrow" variants={fadeInUp}>
                    Front-end developer
                </motion.p>
                <motion.h1 className="hero__title" variants={fadeInUp}>
                    I design and build calm, accessible interfaces.
                </motion.h1>
                <motion.p className="hero__lead" variants={fadeInUp}>
                    Selected work below — from design systems to production React apps.
                </motion.p>
                <motion.div className="hero__actions" variants={fadeInUp}>
                    <Button variant="primary">View work</Button>
                    <Button variant="ghost">Get in touch</Button>
                </motion.div>
            </motion.div>
        </Container>
    );
}
