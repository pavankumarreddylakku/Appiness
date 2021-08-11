import React, { useEffect, useState } from 'react';
import axios from "axios";
const Dash = () => {
const[user,setUser] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(
            res => {
                setUser(res.data);
            }
        )
    }, []); 
    return(
        <div style={{ "textAlign": "left", "paddingLeft": "20px" }}>
            <h1> <span>id</span> <span style={{ "paddingLeft": "20px" }}> name</span></h1>
        {user.length ?  user.map(val => {
            return <h1><span>{val.id}</span><span style={{ "paddingLeft": "20px" }}>{ val.name } </span></h1>}) :"Loading..."}
        </div>
    );
}
export default Dash;
