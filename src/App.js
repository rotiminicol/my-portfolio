import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Services from "./Components/Services/Services.jsx"
import Qualification from "./Components/Qualification/Qualification.jsx";
import Testimonials from "./Components/Testimonials/Testimonials.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import ScrollUp from "./Components/Scrollup/ScrollUp.jsx";


const App = () => {
  return (
  <>
  <Header />
  
  <main className="main">
    <Home />
    <About />
    <Skills />
    <Services />
    <Qualification />
    <Testimonials />
    <Contact />
  </main>
  <Footer />
  <ScrollUp />
  </>
  );
}

export default App;
