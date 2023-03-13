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
        <p className="contact-hero-about text">
          Nous pourrions travailler ensemble. N'hésite pas à prendre contact avec moi ici via l'email ou le formulaire.</p>
          <a className="contact-hero-mail text" href="mailto:alexandre.saintprix@gmail.com">
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
