import React, { useState, useEffect } from "react";
import { Layout, Menu, Row, Col, Upload, Input, Avatar, Select } from 'antd';
import './CompanyHead.scss';
import { MenuOutlined, UserOutlined, PlusOutlined, BellOutlined } from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
const { TextArea, Search } = Input;
const { Option } = Select;

const CompanyHead = () => {
    return(
        <Layout className="group">
            <Sider style={{ background: "none" }}>
                <MenuOutlined className="menu-icon" />
                <span className="cxopicks">CXOPICKS</span>
            </Sider>
            <Content>
                <Input.Search className="inputSty" />
                <span><BellOutlined className="bellIcon" /> </span>

                <span><Avatar style={{ marginRight: "10px" }} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></span>
                <div className="nameSty">
                    <p className="Suzanne-Gregory">Pavan Kumar Reddy</p>
                    <p className="Suzanne-Gregory">Admin</p>
                </div>
            </Content>
        </Layout>
    );
}
export default CompanyHead;