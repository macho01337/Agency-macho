import React from 'react'
import {Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <h2>Agencija za nekretnine</h2>
        <ul>
            <li><Link to="/">Početna</Link></li>
            <li><Link to="/about">O nama</Link></li>
            <li><Link to="/contact">Kontakt</Link></li>
            <li><Link to="/nekretnine">Nekretnine</Link></li>
        </ul>
    </div>
  );
};

export default Sidebar
