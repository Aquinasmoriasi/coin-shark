import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Leagues from './Leagues';
import Table from './Table';

const Nav = () => (
  <>
    <header>
      <nav>
        <NavLink to="/">
          <h1 style={{ color: '#fff' }}>All Leagues</h1>
        </NavLink>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<Leagues />} />
      <Route path="/Table" element={<Table />} />
    </Routes>
  </>
);

export default Nav;
