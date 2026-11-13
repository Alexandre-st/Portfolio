import { useId } from 'react';

type Stroke = {
    d: string;
    delay: number;
    duration: number;
};

// Glyphes Instrument Serif italique 38px, positionnés comme dans pen/portfolio.pen
const LETTER_A =
    'M-2.36 21.92Q-2.81 21.92 -2.81 21.54Q-2.81 21.2 -2.2 21.05L-1.6 20.93Q-0.84 20.78 -0.28 20.19Q0.27 19.6 0.76 18.54L12.12 -5.21Q12.31 -5.59 12.5 -5.71Q12.69 -5.82 12.84 -5.82Q13.03 -5.82 13.17 -5.71Q13.3 -5.59 13.3 -5.21L13.72 18.88Q13.76 19.94 13.98 20.34Q14.21 20.74 14.93 20.93L15.43 21.05Q15.88 21.16 15.88 21.5Q15.88 21.92 15.24 21.92H8.97Q8.47 21.92 8.47 21.54Q8.47 21.12 9.23 21.05L9.99 20.97Q10.64 20.89 10.89 20.55Q11.13 20.21 11.13 19.37L11.06 13.48Q11.06 12.5 10.03 12.5H5.97Q4.98 12.5 4.48 13.48L2.01 18.58Q0.99 20.74 2.7 20.97L3.23 21.05Q3.8 21.12 3.8 21.5Q3.8 21.92 3.15 21.92ZM6.12 11.36H10.37Q11.02 11.36 11.02 10.71L10.94 0.34H10.75L5.78 10.71Q5.62 10.98 5.74 11.17Q5.85 11.36 6.12 11.36Z';

const LETTER_S =
    'M22.57 22.26Q21.51 22.26 20.31 22.03Q19.12 21.81 18.07 21.41Q17.03 21.01 16.42 20.48Q16.23 20.29 16.17 20.1Q16.11 19.91 16.19 19.53L17.25 13.56Q17.37 12.88 17.86 12.88Q18.32 12.88 18.32 13.64L18.36 15.12Q18.43 18.31 19.46 19.72Q20.48 21.12 22.8 21.12Q24.93 21.12 26.34 19.58Q27.74 18.04 27.74 15.46Q27.74 13.79 26.83 11.96Q25.92 10.14 24.28 8.32Q22.35 6.15 21.41 4.36Q20.48 2.58 20.48 0.6Q20.48 -0.96 21.24 -2.42Q22 -3.88 23.54 -4.85Q25.08 -5.82 27.48 -5.82Q30.78 -5.82 32.53 -4.34Q33.06 -3.92 32.91 -3.08L31.85 2.46Q31.73 3.03 31.31 3.03Q30.9 3.03 30.82 2.39L30.78 1.59Q30.63 -1.49 29.93 -3.1Q29.22 -4.72 27.13 -4.72Q25.61 -4.72 24.7 -4.03Q23.79 -3.35 23.37 -2.34Q22.95 -1.34 22.95 -0.35Q22.95 0.75 23.26 1.76Q23.56 2.77 24.3 3.89Q25.04 5.01 26.34 6.61Q28.16 8.77 29.19 10.75Q30.21 12.72 30.21 14.59Q30.21 16.83 29.2 18.56Q28.2 20.29 26.49 21.27Q24.78 22.26 22.57 22.26Z';

// Tracés au centre des lettres, dans l'ordre du geste de la main
const STROKES: Stroke[] = [
    { d: 'M-2.4 21.5 L0.2 20.6 L12.7 -5.3', delay: 0.2, duration: 0.35 },
    { d: 'M12.75 -5.3 L12.2 12 L12.5 21.3', delay: 0.6, duration: 0.35 },
    { d: 'M8.6 21.5 H14', delay: 0.95, duration: 0.12 },
    { d: 'M5.4 11.9 H11', delay: 1.12, duration: 0.2 },
    {
        d: 'M31.4 2.6 L32.1 -3.7 C30.4 -5.1 28.6 -5.3 27.3 -5.3 C24 -5.3 21.7 -2.9 21.7 0.2 C21.7 3.9 25.3 6.6 27.1 8.9 C28.6 10.8 29 12.8 29 14.9 C29 19 26 21.7 22.7 21.7 C20.4 21.7 18.3 21 16.8 20 L17.7 13.3',
        delay: 1.4,
        duration: 0.8,
    },
];

const REVEAL_DELAY = 2.2;

const VIEW_BOX = { x: -3.3, y: -6.3, width: 36.7, height: 29 };

type LogoProps = {
    animated?: boolean;
    // Sans label, le logo est décoratif (le nom est écrit à côté)
    label?: string;
};

const Logo = ({ animated = false, label }: LogoProps) => {
    const maskId = useId();
    const { x, y, width, height } = VIEW_BOX;

    return (
        <svg
            className={animated ? 'logo logo--animated' : 'logo'}
            viewBox={`${x} ${y} ${width} ${height}`}
            {...(label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true })}
        >
            {animated ? (
                <defs>
                    <mask
                        id={maskId}
                        maskUnits="userSpaceOnUse"
                        x={x}
                        y={y}
                        width={width}
                        height={height}
                    >
                        {STROKES.map((stroke) => (
                            <path
                                key={stroke.d}
                                className="logo__stroke"
                                d={stroke.d}
                                pathLength={1}
                                style={{
                                    animationDelay: `${stroke.delay}s`,
                                    animationDuration: `${stroke.duration}s`,
                                }}
                            />
                        ))}
                        <rect
                            className="logo__reveal"
                            x={x}
                            y={y}
                            width={width}
                            height={height}
                            style={{ animationDelay: `${REVEAL_DELAY}s` }}
                        />
                    </mask>
                </defs>
            ) : null}
            <g mask={animated ? `url(#${maskId})` : undefined}>
                <path className="logo__letter" d={LETTER_A} />
                <path className="logo__letter logo__letter--accent" d={LETTER_S} />
            </g>
        </svg>
    );
};

export default Logo;
