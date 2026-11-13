import { ArrowDown01Icon, ArrowUpRight01Icon } from '@hugeicons/core-free-icons';
import Button from '~/components/Button';
import { projects } from '~/data/data';

const STATS = [
    { label: 'Expérience', value: '3 ans' },
    { label: 'Projets', value: String(projects.length) },
    { label: 'Basé à', value: 'Paris, FR' },
];

const Hero = () => {
    return (
        <section className="hero" aria-labelledby="hero-title">
            <div className="hero__glow" aria-hidden="true" />
            <div className="hero__inner container">
                <p className="hero__scroll text-label" aria-hidden="true">
                    Scroll ↓
                </p>

                <h1 id="hero-title" className="hero__title text-display">
                    <span className="hero__line">Je construis des</span>
                    <span className="hero__line">
                        <em className="hero__accent text-accent">interfaces</em>{' '}
                        <span className="hero__nowrap">front-end</span>
                    </span>
                    <span className="hero__line hero__line--muted">rapides et accessibles.</span>
                </h1>

                <div className="hero__bottom">
                    <div className="hero__actions">
                        <Button to="/contact/" icon={ArrowUpRight01Icon}>
                            Me contacter
                        </Button>
                        <Button href="#projets" variant="ghost" icon={ArrowDown01Icon}>
                            Voir les projets
                        </Button>
                    </div>

                    <dl className="hero__stats">
                        {STATS.map((stat) => (
                            <div key={stat.label} className="hero__stat">
                                <dt className="text-label">{stat.label}</dt>
                                <dd className="hero__stat-value text-item-title">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};

export default Hero;
