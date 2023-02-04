import { Link } from "react-router-dom";
import github from "../assets/icons/github-mark.svg";
import linkedIn from "../assets/icons/iconmonstr-linkedin-3.svg";
import twitter from "../assets/icons/twitter.svg";
import Form from "../components/Form";

const Contact = () => {
  return (
    <main className="container">
      <section className="contact-hero">
        <h1 className="contact-hero-title big-title">Premier contact</h1>
        <div className="contact-hero-content">
          <p className="contact-hero-about text">
            J'aimerai beaucoup savoir sur quoi vous travaillez actuellement et
            comment je pourrai vous aider. Je suis actuellement à la recherche
            d'un nouveau poste et je suis ouvert à une multitude d'opportunité.
            Ma préférence serait de trouver une place dans une entreprise à
            Paris, mais je suis ouvert aux opportunités qui ne correspondant pas
            à la description précédente. Je suis un amoureux du travail, une
            personne positive qui approchera chaque tâches avec un sens du
            détail et une attention particulière pour la réalisation de
            l'objectif.
          </p>
          <div className="contact-hero-link">
            <a target="_blank" href="https://github.com/Alexandre-st">
              <img src={github} alt="Lien pour accéder à mon Github" />
            </a>
            <Link to="https://twitter.com/a_saintprix">
              <img src={twitter} alt="Lien pour accéder à mon Twitter" />
            </Link>
            <Link to="https://www.linkedin.com/in/alexandre-saint-prix">
              <img src={linkedIn} alt="Lien pour accéder à mon LinkedIn" />
            </Link>
          </div>
        </div>
      </section>
      <Form />
    </main>
  );
};

export default Contact;
