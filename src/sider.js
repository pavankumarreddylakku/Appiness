import React, { useState, useEffect } from "react";
import { Layout, Menu, Row, Col, Upload, Input, Avatar, Select } from 'antd';
import { Link, useLocation } from "react-router-dom";
import "./sider.scss"
const { Header, Footer, Sider, Content } = Layout;
const sider = () => {
return(
<Sider className="sidenav" style={{ width: "220px !important" }}>
    <Menu theme="dark" defaultSelectedKeys={['1']} style={{ backgroundColor: "#f2f4f6" }}>
        <Menu.Item key="1">
            <Link to="/" className="menuItem">Profile Details</Link>
        </Menu.Item>
            <Menu.Item key="2">
                <Link to="/details" className="menuItem">Use Case Details</Link>
        </Menu.Item>
            <Menu.Item key="3">
                <Link to="/price" className="menuItem">Pricing Details</Link>     
        </Menu.Item>
            <Menu.Item key="4">
                <Link to="/market" className="menuItem">Marketing Assets</Link>    
        </Menu.Item>
            <Menu.Item key="5">
                <Link to="/workflow" className="menuItem"> Workflow Details</Link>
           
        </Menu.Item>
    </Menu>
</Sider>
);
}
export default sider;