import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="home-page-container">
      <h1>Dobrodošli na našu agenciju za nekretnine!</h1>
      <p>Ovdje možete pronaći najbolje nekretnine u gradu.</p>
      <Link to="/nekretnine">
        <button>Pregledaj nekretnine</button>
      </Link>
    </div>
  )
}

export default HomePage
