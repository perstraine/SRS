import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navigation from "./pages/Navigation";
import LandingPage from "./pages/LandingPage";
import Contact from "./pages/Contact";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import SpecialistPage from "./pages/SpeciailistPage";
import WallPage from "./pages/WallPage";
import CeilingPage from "./pages/CeilingPage";
import Thanks from "./pages/Thanks";
import ImageCarousel from "./components/carousel/ImageCarousel";
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<LandingPage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="specialist" element={<SpecialistPage />} />
            <Route path="wallandpartition" element={<WallPage />} />
            <Route path="suspendedceiling" element={<CeilingPage />} />
            <Route path="thanks" element={<Thanks />} />
            <Route path="wew" element={<ImageCarousel />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
