import { Row, Typography, Col, Image, Card, Button as ButtonAD, Form, Input, Select, Tag } from "antd";
import { useEffect } from "react";
import '../css/Profile.css'

// Images

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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


const Settings = () => {
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
            <Row justify={"space-evenly"} gutter={[0,16]} style={{marginTop:'50px', marginBottom:'30vh'}}>
                <Col className="reveal fade-right" xs={20} sm={20} md={12} lg={12} xl={12} xxl={10}>
                    <Card>
                        <Meta
                            title={<Row align={"middle"}><ArrowBackIcon style={{cursor:'pointer'}} onClick={()=>window.location.href='/profile'} /><Text style={{marginLeft:'10px'}}>Profile Settings</Text></Row>}
                        />
                                <Form {...layout} style={{marginTop:'30px'}} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                                    
                                    <Form.Item
                                            name={['user', 'username']}
                                            label="Username:"
                                            rules={[{
                                                required:true
                                            }]}
                                        >
                                            <Input defaultValue={"@ahsefati"} placeholder="@ahsefati" style={{border:'2px solid black', backgroundColor:'inherit'}} />
                                    </Form.Item>
                                    <Form.Item name={['user', 'visibility']} label="Visible to:">
                                        <Select
                                            style={{border:'2px solid black', backgroundColor:'inherit'}}
                                            placeholder="Select a visibility level"
                                            defaultValue={"dataanalysis"}
                                        >
                                            <Option value="dataprovider">No One</Option>
                                            <Option value="reader">My Followers</Option>
                                            <Option value="dataanalysis">My Followings</Option>
                                            <Option value="dataprovider">Followers and Followings</Option>
                                            <Option value="dataprovider">All SWIM Members</Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item name={['user', 'weburl']} label="Blog URL:">
                                        <Input defaultValue={"swimproject.ca/blogs/ahsefati"} placeholder="swimproject.ca/blogs/ahsefati" style={{border:'2px solid black', backgroundColor:'inherit'}} />
                                    </Form.Item>
                                    
                                    <Form.Item
                                        wrapperCol={{
                                        ...layout.wrapperCol,
                                        offset: 0,
                                        }}
                                    >
                                        <ButtonAD style={{border:'2px solid black', backgroundColor:'black', color:'white', marginTop:'10px', fontWeight:'bolder',}} htmlType="submit">
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

export default Settings;