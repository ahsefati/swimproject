import {Link } from "react-router-dom";
import { Row, Typography, Image, Col, Card, Divider, Badge } from "antd";

// Icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from "@mui/material/Button";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import InfoIcon from '@mui/icons-material/Info';

// animations
import Grow from '@mui/material/Grow';

// images
import SprayLake from '../assets/SprayLakes.jpg'
import CastleMountain from '../assets/CastleMountain.webp'
import ArethusaCirque from '../assets/ArethusaCirque.webp'

import '../css/Home.css'
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

const Home = () => {
    window.addEventListener('scroll', reveal);

    // Scroll to the reading section.
    const whatSWIMIsRef = useRef(null)
    const handleReadMoreClick = () => {
        whatSWIMIsRef.current?.scrollIntoView({behavior: 'smooth'});
    };

    return(
        <>
            {/* Welcome to SWIM */}
            <Row style={{backgroundImage:`url(${SprayLake})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
                <Col style={{textAlign:'center', marginTop:'7%',marginBottom:'7%'}} span={24}>
                    <Text className="welcome">Welcome to</Text>
                    <br/>
                    <Text className="welcometitle">S W I M</Text>
                    <br/>
                    <Text className="welcomeDescription"><strong>S</strong>ustainable <strong>W</strong>atershed <strong>I</strong>ntegrated <strong>M</strong>anagement</Text>
                    <br/>
                    <Button style={{backgroundColor:'inherit', fontWeight:'bold', marginTop:'20px', marginRight:'20px'}} startIcon={<AccountCircleIcon />} variant="contained">Signup</Button>
                    <Button onClick={handleReadMoreClick} style={{backgroundColor:'inherit', marginTop:'20px'}} variant="contained" startIcon={<KeyboardDoubleArrowDownIcon/>}>Read More</Button>
                </Col>
            </Row>
            
            {/* WHAT IS SWIM? */}
            <Row ref={whatSWIMIsRef} align={"middle"} justify={"space-evenly"} style={{marginTop:'25px', marginBottom:'20px'}}>
                <Col className="reveal fade-left" xs={22} sm={22} md={22} lg={10} xl={8} xxl={8}>
                    <Divider orientation="left"><Text style={{fontSize:'2vw'}}><strong>WHAT IS SWIM?</strong></Text></Divider>
                    <div style={{fontSize:'18px', textAlign:'justify', textJustify:'inter-word'}}>
                        SWIM pools together data from multiple sources — sensors, scientists, and citizens — to create an accessible information reservoir that will support improved watershed science, policy and management across Canada.
                        <br/><br/>
                        It uses digital elevation models (DEMs) as its base layer to electronically represent the terrain of the Bow River watershed and its sub-basins. A variety of feature layers, such as roads, rivers, lakes and irrigation canals, land cover, basin assets (weather and gauging stations) and outputs of analyses are included.
                        <br/><br/>
                        We have incorporated historic data, in some cases extending back over 100 years, from government databases and archives. We have enabled access to a large variety of data sources from Advancing Canadian Wastewater Assets (ACWA), which serves as a wide range of data types to prototype data acquisition and visualization.
                    </div>
                    
                </Col>
                <Col style={{marginTop:'20px', marginBottom:'20px'}} className="reveal fade-right" xs={22} sm={22} md={22} lg={12} xl={10} xxl={10}>
                    <Image preview={false} src={CastleMountain}/>
                </Col>
            </Row>

            {/* WHO IS SWIM FOR? */}
            <Row justify={"center"} style={{marginTop:'50px', marginBottom:'20px'}}>
                <Col span={22}>
                    <Divider className="reveal fade-bottom" orientation="center"><Text style={{fontSize:'2vw'}}><strong>WHO IS SWIM FOR?</strong></Text></Divider>
                    <Row justify={"center"} gutter={[16,8]}>
                        <Col className="reveal fade-left" xs={22} sm={22} md={8} lg={8} xl={7} xxl={6}>
                            <Card
                                style={{
                                    minWidth:'300px',
                                    minHeight:'200px',
                                    marginTop: 16,
                                    textAlign:'center'
                                }}
                            >
                                <Meta
                                    title={<Text style={{fontSize:'20px'}}>Readers</Text>}
                                    description={<Text style={{fontSize:'18px'}}>As a Reader you can view maps, outputs of data analyses and contribute to the Forum.</Text>}
                                />
                            </Card>

                        </Col>
                        <Col className="reveal fade-bottom" xs={22} sm={22} md={8} lg={8} xl={7} xxl={6}>
                            <Card
                                style={{
                                    minWidth:'300px',
                                    minHeight:'200px',
                                    marginTop: 16,
                                    textAlign:'center'
                                }}
                            >
                                <Meta
                                    title={<Text style={{fontSize:'20px'}}>Data Providers</Text>}
                                    description={<Text style={{fontSize:'18px'}}>As a Data Provider, you have the same functions as Readers plus you can upload data to the platform.</Text>}
                                />
                            </Card>

                        </Col>
                        <Col className="reveal fade-right" xs={22} sm={22} md={8} lg={8} xl={7} xxl={6}>
                            <Card
                                style={{
                                    minWidth:'300px',
                                    minHeight:'200px',
                                    marginTop: 16,
                                    textAlign:'center'
                                }}
                            >
                                <Meta
                                    
                                    title={<Text style={{fontSize:'20px'}}>Data Analysis</Text>}
                                    description={<Text style={{fontSize:'18px'}}>As a Data Analyst, you will have 'Provider' privileges and you can download data from the platform.</Text>}
                                />
                            </Card>

                        </Col>
                    </Row>
                </Col>
            </Row>

            {/* OUR HISTORY */}
            <Row align={"middle"} justify={"space-around"} style={{marginTop:'75px', marginBottom:'20px'}}>
                <Col className="reveal fade-left" xs={22} sm={22} md={22} lg={12} xl={12} xxl={12}>
                    <Image preview={false} src={ArethusaCirque}/>
                </Col>
                <Col className="reveal fade-right" style={{height:'100%', width:'100%', backgroundColor:'#fad283', paddingTop:'1vw', paddingBottom:'1vw'}} xs={22} sm={22} md={22} lg={8} xl={8} xxl={10}>    
                    <Badge.Ribbon text="Since 2018">
                        <Row justify={"center"}>
                            <Col xs={22} sm={22} md={22} lg={16} xl={16} xxl={16}>
                                <Text style={{textAlign:'left', fontSize:'2.5vw', fontFamily:'serif', fontWeight:'bolder'}}>OUR<br/>HISTORY</Text>
                                <Col span={8}>
                                    <Divider style={{color:'white', border:'3px solid',}}/>
                                </Col>
                                <Col>
                                    <Text style={{fontSize:'18px', fontFamily:'serif'}}>
                                        SWIM is built in partnership with the University of Calgary and IBM, through the IBM Alberta Centre for Advanced Studies.
                                        <br/><br/>
                                        SWIM was created with a combination of IBM (Cognos, Maximo and Db2 database management) and open source (RStudio, ARCGIS) products. The platform is hosted in the University of Calgary’s Data Centre.
                                    </Text>
                                    <br/>
                                    <Button style={{backgroundColor:'#1890ff', fontWeight:'bold', marginTop:'20px', marginRight:'20px'}} startIcon={<InfoIcon />} variant="contained"><Link style={{color:'white'}} to={'/about'}>About</Link></Button>

                                </Col>
                            </Col>
                        </Row>
                    </Badge.Ribbon>
                </Col>
                
            </Row>
        </>
        
    )
}

export default Home;