import type { Variants } from 'motion/react';

const fadeIn: Variants = {
    initial: {
        y: 200,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
};

export { fadeIn };
