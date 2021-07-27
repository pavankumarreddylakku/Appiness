import React,{useState,useEffect} from "react";
import { Layout, Menu, Row, Col, Upload, Input, Avatar, Select } from 'antd';
import { MenuOutlined, UserOutlined, PlusOutlined, BellOutlined } from '@ant-design/icons';
import "./prof.scss"
import axios from "axios";
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
const { TextArea, Search } = Input;
const { Option } = Select;

const Profile = () => {
    const[finalOpt,setFinalOpt] = useState([]);
    useEffect(() => {
        axios.get('https://dev-buyer-api.cxopicks.com/public/all/industries')
            .then(response => { setFinalOpt(response.data.data.industries) });
    },[]);
 return(<div>
            <Layout>
                <Layout>
                
                <Content>
                    <div className="details">
                     <p className="profilehead">Profile Details</p>
                    </div>
                    <div className="uploadParent">
                     <UserOutlined className="uploadImg"/>
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
                     <div style={{padding:"20px 0px 0px 0px"}}>
                         <p><span style={{ fontWeight: 800}}>Upload profile pic</span><br/>
                     <a>Click here</a>to choose a file</p>
                     </div>
                 </Row>
                 <Row style={{ padding:"0px 24px",marginBottom:"18px"}}>
                     <Col span={7}>
                         <p className="inputName">Consultang Name*</p>
                         <Input placeholder="Type Here" className="inputSty"/>
                     </Col>
                 </Row>
                 <Row className="rowSty">
                     <Col span={14} style={{width:"640px"}}>
                         <p className="inputName">Bio*</p>
                         <TextArea placeholder="Type Here" rows={3} />
                     </Col>
                 </Row>
                 <Row className="rowSty">
                     <Col span={7}>
                         <p className="inputName">Cost per hour*</p>
                         
                         <Select
                             showSearch
                             placeholder="Select a person"
                             optionFilterProp="children"
                         >
                             <Option value="jack">Jack</Option>
                             <Option value="lucy">Lucy</Option>
                             <Option value="tom">Tom</Option>
                         </Select>
                     </Col>
                     <Col span={7} className="colSty">
                         <p className="inputName">Linkdin Profile</p>
                         <Input placeholder="Type Here" className="inputSty"/>
                     </Col>
                     <Col span={7} className="colSty" >
                         <p className="inputName">Website</p>
                         <Input placeholder="Type Here" className="inputSty"/>
                     </Col>
                 </Row>
                 <Row className="rowSty">
                     <h2>Professional information</h2>
                 </Row>
                 <Row className="rowSty">
                     <Col span={7}>
                         <p className="inputName">Company Name</p>
                         <Input placeholder="Type Here" className="inputSty" />
                     </Col>
                     <Col span={7} className="colSty">
                         <p className="inputName">Job Title</p>
                         <Input placeholder="Type Here" className="inputSty" />
                     </Col>
                     <Col span={7} className="colSty">
                         <p className="inputName">Job Period</p>
                         <Input placeholder="Type Here" className="inputSty" />
                     </Col>
                     <Col span={2} className="colSty">
                         <button className="Add-More">Add more</button>
                     </Col>
                 </Row>
                 <Row className="rowSty">
                     <Col span={7}>
                         <p className="inputName">Industry Certification </p>
                         <Input className="inputSty" placeholder="Type Here" />
                     </Col>
                     <Col span={7} className="colSty">
                         <p className="inputName">Consulting Language</p>
                         <Select
                             showSearch
                             placeholder="Select a person"
                             optionFilterProp="children"
                         >{
                                 finalOpt.length != 0 ? finalOpt.map(val => {
                                     return <Option value={val.industry_id}>{val.industry_name}</Option>
                                 }):""
                         }
                             
                         </Select>
                     </Col>
                  </Row>
                 <Row className="rowbutton">
                      <Col offset={19} >
                      </Col>
                     <Col span={2} style={{ margin: "0px 20px 0px 0px" }}>
                         <button className="cancel-More">Cancel</button>
                     </Col>
                     <Col span={2} className="colSty">
                         <button className="continue-More">Continue</button>
                     </Col>
                  </Row>
                </Content>
                </Layout>
                
            </Layout>
        </div>);
}
export default Profile;