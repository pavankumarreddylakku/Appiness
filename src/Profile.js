import React from "react";
import { Layout, Menu, Row, Col, Upload, Input, Avatar, Select } from 'antd';
import { MenuOutlined, UserOutlined, PlusOutlined, BellOutlined } from '@ant-design/icons';
import "./prof.css"
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
const { TextArea, Search } = Input;
const { Option } = Select;
const Profile = () => {
 return(<div>
            <Layout>
                <Layout className="group">
                  <Sider style={{background:"none"}}>
                 <MenuOutlined className="menu-icon" style={{
                     fontSize: "20px", width: "15.3px",
                     height: "12.9px",
                     color: "#ffffff",
                     backgroundColor: "black",
                     margin:"10px 8px"}}/>
                    <span className="cxopicks">CXOPICKS</span>
                   </Sider>
                   <Content>
                      
                    <Input.Search style={{
                     width: "266px",
                     height: "30px",
                     margin: "6px 28px 6.5px 530px",
                     borderRadius: "3px",
                     border: "solid 1px #031c2b",
                     backgroundColor: "#003656",}} />
                 <span><BellOutlined style={{
                     fontSize: "24px",position:"relative",top:"10px",margin:"0px 8px 0px 0px"}}/> </span>
                 
                 <span><Avatar style={{marginRight:"10px" }}src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></span>
                 <div style={{width:"150px",float:"right",margin:"6px 0px"}}>
                    <p className="Suzanne-Gregory">Pavan Kumar Reddy</p>
                    <p className="Suzanne-Gregory">Admin</p>
                 </div>
                    </Content>
                </Layout>
                <Layout>
                <Sider className="sidenav" style={{width:"220px !important"}}>
                 <Menu theme="dark" defaultSelectedKeys={['1']} style={{ backgroundColor: "#f2f4f6"}}>
                     <Menu.Item key="1" style={{ color: "#999999"}}>Profile Details</Menu.Item>
                     <Menu.Item key="2" style={{ color: "#999999" }} >Use Case Details</Menu.Item>
                     <Menu.Item key="3" style={{ color: "#999999" }}>Pricing Details</Menu.Item>
                     <Menu.Item key="4" style={{ color: "#999999" }}>Marketing Assets</Menu.Item>
                     <Menu.Item key="5" style={{ color: "#999999" }}>Workflow Details</Menu.Item>
                 </Menu>
                </Sider>
                <Content>
                    <div className="details">
                     <p className="profilehead">Profile Details</p>
                    </div>
                 <div style={{ textAlign: "left",padding: "10px 16px 0px 24px",fontSize: "30px"}}>
                     <UserOutlined style={{
                         width: "30.9px",
                         height: "36px",
                         }}/>
                     <span className="Personal-Information">Personal Information</span>
                    </div>
                 <Row style={{padding:"24px"}}>
                     <Col>
                         <Upload
                             name="avatar"
                             listType="picture-card"
                             className="avatar-uploader"
                             showUploadList={false}
                             action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                             
                         >
                             <PlusOutlined />
                         </Upload>
                        
                     </Col>
                     <p>Upload profile pic</p>
                     <p><a>Click here</a>to choose a file</p>
                 </Row>
                 <Row style={{ padding:"0px 24px",marginBottom:"18px"}}>
                     <Col span={7}>
                         <p style={{ textAlign: "left",margin: "0px"}}>Consultang Name*</p>
                         <Input placeholder="Type Here" style={{ borderRadius: "6px", height: "40px"}}/>
                     </Col>
                 </Row>
                 <Row style={{ padding: "0px 24px", marginBottom: "18px" }}>
                     <Col span={14} style={{width:"640px"}}>
                         <p style={{ textAlign: "left", margin: "0px" }}>Bio*</p>
                         <TextArea placeholder="Type Here" rows={3} />
                     </Col>
                 </Row>
                 <Row style={{ padding: "0px 24px", marginBottom: "18px" }}>
                     <Col span={7}>
                         <p style={{ textAlign: "left", margin: "0px" }}>Cost per hour*</p>
                         
                         <Select
                             showSearch
                             style={{ borderRadius: "6px", height: "40px",width:"309px" }}
                             placeholder="Select a person"
                             optionFilterProp="children"
                         >
                             <Option value="jack">Jack</Option>
                             <Option value="lucy">Lucy</Option>
                             <Option value="tom">Tom</Option>
                         </Select>
                     </Col>
                     <Col span={7} style={{ margin: "0px 0px 0px 10px"}}>
                         <p style={{ textAlign: "left", margin: "0px" }}>Linkdin Profile</p>
                         <Input placeholder="Type Here" style={{borderRadius: "6px", height: "40px" }} />
                     </Col>
                     <Col span={7} style={{ margin: "0px 0px 0px 10px"}} >
                         <p style={{ textAlign: "left", margin: "0px" }}>Website</p>
                         <Input placeholder="Type Here" style={{borderRadius: "6px", height: "40px" }} />
                     </Col>
                 </Row>
                 <Row style={{ padding: "0px 24px", marginBottom: "18px"}}>
                     <h2>Professional information</h2>
                 </Row>
                 <Row style={{ padding: "0px 24px", marginBottom: "18px"}}>
                     <Col span={7}>
                         <p style={{ textAlign: "left", margin: "0px" }}>Company Name</p>
                         <Input placeholder="Type Here" style={{ borderRadius: "6px", height: "40px" }} />
                     </Col>
                     <Col span={7} style={{ margin: "0px 0px 0px 10px" }}>
                         <p style={{ textAlign: "left", margin: "0px" }}>Job Title</p>
                         <Input placeholder="Type Here" style={{ borderRadius: "6px", height: "40px" }} />
                     </Col>
                     <Col span={7} style={{ margin: "0px 0px 0px 10px" }}>
                         <p style={{ textAlign: "left", margin: "0px" }}>Job Period</p>
                         <Input placeholder="Type Here" style={{ borderRadius: "6px", height: "40px" }} />
                     </Col>
                     <Col span={2} style={{ margin: "0px 0px 0px 10px" }}>
                         <button className="Add-More">Add more</button>
                     </Col>
                 </Row>
                 <Row style={{ padding: "0px 24px", marginBottom: "18px" }}>
                     <Col span={7}>
                         <p style={{ textAlign: "left", margin: "0px" }}>Industry Certification </p>
                         <Input style={{ borderRadius: "6px", height: "40px" }} placeholder="Type Here" />
                     </Col>
                     <Col span={7} style={{ margin: "0px 0px 0px 10px" }}>
                         <p style={{ textAlign: "left", margin: "0px" }}>Consulting Language</p>
                         <Select
                             showSearch
                             style={{ borderRadius: "6px", height: "40px", width: "309px" }}
                             placeholder="Select a person"
                             optionFilterProp="children"
                         >
                             <Option value="jack">Jack</Option>
                             <Option value="lucy">Lucy</Option>
                             <Option value="tom">Tom</Option>
                         </Select>
                     </Col>
                  </Row>
                 <Row style={{ padding: "0px 24px", marginBottom: "18px",backgroundColor:"#fff",height:"174px" }}>
                      <Col offset={19} >
                      </Col>
                     <Col span={2} style={{ margin: "0px 20px 0px 0px" }}>
                         <button className="Add-More" style={{backgroundColor:"#fff",color:"black",border:"1px solid black",}}>Cancel</button>
                     </Col>
                     <Col span={2} style={{ margin: "0px 0px 0px 10px" }}>
                         <button className="Add-More" style={{ backgroundColor: "yellow", color: "black", border: "1px solid black", }}>Continue</button>
                     </Col>
                  </Row>
                </Content>
                </Layout>
                
            </Layout>
        </div>);
}
export default Profile;