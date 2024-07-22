import React from 'react'
import NavBar from '../../../Components/NavBar/NavBar'
import './HomePage.css'
import { Button } from '../../../Components/Button/Button'

const HomePage = () => {
  return (
    <body>
      <header>
        <section className="presentation">
          <NavBar/>
          <div className="presentation-content">
            <h1>“Invierno: tu mejor excusa para lucir elegante”</h1>
            <p>
              Descubre la moda que te hace sentir única. 
              En nuestra tienda, encontrarás las últimas tendencias 
              en abrigos para mantenerte cálido y elegante durante la temporada fría
            </p>
            <Button>Comprar</Button>
          </div>
        </section>
      </header>
      <section className='products'>
        <h1>Productos</h1>
        <div className='products-content'>
          <div className="image-content">
            <img src='/src/assets/Sudaderas.jpg' alt='Sudadera' className='clothes'/>
            <p>Sudaderas</p>
          </div>
          <div className="image-content">
            <img src='/src/assets/Joggers.jpg' alt='Jogger' className='clothes'/>
            <p>Joggers</p>
          </div>
        </div>
        <div className='products-content'>
          <div className="image-content">
            <img src='/src/assets/Camisetas.jpg' alt='Camiseta' className='clothes'/>
            <p>Camisetas</p>
          </div>
          <div className="image-content">
            <img src='/src/assets/Accesorios.jpg' alt='Accesorios' className='clothes'/>
            <p>Accesorios</p>
          </div>
        </div>    
      </section>
      <footer>
        <div>
            <ul className="footer-links">
                <li><a href="#">Facebook</a></li>
                <li><a href="#s">Instagram</a></li>
                <li><a href="#s">Tiktok </a></li>
                <li><a href="#s">G-mail</a></li>
            </ul>
        </div>
        <div>
            <ul className="footer-list">
                <li><a href="#">Inicio</a></li>
                <li><a href="#s">Contactanos</a></li>
                <li><a href="#s">Acerca de </a></li>
                <li><a href="#s">Politicas de privacidad</a></li>
            </ul>
        </div>

        <p>&copy; 2024. Reservados todos los derechos</p>
      </footer>
    </body>
  )
}

export default HomePage 