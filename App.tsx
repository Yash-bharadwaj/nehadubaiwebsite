import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import AboutPage from './pages/About';
import Wedding from './pages/Wedding';
import Corporate from './pages/Corporate';
import PrivateEvent from './pages/PrivateEvent';
import Community from './pages/Community';
import TestimonialsPage from './pages/Testimonials';
import Gallery from './pages/Gallery';
import ContactPage from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="experience/weddings" element={<Wedding />} />
          <Route path="experience/corporate" element={<Corporate />} />
          <Route path="experience/private-events" element={<PrivateEvent />} />
          <Route path="experience/community" element={<Community />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
