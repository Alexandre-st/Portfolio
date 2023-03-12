import { useState } from "react";
import github from "../assets/icons/github-mark.svg";
import linkedIn from "../assets/icons/iconmonstr-linkedin-3.svg";
import twitter from "../assets/icons/twitter.svg";
import Form from "../components/Form";
import { Modal } from "../components/Modal.jsx";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="container">
      <section className="contact-hero">
        <h1 className="contact-hero-title big-title">Contact</h1>
        <div className="contact-hero-content">
        <a className="hero-content-mail" href="mailto:alexandre.saintprix@gmail.com">
          alexandre.saintprix@gmail.com
        </a>
          {/* <p className="contact-hero-about text">
            J'aimerai beaucoup savoir sur quoi vous travaillez actuellement et
            comment je pourrai vous aider. Je suis actuellement à la recherche
            d'un nouveau poste et je suis ouvert à une multitude d'opportunité.
            Ma préférence serait de trouver une place dans une entreprise à
            Paris, mais je suis ouvert aux opportunités qui ne correspondant pas
            à la description précédente. Je suis un amoureux du travail, une
            personne positive qui approchera chaque tâches avec un sens du
            détail et une attention particulière pour la réalisation de
            l'objectif.
          </p> */}
          <div className="contact-hero-link">
            <a href="https://github.com/Alexandre-st" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="Lien pour accéder à mon Github" />
            </a>
            <a href="https://twitter.com/a_saintprix" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Lien pour accéder à mon Twitter" />
            </a>
            <a href="https://www.linkedin.com/in/alexandre-saint-prix" target="_blank" rel="noopener noreferrer">
              <img src={linkedIn} alt="Lien pour accéder à mon LinkedIn" />
            </a>
          </div>
        </div>
      </section>
      <Form setShowModal={setShowModal} />
      {showModal ? <Modal setShowModal={setShowModal} /> : null}
    </main>
  );
};

export default Contact;
