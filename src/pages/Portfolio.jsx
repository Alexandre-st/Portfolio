// import bg from "../assets/images/projects/designo-app-design.png";
import Projects from "../components/Projects";

const Portfolio = () => {
  return (
    <div className="container">
      <h1>Portfolio</h1>
      <main>
        <Projects />
      </main>
      {/* <div className='images'>
        <div className='images-color'>
          <img src={bg} alt="BG" />
        </div>
      </div> */}
    </div>
  );
}
 
export default Portfolio;