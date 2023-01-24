import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Homepage from "./pages/Homepage";

const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
};

export default App;
