import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <header className="header">
      <a href="/" className="logo">
        {' '}
        Sweet Dreams
      </a>

      <nav className="navbar">
        <a href="/">Inicio</a>
        <a href="/">Productos</a>
        <a href="/">Carrito</a>
        <a href="/">Cuenta</a>
      </nav>
    </header>
  )
}

export default NavBar
