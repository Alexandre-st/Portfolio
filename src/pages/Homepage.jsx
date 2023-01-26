import Me from "../assets/images/Profil_Picture.jpg";

const Homepage = () => {
  return (
    <main className="container">
      <section className="hero">
        <div className="hero-img">
          <img src={Me} alt="This is a picture of me" />
        </div>
        <div className="hero-text">
          <h1 className="hero-text-title">
            <span>Salut c’est Alexandre.</span>
            <span className="hero-text-title-span">Développeur Front-End</span>
          </h1>
          <p className="hero-text-text text">
            Je suis un développeur front-end junior à la recherche d’une
            entreprise passionnante. Je me concentre sur l’écriture accessible
            d’un code HTML, l’utilisation de pratiques modernes du CSS et
            l’écriture de code JavaScript propre. En écrivant du code
            JavaScript, j’utilise le plus souvent React, mais je peux m’adapter
            à tous les outils demandés. Je suis situé à Paris, et possède aussi
            de l’expérience en remote.
          </p>
        </div>
      </section>
      <section className="skills">
        <div className="skills-text">
          <h2 className="skills-text-title big-title">Mes compétences</h2>
          <p className="skills-text-text text">
            Du premier jour de ma formation de développeur web à maintenant,
            j'ai appris et gagné une expérience solide des standards du
            dévéloppement web. L'importance de la réutilisabilité et l'évotulité
            du code et comment l'expérience utilisatieur est primordial.
          </p>
        </div>
        <div className="skills-content">
          <ul className="skills-content-list">
            <li className="skills-content-list-li">Javascript</li>
            <li className="skills-content-list-li">React</li>
            <li className="skills-content-list-li">Git</li>
            <li className="skills-content-list-li">Git Flow</li>
            <li className="skills-content-list-li">HTML</li>
            <li className="skills-content-list-li">css</li>
            <li className="skills-content-list-li">scss</li>
            <li className="skills-content-list-li">sass</li>
            <li className="skills-content-list-li">CSS Modules</li>
            <li className="skills-content-list-li">Styled-Components</li>
            <li className="skills-content-list-li">Redux</li>
            <li className="skills-content-list-li">Node</li>
            <li className="skills-content-list-li">Express</li>
            <li className="skills-content-list-li">SQL</li>
            <li className="skills-content-list-li">MySQL</li>
            <li className="skills-content-list-li">PostgreSQL</li>
            <li className="skills-content-list-li">MongoDB</li>
            <li className="skills-content-list-li">User Experience</li>
            <li className="skills-content-list-li">Use Case</li>
            <li className="skills-content-list-li">User Stories</li>
            <li className="skills-content-list-li">Gestion de Projet</li>
            <li className="skills-content-list-li">Figma</li>

            <li className="skills-content-list-li">Opquast</li>
          </ul>
        </div>
      </section>
      <section className="work">
        <h3 className="work-title big-title">Mes Projets</h3>
      </section>
    </main>
  );
};
 
export default Homepage;