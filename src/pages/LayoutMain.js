import { Outlet, Link } from "react-router-dom";
import {Col, Layout, Menu, Row, Typography, Affix, Image, Divider, message } from 'antd';
import '../css/Layout_.css';
import {UserOutlined, BellOutlined, UnorderedListOutlined} from '@ant-design/icons';

import SWIM_LOGO from '../assets/SWIM-Logo.webp'
import { height } from "@mui/system";
import { useEffect, useState } from "react";

const { Header, Content, Footer } = Layout;
const {Text} = Typography;

const itemsLoggedIn = [
    {key:"Home", label:(<Link style={{fontSize:'16px'}} to={'/'}>Home</Link>)},
    {key:"Dashboard",label:<Link style={{fontSize:'16px'}} to={'/dashboard'}><Text style={{fontWeight:'bold'}}>My Dashboard</Text></Link>},
    {key:"More", label:"More", 
        children:[  {key:"Help", label:<Link to={'/help'}>Help</Link>},
                    {key:"Contact", label:<Link to={'/contact'}>Contact</Link>},
                    {key:"About", label:<Link to={'/about'}>About</Link>}
        ]
    }
]

const itemsNotUser = [
  {key:"Home", label:(<Link style={{fontSize:'16px'}} to={'/'}>Home</Link>)},
  {key:"Signup",label:<Link style={{fontSize:'16px'}} to={'/signup'}><Text style={{fontWeight:'bold'}}>Login/Signup</Text></Link>},
  {key:"More", label:"More", 
      children:[  {key:"Help", label:<Link to={'/help'}>Help</Link>},
                  {key:"Contact", label:<Link to={'/contact'}>Contact</Link>},
                  {key:"About", label:<Link to={'/about'}>About</Link>}
      ]
  }
]

const userItems = [
    // {key:"Profile", label:(<Link style={{fontSize:'16px'}} to={'/'}>Home</Link>)}
    {key:"Notifications", label:<Link to={'/notifications'}><BellOutlined style={{fontSize:'20px'}}/></Link>},
    {key:"Profile", label:<UserOutlined style={{fontSize:'20px'}}/>, 
        children: [ {key:"Account", label:<Link to={'/profile'}>Profile</Link>},
                    {type:'divider'},
                    // {key:"Logout", label:<Link onClick={()=>message.success("Logged-out Successfully!")}>Logout</Link>}
                    {key:"Logout", label:<Link onClick={()=>window.location="https://swim-watershed.ucalgary.ca/cgi-bin/app.cgi/logout"}>Logout</Link>}
        ]
    },
]

const LayoutMain = () => {
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
          setIsAuthorized(data.user[0]?.authorized)
        });
  },[])

  return (
    <>
      <Layout className="layout" style={{backgroundColor:"white"}}>
        <Affix>
          <Row style={{backgroundColor:'white', height:'70px'}} align="middle" justify="center">
            <Col xs={{span:10,order:2}} sm={{span:12,order:2}} md={{span:5,order:1}} lg={6} xl={5} xxl={8} order={1}>
                  <Image preview={false} src={SWIM_LOGO}></Image>              
            </Col>
            <Col xs={{span:4,order:1}} sm={{span:2,order:1}} md={{span:10,order:2}} lg={{span:10,order:2}} xl={{span:8,order:2}} xxl={{span:8, order:2}}>
                  <Menu
                      
                      theme="light"
                      mode="horizontal"
                      defaultSelectedKeys={window.location.href.split("/").pop()?window.location.href.split("/").pop():"Home"}
                      items={isAuthorized?itemsLoggedIn:itemsNotUser}
                      overflowedIndicator={<UnorderedListOutlined />}
                  />
            </Col>
            {isAuthorized &&
              <Col xs={{span:8,order:3}} sm={{span:10,order:3}} md={{span:5,order:3}} lg={{span:4,order:3}} xl={{span:4,order:3}} xxl={{span:4,order:3}}>
                    <Menu
                        theme="light"
                        mode="horizontal"
                        selectedKeys="noSelectedKeys!"
                        items={userItems}
                        
                    />
              </Col>
            }
          </Row>
        </Affix>
            
        

        <Content>
          <Outlet/>
        </Content>
        
        <Footer style={{padding:'5vh 5vh 1vh 5vh', backgroundColor:'black'}}>
          <Row justify={"center"}>
            <Col xs={22} sm={22} md={22} lg={22} xl={18} xxl={16}>
              <Row>
                <Col xs={24} sm={24} md={7} lg={7} xl={7} xxl={7}>
                  <Text className="footerLinks" style={{color:'white'}}>IBM Centre for Advanced Studies</Text>
                </Col>
                <Col xs={24} sm={24} md={7} lg={7} xl={7} xxl={7}>
                  <Text className="footerLinks" style={{color:'white'}}>Contact</Text>
                </Col>
                <Col xs={24} sm={24} md={7} lg={7} xl={7} xxl={7}>
                  <Text className="footerLinks" style={{color:'white'}}>Privacy Policy</Text>
                </Col>
              </Row>
              <Row>
                <Col xs={24} sm={24} md={7} lg={7} xl={7} xxl={7}>
                  <Text className="footerLinks" style={{color:'white'}}>University of Calgary</Text>
                </Col>
                <Col xs={24} sm={24} md={7} lg={7} xl={7} xxl={7}>
                  <Text className="footerLinks" style={{color:'white'}}>Our Partners</Text>
                </Col>
                <Col xs={24} sm={24} md={7} lg={7} xl={7} xxl={7}>
                  <Text className="footerLinks" style={{color:'white'}}>Cookies Disclaimer</Text>
                </Col>
              </Row>
              <Row style={{marginTop:'5vh'}}>
                <Text style={{color:'white'}}>© 2023 SWIM Platform | University of Calgary</Text>
              </Row>
            </Col>
          </Row>
        </Footer>
        
      </Layout>

    </>
  )
};

export default LayoutMain;