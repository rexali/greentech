import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import './App.css';
import Testimonials from "./pages/Testimonials";
import Gallery from "./pages/Gallery";
import Portfolio from "./pages/Portfolio";
import Events from "./pages/Events";
import About from "./pages/About";
import Services from "./pages/Services";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="events" element={<Events />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
