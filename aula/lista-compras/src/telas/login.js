import React from "react";
import {useNavigate} from "react-router-dom";

export const Login = (props) =>{

    const navigate = useNavigate();
    
    const login = ()=>{
         navigate("/cadastro");
    }
    return <button title="Login" onClick={login}> Login</button>

}