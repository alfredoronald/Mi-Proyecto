import React, { useState } from 'react'
import './Register.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth'
import appFirebase from './Credenciales';
import NavBar from '../../../Components/NavBar/NavBar';
import { Button } from '../../../Components/Button/Button';
const auth = getAuth(appFirebase)



const Register = () => {

  const [registrando, setRegistrando] = useState(false)

    const functionAutentication =async(e) =>{
        e.preventDefault();
        const correo = e.target.email.value;
        const password = e.target.password.value;

        if(registrando) {
            await createUserWithEmailAndPassword(auth, correo, password)
        }
        else
        {
            try {
                await signInWithEmailAndPassword(auth, correo, password)
                
            } catch (error) {
                alert("El correo o la contraseña son incorectos")
            }
            
        }
        
    }
  return (
    <body>
      <header className='header-form'> 
        <NavBar/>
        <form className='wrap' id='form'
          onSubmit={functionAutentication}>
            <div className="form-box login">
                <h1>Registrarse</h1>
                    <div className="input-box">
                        <input type="text" placeholder='E-mail' required id='email'/>
                        <FaUser className='icon'/>
                    </div>
    
                    <div className="input-box">
                      <input type="password" placeholder='Password' required id='password'/>
                      <FaLock className='icon'/>
                    </div>
    
                    <div className="remenber-forgot">
                        <a href="#">¿Olvidaste tu contraseña?</a>
                    </div>
                    <Button>
                        {registrando ? "Registrarse" : "Inicia Sesion"}
                    </Button>
                    <div className="register-link">
                      <p>{registrando ? "Si ya tienes cuenta" : "No tienes cuenta"} <button className='btn' onClick={()=>setRegistrando(!registrando)}>{registrando ? "Inicia sesion" :"Registrate"}</button></p>
                    </div>
            </div>
          </form>
      </header>
        
    </body>
  )
}

export default Register