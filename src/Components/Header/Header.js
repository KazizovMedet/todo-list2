import React from 'react';
import {Link} from "react-router-dom";
import './style.css'

const Header = () => {
  return (
    <header>
      <h2>
        <Link to={'/'}>Logo</Link>
      </h2>
      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'detail'}>Detail</Link>
      </nav>
    </header>
  );
};

export default Header;