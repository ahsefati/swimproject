import { Row, Typography, Col, Image, Card, Button as ButtonAD, Form, Input, Select, Tag } from "antd";
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import '../css/Profile.css'

// Icons
import SettingsIcon from '@mui/icons-material/Settings';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

// Images
import userProfile3 from '../assets/userProfile3.png'
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

    // To fill data in the fields to be updated/viewed
    const [userData, setUserData] = useState({
        firstname:'',
        lastname:'',
        phone:'',
        email:'',
        image:'',
        access_level:''
    })
    const fillData = () => {
        fetch('https://swim-watershed.ucalgary.ca/cgi-bin/app.cgi/api/getUserData', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, 
            method: 'GET',
            })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setUserData({...data.user})
        });
    }

    // To Authenticate
    const [isAuthorized, setIsAuthorized] = useState(false)
    useEffect(()=>{
        fetch('https://swim-watershed.ucalgary.ca/cgi-bin/app.cgi/isAuthorized', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, 
            method: 'GET',
            }).then((response) => response.json())
            .then((data) => {
                if (!data.user[0]?.authorized){
                    window.location="https://swim-watershed.ucalgary.ca/"
                }else{
                    fillData()
                }
                setIsAuthorized(data.user[0]?.authorized)
                
            });
    },[])


    return(
        <>
            <Row justify={"space-evenly"} gutter={[0,16]} style={{marginTop:'50px', marginBottom:'20vh'}}>
                <Col className="reveal fade-left" xs={20} sm={20} md={10} lg={10} xl={6}>
                    <Card
                        cover={
                            <Row justify={"center"}>
                                <Image preview={false} height={"300px"} width={"300px"} style={{textAlign:'center'}}  src={userData?.image.startsWith("https://") ? userData?.image : userProfile3}/>
                            </Row>
                        }
                        
                    >
                        <Meta
                        
                        title={<><strong>{userData?.firstname} {userData?.lastname}</strong><br/><Row align={"middle"}><Tag style={{fontWeight:'bolder',}} color="blue">{userData?.access_level}</Tag></Row></>}
                        // description={<>
                        // DATA ANALYSIS <br/>
                        // Joined 17 Nov 2022
                        // </>}
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
                                    <Form {...layout} style={{marginTop:'30px'}} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                                        

                                        <Form.Item
                                            name={['user', 'firstname']}
                                            label="Firstname:"
                                            value={userData?.firstname}
                                            onChange={e=>setUserData(...userData, {firstname:e.target.value})}
                                            rules={[{
                                                required:true
                                            }]}
                                        >
                                            <Input defaultValue={userData?.firstname} placeholder={userData?.firstname} style={{border:'2px solid black', backgroundColor:'inherit'}} />
                                        </Form.Item>

                                        <Form.Item
                                            name={['user', 'lastname']}
                                            label="lastname:"
                                            value={userData?.lastname}
                                            onChange={e=>setUserData(...userData, {lastname:e.target.value})}
                                            rules={[{
                                                required:true
                                            }]}
                                        >
                                            <Input defaultValue={userData?.lastname} placeholder={userData?.lastname} style={{border:'2px solid black', backgroundColor:'inherit'}} />
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
                                            <Input defaultValue={userData?.email} placeholder={userData?.email} style={{border:'2px solid black', backgroundColor:'inherit'}} />
                                        </Form.Item>

                                        <Form.Item
                                            name={['user', 'phone']}
                                            label="Phone"
                                            rules={[
                                            {
                                                required: false,
                                                message: 'Please input your phone number!',
                                            },
                                            ]}
                                        >
                                            <Input
                                                defaultValue={userData?.phone}
                                                value={userData?.phone}
                                                onChange={e=>setUserData(...userData, {phone:e.target.value})}
                                                addonBefore={prefixSelector}
                                                style={{border:'2px solid black', backgroundColor:'inherit'}}
                                            />
                                        </Form.Item>
                                        
                                        {/* <Form.Item name={['user', 'access_level']} label="Acess Level">
                                            <Select
                                                style={{border:'2px solid black', backgroundColor:'inherit'}}
                                                placeholder="Select an access level"
                                                defaultValue={"dataanalysis"}
                                            >
                                                <Option value="reader">Reader</Option>
                                                <Option value="dataanalysis">Data Analysis</Option>
                                                <Option value="dataprovider">Data Provider</Option>
                                            </Select>
                                        </Form.Item> */}

                                
                                        {/* <Form.Item name={['user', 'bio']} label="Short Bio">
                                            <Input.TextArea style={{border:'2px solid black', minHeight:'5vh', backgroundColor:'inherit'}} />
                                        </Form.Item> */}
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