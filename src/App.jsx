import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutSection from "./Component/AboutSection";
import CoreValues from "./Component/CoreValues";
import Footer from "./Component/Footer";

import ContactCTA from "./Component/GetInTouch";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import HeroSection from "./Component/hero-section";

import Testimonials from "./Component/ReviewSection";
import Services from "./Component/Services";
import StepProgress from "./Component/Steps";
import WhyChooseUs from "./Component/WhyChooseUs";
import ServiceDetail from "./Component/ServiceDetail";
import TeamSection from "./Component/Team";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main landing page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <AboutSection />
              <CoreValues />
              <Services />
              <StepProgress />
              <WhyChooseUs />
              <Testimonials />
              <TeamSection />
              <ContactCTA />
              <Footer />
            </>
          }
        />

        {/* Service details page */}
        <Route path="/service/:id" element={<ServiceDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
