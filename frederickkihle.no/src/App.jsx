import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CommercialPage from './components/CommercialPage';
import ContactPage from './components/ContactPage';
import { Footer } from './components/Footer';
import Header from './components/Header';
import HomePage from './components/HomePage';
import MusiciansPage from './components/MusiciansPage';
import NotFound from './components/NotFound';
import PortraitPage from './components/PortraitPage';
import ProductPage from './components/ProductPage';

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

      <Footer />
    </BrowserRouter>
  );
}

export default App;

