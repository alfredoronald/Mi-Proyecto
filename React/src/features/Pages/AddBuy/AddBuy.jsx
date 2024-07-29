import React from 'react'
import NavBar from '../../../Components/NavBar/NavBar'
import './AddBuy.css'
import buyAdd from '../../../assets/buy-add.png'
import { Button } from '../../../Components/Button/Button'

const AddBuy = () => {
  return (
    <body className='fondo'>
        <div className="header-buy">
            <NavBar/>
            <section className='zone-buy'>
                <div>
                  <img src={buyAdd} alt="Añadir Compra" />
                  <h1>Tu carrito parace vacio</h1>
                  <p>Agregue articulos a su carrito</p>
                  <Button>Añadir compra</Button>
                </div>
                
            </section>
        </div>
    </body>
  )
}

export default AddBuy