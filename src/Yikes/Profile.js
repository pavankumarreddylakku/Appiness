import React,{useState,useEffect} from "react";
import { Layout, Menu, Row, Col, Upload, Input, Select } from 'antd';
import { UserOutlined, PlusOutlined } from '@ant-design/icons';
import UserIcon from "./Icons/user-o.svg";
import ProfessionalIcon from "./Icons/temp-svg.svg";
import EducationIcon from "./Icons/path-17655.svg";
import CertificateIcon from "./Icons/group-19787.svg";
import "./prof.scss"
import axios from "axios";
const {Content } = Layout;

const { TextArea} = Input;
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
                     <img src={UserIcon} className="uploadImg"/>
                        <span className="Personal-Information">Key Personal Information</span>
                    </div>
                    <div className="uploadDiv">
                            <Row className="uploadRow">
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
                                <div className="UploadContent">
                                     <p className="Upload-Profile-Pic">Upload profile pic</p>
                                     <p><a className="ClickSty">Click here</a>to choose a file</p>
                                </div>
                            </Row>
                            <Row className="rowSty">
                                <Col span={7}>
                                    <p className="inputName">Consultang Name<span className="star">*</span></p>
                                    <Input placeholder="Type Here" className="inputSty"/>
                                </Col>
                            </Row>
                            <Row className="rowSty">
                         <Col span={14} className="Biorow">
                                    <p className="inputName">Bio<span className="star">*</span></p>
                                    <TextArea placeholder="Type Here" rows={3} />
                                </Col>
                            </Row>
                            <Row className="rowStyle">
                                <Col span={7}>
                                    <p className="inputName">Cost per hour<span className="star">*</span></p>
                                    <Select
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
                                <img src={ProfessionalIcon} className="uploadImg" />
                                <h2 className="professional">Professional information</h2>
                            </Row>
                            <Row className="rowStyle">
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
                                <img src={EducationIcon} className="uploadImg" />
                                <h2 className="professional">Education information</h2>
                            </Row>
                            <Row className="rowStyle">
                                <Col span={7}>
                                    <p className="inputName">School/Degree<span className="star">*</span></p>
                                    <Input placeholder="Type Here" className="inputSty" />
                                </Col>
                                <Col span={7} className="colSty">
                                    <p className="inputName">Field of study</p>
                                    <Input placeholder="Type Here" className="inputSty" />
                                </Col>
                                <Col span={7} className="colSty">
                                    <p className="inputName">Study Period</p>
                                    <Input placeholder="Type Here" className="inputSty" />
                                </Col>
                                <Col span={2} className="colSty">
                                    <button className="Add-More">Add more</button>
                                </Col>
                            </Row>
                            <Row className="rowSty">
                                <img src={CertificateIcon} className="uploadImg" />
                                <h2 className="professional">certifications</h2>
                            </Row>
                            <Row className="rowStyle">
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
                 </div>        
                            <Row className="rowbutton">
                                <Col offset={19} >
                                </Col>
                                <Col className="CancelCol">
                                    <button className="cancel-More">Cancel</button>
                                </Col>
                                <Col  className="colSty">
                                    <button className="continue-More">Continue</button>
                                </Col>
                            </Row>
                    
                </Content>
                </Layout>
                
            </Layout>
        </div>);
}
export default Profile;