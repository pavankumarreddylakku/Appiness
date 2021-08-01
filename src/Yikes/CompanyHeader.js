import React, { useState, useEffect } from "react";
import { Layout, Menu, Row, Col, Upload, Input, Avatar, Select } from 'antd';
import './CompanyHead.scss';
import MenImg from "./images/img.jpg";
import { MenuOutlined, UserOutlined, PlusOutlined, BellOutlined, DownOutlined } from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
const { TextArea, Search } = Input;
const { Option } = Select;

const CompanyHead = () => {
    return(
        <Layout className="group">
            <Sider className="headerSider">
                <MenuOutlined className="menu-icon" />
                <span className="cxopicks">CXOPICKS</span>
            </Sider>
            <Content>
                <Input.Search placeholder="Search here" className="inputSty"/>
                <span><BellOutlined className="bellIcon"/></span>
                <span><Avatar style={{marginRight: "10px"}} src={MenImg} /></span>
                <div className="nameSty">
                    <div className="user">
                    <p className="Suzanne-Gregory">Pavan Kumar Reddy</p>
                    <p className="Suzanne-Gregory">Admin</p>
                    </div>
                    <div className="DownloadIcon"><DownOutlined /></div>
                </div>
                
            </Content>
        </Layout>
    );
}
export default CompanyHead;