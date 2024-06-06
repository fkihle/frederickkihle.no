import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactButton from './components/ContactButton';
import { Footer } from './components/Footer';
import Header from './components/Header';
import CommercialPage from './pages/CommercialPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import MusiciansPage from './pages/MusiciansPage';
import NotFound from './pages/NotFound';
import PortraitPage from './pages/PortraitPage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <BrowserRouter>
    
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/commercial" element={<CommercialPage />} />
        <Route path="/portrait" element={<PortraitPage />} />
        <Route path="/musicians" element={<MusiciansPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ContactButton />

      <Footer />
    </BrowserRouter>
  );
}

export default App;

