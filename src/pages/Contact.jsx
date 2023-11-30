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
        <div className="contact-hero-link">
          <h1 className="contact-hero-title big-title">Contact</h1>
          <div className="contact-hero-link-img">
            <a
              href="https://github.com/Alexandre-st"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="Lien pour accéder à mon Github" />
            </a>
            <a
              href="https://twitter.com/a_saintprix"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="Lien pour accéder à mon Twitter" />
            </a>
            <a
              href="https://www.linkedin.com/in/alexandre-saint-prix/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedIn} alt="Lien pour accéder à mon LinkedIn" />
            </a>
          </div>
        </div>
        <div className="contact-hero-content">
          <p className="contact-hero-about text">
            Nous pourrions travailler ensemble. N'hésite pas à prendre contact
            avec moi ici via l'email ou le formulaire.
          </p>
          <a
            className="contact-hero-mail text"
            href="mailto:alexandre.saintprix@gmail.com"
          >
            alexandre.saintprix@gmail.com
          </a>
        </div>
      </section>
      <Form setShowModal={setShowModal} />
      {showModal ? <Modal setShowModal={setShowModal} /> : null}
    </main>
  );
};

export default Contact;
