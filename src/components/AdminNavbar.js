import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav">
      <h1 className="logo">Sklep Tu I teraz</h1>
      <div className="buttons">
        <Link to="/" className="button">Home</Link>
        <Link to="/adminpagepain" className="button">Home</Link>
        <Link to="/products" className="button">Products</Link>
        <Link to="/about" className="button">About</Link>
        <Link to="/login" className="button">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;