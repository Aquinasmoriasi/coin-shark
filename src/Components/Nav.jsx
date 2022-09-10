import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cryptos from './Cryptos';
import Details from './Details';

const Nav = () => (
  <>
    <header>
      <nav />
    </header>
    <Routes>
      <Route path="/" element={<Cryptos />} />
      <Route path="/Details/:id" element={<Details />} />
    </Routes>
  </>
);

export default Nav;
