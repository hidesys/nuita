import React from 'react';
import { Navbar } from 'react-bootstrap';

import './Header.css';
import logo from './logomark_color.png';

export default function Header() {
  return (
    <Navbar fixed="top" variant="light" className="brand-navbar">
      <Navbar.Brand href="#" className="mx-auto">
        <img src={logo} alt="Nuita" height="48px" width="48px" />
      </Navbar.Brand>
    </Navbar>
  );
}
