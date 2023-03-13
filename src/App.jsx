import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import MentionsLegales from "./pages/MentionsLegales";
import NotFound from "./pages/NotFound";
import Portfolio from "./pages/Portfolio";
import Project from "./pages/Project";
import { ScrollToTop } from "./ScrollToTop";

const App = () => {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:work" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
