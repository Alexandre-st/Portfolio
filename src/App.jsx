import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import Homepage from "./pages/Homepage";


const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
