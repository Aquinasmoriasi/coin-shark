import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Cryptos from './Cryptos';
import Details from './Details';

const Nav = () => (
  <>
    <header>
      <nav>
        <NavLink to="/">
          <h1 style={{ color: '#fff' }}>All currencies</h1>
        </NavLink>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<Cryptos />} />
      <Route path="/Details" element={<Details />} />
    </Routes>
  </>
);

export default Nav;
