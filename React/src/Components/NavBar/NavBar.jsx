import { Link } from 'react-router-dom';
import './NavBar.css'
import { useState } from 'react'

export default function NavBar () {
  const param = window.location.pathname;
  const [setHover] = useState(param);

  const handleHover = (param) => setHover(param); 

  return (
    <header className="header">
      <a href="/" className="logo">
        {' '}
        Sweet Dreams
      </a>

      <nav className="navbar">
        <ul>
          
          <li>
            <Link
              to={"/inicio"}
              onClick={() => handleHover("/inicio")}
            >
              Inicio
            </Link>
          </li>
    
          <li>
            <Link
              to={"/"}
              onClick={() => handleHover("/")}
            >
              Producto
            </Link>
          </li>
      
          <li>
            <Link
              to={"/cuenta"}
              onClick={() => handleHover("/cuenta")}
            >
              Cuenta
            </Link>
          </li>
        
          <li>
            <Link
              to={"/"}
              onClick={() => handleHover("/")}
            >
              Carrito
            </Link>
          </li>
         
        </ul>
      </nav>
    </header>
  )
}
