import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Leagues from './Leagues';

const Nav = () => (
  <>
    <header>
      <h1 style={{ color: '#fff' }}>All Leagues</h1>
      <nav>
        <Link to="/">All leagues</Link>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<Leagues />} />
    </Routes>
  </>
);

export default Nav;
