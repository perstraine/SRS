import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Header from "./components/header/Header";
import MissionPage from "./pages/MissionPage";
import ServicesPage from "./pages/ServicesPage";
import SpecialistPage from "./pages/SpeciailistPage";
import WallPage from "./pages/WallPage";
import CeilingPage from "./pages/CeilingPage";
import Thanks from "./pages/Thanks";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mission" element={<MissionPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/specialist" element={<SpecialistPage />} />
          <Route path="/wallandpartition" element={<WallPage />} />
          <Route path="/suspendedceiling" element={<CeilingPage />} />
          <Route path="/thanks" element={<Thanks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
