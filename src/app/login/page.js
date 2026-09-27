"use client";
import {useState} from "react";

export default function Login() {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    return (
        <div>
            <h2>Nombre de Usuario</h2>
            <label>Usuario:
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
  alert(`Usuario: ${email}, Contraseña: ${password}`);
}}>
  Ingresar
</button>
            </div>
        
    )
}