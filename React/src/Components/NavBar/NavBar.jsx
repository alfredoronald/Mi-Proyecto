import { Link } from 'react-router-dom';
import './NavBar.css'
import { useState } from 'react'

export default function NavBar () {
  const param = window.location.pathname;
  const [setHover] = useState(param);

  const handleHover = (param) => setHover(param); 

  return (
    <header className="header">
      <ul className="logo">
          <Link
            to={"/inicio"}
            onClick={() => handleHover("/inicio")}
          >
            Sweet Dreams
          </Link>
      </ul>
      
      

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
              to={"/product"}
              onClick={() => handleHover("/product")}
            >
              Productos
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
              to={"/carrito"}
              onClick={() => handleHover("/carrito")}
            >
              Carrito
            </Link>
          </li>
         
        </ul>
      </nav>
    </header>
  )
}
