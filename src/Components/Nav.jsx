import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Leagues from './Cryptos';
import Tables from './Tables';

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
      <Route path="/" element={<Leagues />} />
      <Route path="/Tables" element={<Tables />} />
    </Routes>
  </>
);

export default Nav;