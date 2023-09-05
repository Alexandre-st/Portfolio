const About = () => {
  return (
    <main className="container">
      <h1>Welcome to my world !</h1>
      <div
        className="badge-base LI-profile-badge"
        data-locale="fr_FR"
        data-size="large"
        data-theme="light"
        data-type="HORIZONTAL"
        data-vanity="alexandre-saint-prix"
        data-version="v1"
      >
        <a
          class="badge-base__link LI-simple-link"
          href="https://fr.linkedin.com/in/alexandre-saint-prix?trk=profile-badge"
        >
          Alexandre Saint-Prix 👨🏽💻
        </a>
      </div>
      {/* <div
        className="badge-base LI-profile-badge"
        data-locale="fr_FR"
        data-size="large"
        data-theme="light"
        data-type="HORIZONTAL"
        data-vanity="alexandre-saint-prix"
        data-version="v1"
        data-rendered="true"
        // data-uid="503064"
      >
        <a
          className="badge-base__link LI-simple-link"
          href="https://fr.linkedin.com/in/alexandre-saint-prix?trk=profile-badge"
        >
          Alexandre Saint-Prix 👨🏽💻
        </a>
        <iframe
          frameBorder="0"
          style="display: block;"
          height="266"
          width="336"
        ></iframe>
      </div> */}
    </main>
  );
};

export default About;
