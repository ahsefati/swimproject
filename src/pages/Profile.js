import { Row, Typography, Col, Image, Card, Button as ButtonAD, Form, Input, Select, Tag } from "antd";
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import '../css/Profile.css'

// Icons
import SettingsIcon from '@mui/icons-material/Settings';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

// Images
import userProfile from '../assets/userProfile.webp'
import userProfile2 from '../assets/userProfile2.webp'
import userProfile3 from '../assets/userProfile3.png'
import Ribbon from "antd/lib/badge/Ribbon";
import { Link } from "react-router-dom";

const {Text} = Typography
const {Meta} = Card
const {Option} = Select


const reveal = () => {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}


const Profile = () => {
    window.addEventListener('scroll', reveal);

    useEffect(()=>{
        setInterval(() => {
            reveal()
        }, 400);
    },[])

    // For contact form -- START
    const layout = {
        labelCol: {
            sm:{
                span: 24
            },
            xs:{
                span:24
            },
            md:{
                span:24
            },
            lg:{
                span:24
            },
            xl:{
                span:4
            }
        },
        wrapperCol: {
          span: 24,
        },
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select
            defaultValue={"1"}
            style={{
              width: 70, backgroundColor:'inherit'
            }}
          >
            <Option value="1">+1</Option>
            <Option value="33">+33</Option>
            <Option value="44">+44</Option>
            <Option value="49">+49</Option>
          </Select>
        </Form.Item>
    );
      
    /* eslint-disable no-template-curly-in-string */
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        
    };

    const onFinish = (values) => {
        console.log(values);
    };
    // Contact -- END


    // Disable/Enable the form
    const [formDisable, setFormDisable] = useState(true)

    return(
        <>
            <Row justify={"space-evenly"} gutter={[0,16]} style={{marginTop:'50px', marginBottom:'20vh'}}>
                <Col className="reveal fade-left" xs={20} sm={20} md={10} lg={10} xl={6}>
                    <Card
                        cover={
                            <Row justify={"center"}>
                                <Image preview={false} style={{textAlign:'center'}}  src={userProfile3}/>
                            </Row>
                        }
                        actions={[
                            <Link to={'/settings'}><SettingOutlined style={{fontSize:'1.5em'}} key="setting"/></Link>,
                            <EditOutlined key="edit" onClick={()=>setFormDisable(!formDisable)} style={{fontSize:'1.5em'}}/>,
                            
                          ]}
                    >
                        <Meta
                        
                        title={<><strong>Amirhossein Sefati</strong><br/><Row align={"middle"}><Tag style={{fontWeight:'bolder',}} color="blue">@ahsefati</Tag></Row></>}
                        description={<>
                        DATA ANALYSIS <br/>
                        Joined 17 Nov 2022
                        </>}
                        />
                    </Card>
                </Col>
                <Col className="reveal fade-right" xs={20} sm={20} md={12} lg={12} xl={12} xxl={10}>

                        <Card>
                            <Meta
                                title={ <Col span={24}>
                                            <Row align={"middle"}>
                                                <Text>Details</Text>
                                            </Row>
                                        
                                        </Col>
                                    }
                                actions={[
                                    // <SettingsIcon key={"settings"} style={{color:'#276dd9'}}><Link to={'/settings'}></Link></SettingsIcon>,
                                    
                                ]}
                            />
                                    <Form disabled={formDisable} {...layout} style={{marginTop:'30px'}} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                                        

                                        <Form.Item
                                            name={['user', 'fullname']}
                                            label="Full Name:"
                                            rules={[{
                                                required:true
                                            }]}
                                        >
                                            <Input defaultValue={"Amirhossein Sefati"} placeholder="Amirhossein Sefati" style={{border:'2px solid black', backgroundColor:'inherit'}} />
                                        </Form.Item>

                                        <Form.Item
                                            name={['user', 'email']}
                                            label="Email"
                                            rules={[
                                            {
                                                type: 'email',
                                                required: true,
                                            },
                                            ]}
                                        >
                                            <Input defaultValue="amirhossein.sefati@ucalgary.ca" placeholder="amirhossein.sefati@ucalgary.ca" style={{border:'2px solid black', backgroundColor:'inherit'}} />
                                        </Form.Item>

                                        <Form.Item
                                            name="phone"
                                            label="Phone"
                                            rules={[
                                            {
                                                required: false,
                                                message: 'Please input your phone number!',
                                            },
                                            ]}
                                        >
                                            <Input
                                                defaultValue="8253657563"
                                                placeholder="8253657563"
                                                addonBefore={prefixSelector}
                                                style={{border:'2px solid black', backgroundColor:'inherit'}}
                                            />
                                        </Form.Item>
                                        
                                        <Form.Item name={['user', 'access']} label="Acess Level">
                                            <Select
                                                style={{border:'2px solid black', backgroundColor:'inherit'}}
                                                placeholder="Select an access level"
                                                defaultValue={"dataanalysis"}
                                            >
                                                <Option value="reader">Reader</Option>
                                                <Option value="dataanalysis">Data Analysis</Option>
                                                <Option value="dataprovider">Data Provider</Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item name={['user', 'gender']} label="Gender">
                                            <Select
                                                style={{border:'2px solid black', backgroundColor:'inherit'}}
                                                placeholder="Select your gender"
                                                defaultValue={"male"}
                                            >
                                                <Option value="female">Female</Option>
                                                <Option value="male">Male</Option>
                                                <Option value="other">Other</Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item name={['user', 'bio']} label="Short Bio">
                                            <Input.TextArea style={{border:'2px solid black', minHeight:'5vh', backgroundColor:'inherit'}} />
                                        </Form.Item>
                                        <Form.Item
                                            wrapperCol={{
                                            ...layout.wrapperCol,
                                            offset: 0,
                                            }}
                                        >
                                            <ButtonAD style={{backgroundColor:'black', color:'white', marginTop:'10px', fontWeight:'bolder'}} htmlType="submit">
                                                Update
                                            </ButtonAD>
                                            
                                            
                                            
                                        </Form.Item>
                                    </Form>
                                
                        </Card>
                    
                </Col>
            </Row> 
        </>
        
    )
}

export default Profile;