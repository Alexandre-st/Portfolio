import { HashRouter, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./ScrollToTop";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import MentionsLegales from "./pages/MentionsLegales";
import NotFound from "./pages/NotFound";
import Portfolio from "./pages/Portfolio";
import Project from "./pages/Project";

const App = () => {

  return (
    <HashRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/portfolio/:work" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default App;
