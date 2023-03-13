import { Link } from "react-router-dom";

const MentionsLegales = () => {
  return (
    <main className="container">
      <h1 className="big-title">Mentions Légales</h1>
      <section className="mentions">
        <div className="mentions-container">
          <p className="text">
            <b>Alexandre Saint-Prix</b> s'efforce de fournir des informations
            aussi précises que possible au sujet de son portfolio. Toutefois, il
            ne pourra être tenu responsable des oublis, des inexactitudes ou des
            résultats qui pourraient être obtenus par un usage inapproprié de
            ces informations.
          </p>
          <p className="text">
            Pour permettre aux visiteurs de profiter au mieux des informations
            mises à disposition, Alexandre Saint-Prix peut être amené à
            proposer, à travers des liens hypertexte, de consulter des sites
            spécialisés dans un contexte précis, sans pour autant pouvoir
            garantir le contrôle des informations délivrées sur le site en
            question.
          </p>
        </div>
      </section>
      <section className="mentions">
        <h2 className="little-title">Présentation</h2>
        <div className="mentions-container">
          <p className="text"><b>Nom : </b>Alexandre Saint-Prix</p>
          <p className="text"><b>Numéro : </b>07.61.44.34.40</p>
          <p className="text"><b>Localisation : </b>Paris</p>
        </div>
      </section>
      <section className="contact">
        <h3 className="little-title">Contact</h3>
        <div className="mentions-container">
          <p className="text">
            Un espace interactif (possibilité de poser des questions dans
            l’espace{" "}
            <Link to="/contact" className="nav-link" style={{ display: "inline-block" }}>
              CONTACT
            </Link>{" "}
            ) est à la disposition des utilisateurs.
          </p>
        </div>
      </section>
      <section className="mentions">
        <h4 className="little-title">
          Propriété intellectuelle et contrefaçons
        </h4>
        <div className="mentions-container">
          <p className="text">
            Alexandre Saint-Prix est propriétaire des droits de propriété
            intellectuelle et détient les droits d'usage sur tous les éléments
            accessibles sur le site, notamment les textes, les images et logos.
          </p>
          <p className="text">
            Toutes reproductions, représentations, modifications, publications,
            adaptations de tout ou partie des éléments du site, quel que soit le
            moyen ou le procédé utilisé, est interdite, sauf autorisation écrite
            préalable d'<b>Alexandre Saint-Prix</b>.
          </p>
        </div>
      </section>
      <section className="mentions">
        <h4 className="little-title">Gestion des données personnelles</h4>
        <div className="mentions-container">
          <p className="text">
            Les données à caractère personnel (tel que numéro de téléphone ou
            e-mail) éventuellement collectées sont destinées à répondre à une
            demande ou à une prise de contact de l'utilisateur.
          </p>
        </div>
      </section>
      <section className="mentions">
        <h5 className="little-title">Hébergement du site</h5>
        <div className="mentions-container">
          <p className="text">Netlify</p>
          <p className="text">San Francisco: Californie, États-Unis</p>
          <a href="https://www.netlify.com/" className="text link">
            https://www.netlify.com/
          </a>
        </div>
      </section>
    </main>
  );
};

export default MentionsLegales;
