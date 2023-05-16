import React from 'react';
import FormLista from './form-lista/FormLista';
import DesenhaLista from './lista/DesenhaLista';
import { useState } from 'react';
import {Link, useParams, NavLink} from "react-router-dom";
export const Cadastro = (props) => {
  const itemSelecionado = (item) => console.log(item);

  const [lista, addLista] = useState([]);
  const parametros = useParams();
  const adicionarItem = (item) => {
    addLista([...lista, item]);
  }

  return <>
            <div style={{margin: 30}}>
                <NavLink to="/" className={({active})=> active ? {background:"red"}:{}}>Login</NavLink>
                <NavLink to="/cadastro">Cadastro</NavLink>
                <NavLink to="/cadastro">Novo Cadastro</NavLink>
            </div>
            <div style={{margin:30}}><Link to="/">Logout</Link></div>
            <div style={{margin:30}}>{parametros.userId}</div>
              <FormLista adicionarCallback={adicionarItem}/>
              <DesenhaLista 
                itens={lista}
                selecionarItemCallback={itemSelecionado}>Lista Compras</DesenhaLista>
  
  </>
          
}

module.exports.Cadastro=Cadastro;
