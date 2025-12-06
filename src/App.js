import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Hangars from './components/Hangars';
import Tensile from './components/Tensile';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TentsPage from './components/TentsPage';
import HangarsPage from './components/HangarsPage';
import TensilePage from './components/TensilePage';
import './styles/globals.css';

const HomePage = () => (
  <>
    <Hero />
    <Products />
    <Hangars />
    <Tensile />
    <Services />
    <Contact />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tents" element={<TentsPage />} />
          <Route path="/hangars" element={<HangarsPage />} />
          <Route path="/tensile" element={<TensilePage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;