import Form from "../components/Form";

const Contact = () => {
  return (
    <main className="container">
      <section className="contact-hero">
        <h1 className="contact-hero-title">Premier contact</h1>
        <p className="contact-hero-about">
          J'aimerai beaucoup savoir sur quoi vous travaillez actuellement et comment je pourrai aider. Je suis actuellement à la recherche d'un nouveau poste et je suis ouvert à une multitude d'opportunité.
          Ma préférence serait de trouver une place dans une entreprise à Paris, mais je suis ouvert aux opportunités qui ne correspondant pas à la description précédente.
          Je suis un amoureux du travail, une personne positive qui approchera chaque tâches avec un sens du détail et une attention particulière pour la réalisation de l'objectif. 
        </p>
      </section>
     <Form />
    </main>
  );
};

export default Contact;
