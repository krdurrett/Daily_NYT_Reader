import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/NavBar.scss'

const NavBar = () => {
  return (
    <nav>
      <Link to='/'>
        <h1>Daily NYT Reader</h1>
      </Link>
    </nav>
  )
}

export default NavBar