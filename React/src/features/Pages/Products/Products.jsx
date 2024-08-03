import React from 'react'
import acc_product from '../../../assets/Accesorios-img/Accesorio_pro'
import Item from '../../../Components/Item/Item'
import NavBar from '../../../Components/NavBar/NavBar'
import './Products.css'
import cam_product from '../../../assets/Camisetas-img/Camiseta_pro'
import suda_product from '../../../assets/Sudadera-img/Sudadera_pro'
import jog_product from '../../../assets/Jogger-img/Jogger_pro'

const Products = () => {
  return (
    <body>
        <header><NavBar/></header>
        <div className="Product">
            <h1>Sudaderas</h1>
            <hr/>
            <div className="Products-item">
                {suda_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
                })}
            </div>

            <div className="Products-item">
                {suda_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
                })}
            </div>
        </div>

        <div className="Product">
            <h1>Joggers</h1>
            <hr/>
            <div className="Products-item">
                {jog_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
                })}
            </div>
        </div>

        <div className="Product">
            <h1>Camisetas</h1>
            <hr/>
            <div className="Products-item">
                {cam_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
                })}
            </div>

            <div className="Products-item">
                {cam_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
                })}
            </div>
        </div>
        <div className="Product">
            <h1>Accesorios</h1>
            <hr/>
            <div className="Products-item">
                {acc_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
                })}
            </div>
        </div>
       
    </body>
  )
}

export default Products