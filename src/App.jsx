import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Career from "./pages/Career";
import Industry from "./pages/Industry";
import Contact from "./pages/Contact";
import CurrentOpening from "./pages/CurrentOpening";
import IndustryDetail from "./pages/IndustryDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/career" element={<Career />} />
        <Route path="/career/current-opening" element={<CurrentOpening />} />
        <Route path="/industry" element={<Industry />} />
        <Route path="/industry/:industrySlug" element={<IndustryDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
