import { Input, List } from "antd";
import React from "react";
import { useState } from "react";
import {Button} from "antd";

export const ComponentsD = (props) => {
    const [username,setUsername]=useState("")
    const updateUsername = (event) =>{
            setUsername(event.target.value)
    }
    const listUser= () =>{
        alert(username)
    }
    const selecionarItem= (item) =>{
        alert(item.target.id)
    }
   return  <div style={{marginTop:10,marginRight:10}}>            
            
            <div style={{display: "flex"}}><Input addonBefore="Username"placeholder="Insert your username" value={username}
            onChange={updateUsername}/>
            <Button onClick={listUser}>Display</Button>
            </div>
        <div>
            <List header="Lista de Compras" footer="Selecione os item de compras" bordered dataSource={["Café","Açúcar","Sabão"]} renderItem={(item,idx) => (<List.Item onClick={selecionarItem}id={idx}>{item}</List.Item>)}/>
        </div>
    </div>
}