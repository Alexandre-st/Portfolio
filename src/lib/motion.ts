import type { Variants } from "motion/react";

/**
 * Shared motion presets so animations stay consistent across the site.
 * motion/react automatically respects the user's reduced-motion setting when
 * you also render with <MotionConfig reducedMotion="user"> (see __root.tsx),
 * but keep entrance animations non-essential regardless.
 */

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: EASE_OUT },
    },
};

/** Parent that reveals children one after another. Pair with fadeInUp on children. */
export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
};

/** Sensible defaults for scroll-triggered reveals via whileInView. */
export const inViewOnce = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.3 },
} as const;
