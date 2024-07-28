import React from 'react'
import './Register.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import NavBar from '../../../Components/NavBar/NavBar';
import { Button } from '../../../Components/Button/Button';


const Register = () => {
  return (
    <body>
      <header className='header-form'> 
        <NavBar/>
        <form className='wrap'>
          <div className="form-box login">
              <h1>Registrarse</h1>
                  <div className="input-box">
                      <input type="text" placeholder='E-mail' required/>
                      <FaUser className='icon'/>
                  </div>
  
                  <div className="input-box">
                    <input type="text" placeholder='Password' required/>
                    <FaLock className='icon'/>
                  </div>
  
                  <div className="remenber-forgot">
                      <a href="#">¿Olvidaste tu contraseña?</a>
                  </div>
                  <Button>Registrarse</Button>
                  <div className="register-link">
                    <p>¿No tienes una cuenta?    <a href="">Registrarse</a></p>
                  </div>
          </div>
        </form>
      </header>

    </body>
  )
}

export default Register