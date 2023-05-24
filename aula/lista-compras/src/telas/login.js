import React from "react";
import {useNavigate} from "react-router-dom";
import { useState } from "react";

export const Login = (props) =>{

    const navigate = useNavigate();
    
    const [username,setUsername] = useState("");
    const [senha,setSenha] = useState("");

    const login =async (event)=>{
        event.preventDefault()
        const url=""

        const body={username: username, senha: senha}

        const header={
            method:"POST",
            headers:{
                "content-type": "application/json"
            }
        }
        const response = await fetch(url,header)
        if (response.status !=200) {
                navigate("/")
        }else if(response.status === 200){
            const responseJ= response.json()
            console.log(responseJ)
            
        } 
         
        navigate("/cadastro");
    }

    const updateUsername= (evt) => setUsername(evt.target.value)
    const updateSenha= (evt) => setSenha(evt.target.value)

    return <form onSubmit={login}>
        <label>
            Username:
        <input type="text" name="username" value={username} onChange={()=>updateUsername}/>
        </label>
        <label>
            Senha:
        <input type="password" name="senha" onChange={()=>updateSenha}/>
        </label>
        <input type="submit" name="login"/>
    </form>
    //<button title="Login" onClick={login}> Login</button>

}