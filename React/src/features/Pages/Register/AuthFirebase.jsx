import React from 'react'
import { useState } from 'react'
import appFirebase from './Credenciales'
import { getAuth,onAuthStateChanged } from 'firebase/auth'
import HomePage from '../Home/HomePage'
import Register from './Register'


const auth = getAuth(appFirebase);

function Auth() {
    const[usuario,setUsuario]=useState(null);
    onAuthStateChanged(auth, (usuarioFirebase)=>{
        if(usuarioFirebase){
            setUsuario(usuarioFirebase)
        }
        else
        {
            setUsuario(null)
        }
    })
  
    return (
     <div>
        {usuario ? <HomePage correoUsuario={usuario.email}/> : <Register/>}
     </div>
  )
}

export default Auth