
import { Row, Typography, Image, Col, Card, Divider, Badge, Carousel, Form, Input, Button as ButtonAD } from "antd";

// Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

// images
import SWIM_LOGO from '../assets/SWIM-Logo.webp'

import '../css/Contact.css'
import { useRef } from "react";

const {Text, Title} = Typography
const {Meta} = Card


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

const Contact = () => {
    window.addEventListener('scroll', reveal);

    // Scroll to the reading section.
    const whatSWIMIsRef = useRef(null)
    const handleReadMoreClick = () => {
        whatSWIMIsRef.current?.scrollIntoView({behavior: 'smooth'});
    };

    // For contact form -- START
    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
    };
      
    /* eslint-disable no-template-curly-in-string */
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };

    const onFinish = (values) => {
        console.log(values);
    };
    // Contact -- END

    return(
        <>
            {/* Welcome to SWIM */}
            <Row>
                <Col style={{textAlign:'left', marginTop:'3%',marginBottom:'4%'}} span={24}>
                    <Row justify={"center"}>
                        <Col span={16}>
                            <br/>
                            <Text className="sendus">SEND US A MESSAGE</Text>
                            <br/>
                            <Text className="description">Get in touch so we can start working together on SWIM Project.</Text>
                            <br/><br/>
                            Follow us on social media:
                            <br/>
                            <Row gutter={[0,8]}>
                                <FacebookIcon/><TwitterIcon/><LinkedInIcon/><InstagramIcon/>
                            </Row>
                        </Col>
                    </Row>
                    <Row justify={"center"} style={{marginTop:'10vh'}}>
                        <Col span={16}>
                            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                                <Form.Item
                                    name={['user', 'name']}
                                    label="Name"
                                >
                                    <Input style={{border:'2px solid black', backgroundColor:'inherit'}} />
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
                                    <Input style={{border:'2px solid black', backgroundColor:'inherit'}} />
                                </Form.Item>
                                
                                <Form.Item name={['user', 'subject']} label="Subject">
                                    <Input style={{border:'2px solid black', backgroundColor:'inherit'}}/>
                                </Form.Item>
                                <Form.Item name={['user', 'message']} label="Message">
                                    <Input.TextArea style={{border:'2px solid black', minHeight:'15vh', backgroundColor:'inherit'}} />
                                </Form.Item>
                                <Form.Item
                                    wrapperCol={{
                                    ...layout.wrapperCol,
                                    offset: 8,
                                    }}
                                >
                                    <ButtonAD style={{border:'2px solid black', backgroundColor:'black', color:'white', }} htmlType="submit">
                                        Submit
                                    </ButtonAD>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
            

            
        </>
        
    )
}

export default Contact;