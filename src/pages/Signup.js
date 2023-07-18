import { Row, Typography, Col, Image, Card, Button as ButtonAD, Form, Input, Select, Tag, Divider } from "antd";
import { useEffect } from "react";
import '../css/Profile.css'
import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons';

import { Outlet, Link } from "react-router-dom";


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


const Signup = () => {
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

    return(
        <>
            <Row justify={"space-evenly"} gutter={[0,16]} style={{marginTop:'50px', marginBottom:'15vh'}}>
                <Col className="reveal fade-right" xs={20} sm={20} md={12} lg={12} xl={12} xxl={10}>
                    <Card>

                        
                        <Row style={{marginBottom:'3vh'}} justify={"center"}>
                            <Text className="profiletitle" style={{marginBottom:'2vh'}}>Signup</Text>
                            <ButtonAD type="primary" style={{marginBottom:'1vh', backgroundColor:'#0077ff'}} block icon={<GoogleOutlined />} size={"large"}>Login with Google</ButtonAD>
                            <ButtonAD type="primary" style={{backgroundColor:'#3b5998'}} block icon={<FacebookOutlined />} size={"large"}>Login with Facebook</ButtonAD>
                        </Row>
                        


                        <Divider>Or complete the form below:</Divider>
                        <Row justify={"center"}>
                            <Col lg={24} xl={20} xxl={18}>
                            
                                <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                                    

                                    <Form.Item
                                        name={['user', 'fullname']}
                                        label="Full Name"
                                        rules={[{
                                            required:true
                                        }]}
                                    >
                                        <Input placeholder="Ex. Alex" style={{border:'2px solid black', backgroundColor:'inherit'}} />
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
                                        <Input placeholder="Ex. alex@myemail.com" style={{border:'2px solid black', backgroundColor:'inherit'}} />
                                    </Form.Item>

                                    <Form.Item
                                        name={['user', 'phone']}
                                        label="Phone"
                                        rules={[
                                        {
                                            required: false,
                                            message: 'Ex. Please input your phone number!',
                                        },
                                        ]}
                                    >
                                        <Input
                                            
                                            placeholder="phone number"
                                            addonBefore={prefixSelector}
                                            style={{border:'2px solid black', backgroundColor:'inherit'}}
                                        />
                                    </Form.Item>
                                    
                                    <Form.Item name={['user', 'access']} label="Acess Level">
                                        <Select
                                            style={{border:'2px solid black', backgroundColor:'inherit'}}
                                            placeholder="Select an access level"
                                            defaultValue={"reader"}
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

                                    <Form.Item
                                        name={['user', 'password']}
                                        label="password"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Please choose a password!',
                                        },
                                        ]}
                                    >
                                        <Input
                                            type="password"
                                            style={{border:'2px solid black', backgroundColor:'inherit'}}
                                        />
                                    </Form.Item>
                                    
                                    <Form.Item
                                        wrapperCol={{
                                        ...layout.wrapperCol,
                                        offset: 0,
                                        }}
                                    >
                                        <Row justify={"center"}>
                                            <Col span={24}>
                                                <ButtonAD style={{backgroundColor:'#00bd6f'}} type="primary" block size="large" htmlType="submit">
                                                    Signup
                                                </ButtonAD>
                                            </Col>
                                        </Row>

                                        <br/>
                                        <Text>Oh! Already a member? Click to {<Link to={'/login'}>Login</Link>}.</Text>
                                        
                                        
                                        
                                    </Form.Item>
                                </Form>
                            </Col>
                        </Row>
                                
                    </Card>
                </Col>
            </Row> 
        </>
        
    )
}

export default Signup;