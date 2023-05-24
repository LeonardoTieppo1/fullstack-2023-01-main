import { Input } from "antd";
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
   return  <div style={{marginTop:15,marginRight:15, display: "flex",flexDirection: "row"}}>            
            <Input addonBefore="Username"placeholder="Insert your username" value={username}
            onChange={updateUsername}/>
            <Button onClick={listUser}>Display</Button>
        </div>

}