"use client";
import {useState} from "react"

export default function Registrar (){

const[name, setName] = useState("")
const[email, setEmail] = useState("")
const[phone, setPhone] = useState("")
const[password, setPassword] = useState("")


  return (
        <div>
            <h2>Registrar</h2>
<label>Nombre:
                <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                ></input>
            </label>            
<label>Telefono:
                <input 
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                ></input>
            </label>
<label>Gmail:
                <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
            </label>
            <label>Contraseña:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
            </label>
            <button onClick={() => {
  alert(`Nombre: ${name}, Gmail: ${email}, Teléfono: ${phone}, Contraseña: ${password}`);
}}>
  Ingresar
</button>
            </div>
        
    )
}