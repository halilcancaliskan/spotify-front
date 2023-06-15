import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ResourceList from './components/ResourceList';
import NotFound from './components/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resources" element={<ResourceList />} />
      <Route path="/notfound" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
