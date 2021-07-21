import React, { useEffect, useState } from 'react';
import { Input, Button, message } from 'antd';
//import {useState} from "react";
import { UserOutlined } from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import "antd/dist/antd.css";
import "./Login.css"
import human from "./human_jump.jpg"
import { Row, Col } from 'antd';
const Login = () => {
    const [disable1,setDisable] = useState(true);
    const [name,setName] = useState();
    const [password, setPassword] = useState();
    
    const onChange1 = (e) => {
        if ("username" == e.target.name){
            setName(e.target.value);
        } else {
            setPassword(e.target.value);
        }
        if (name && e.target.name == "password" || "username" == e.target.name && password ){
            if (e.target.value.length == 0){
                setDisable(true);
            }else {
            setDisable(false);
            }
        }
    }
    const onSubmit = () => {
        if (name == "hruday@gmail.com" && password == "hruday123"){
            message.success('successfully logged in');
            window.location.href = '/dashboard'
        } else {
            //alert("password incorrect");
            message.error('password or username is incorrect');
        }
    }
    console.log(disable1,'disable1');
    return (
        <div><div style={{ margin: "50px auto", padding: "50px 75px", backgroundColor: "#f6fbfd", height: "300px", width: "450px", borderRadius: "10px"}}>
            <Row>
            <Col span={12}>
            <img src={human} alt="human" style={{width:"100px"}}/>
            </Col>
            <Col span={12}>
        <h2>USER LOGIN</h2>
        <Input size="large" name="username" onChange={onChange1} placeholder="enter username" prefix={<UserOutlined />} allowClear/>
        <br />
        <br />

        <Input.Password
            prefix={<UserOutlined />}
            placeholder="enter password" 
            name="password"
            size="large"
            onChange={onChange1}
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
        <br />
        <br />
        <Button className="LoginButton" type="primary" disabled={disable1} onClick={onSubmit}>
            LOGIN
        </Button> 
        </Col>
        </Row>  
    </div>
    </div>)
}
export default Login;