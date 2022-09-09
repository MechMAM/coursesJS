import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <Link to="/">
        <FaHome />
      </Link>
      <Link to="/login">
        <FaUserAlt />
      </Link>
      <Link to="/login">
        <FaSignInAlt />
      </Link>
    </Nav>
  );
}
