import { Row, Typography, Image, Col, Card, Divider, Badge, Carousel, Form, Input, Button as ButtonAD } from "antd";


// images
import About01 from '../assets/About01.png'
import About02 from '../assets/About02.webp'

import '../css/About.css'
import { useRef } from "react";

const {Text} = Typography



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


const About = () => {
    window.addEventListener('scroll', reveal);

    // Scroll to the reading section.
    const whatSWIMIsRef = useRef(null)
    const handleReadMoreClick = () => {
        whatSWIMIsRef.current?.scrollIntoView({behavior: 'smooth'});
    };


    return(
        <>
            {/* Welcome to SWIM */}
            <Row>
                <Col style={{textAlign:'center', marginTop:'5%',marginBottom:'4%'}} span={24}>
                    <Text className="fullstory">The Full Story</Text>
                    <br/>
                    <Text className="swimplatform">SWIM PLATFORM</Text>
                    <br/>
                    <Row justify={"center"}>
                        <Col xs={22} sm={22} md={16} lg={16} xl={12} xxl={8}>
                            <Text className="description">SWIM (Sustainable Watershed Integrated Management) is a data collaboration platform developed as a partnership between the University of Calgary and IBM, through the IBM-Alberta Centre for Advanced Studies.</Text>
                            <br/><br/><br/>
                            <Text className="description">SWIM was created with a combination of IBM (Cognos, Maximo and Db2 database management) and open source (RStudio, ARCGIS) products. The platform is hosted in the University of Calgary’s Data Centre.</Text>
                            <br/><br/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            
            {/* ABOUT */}
            <Row ref={whatSWIMIsRef} align={"middle"} justify={"space-evenly"} style={{marginTop:'25px', marginBottom:'20px'}}>
                <Col style={{marginTop:'20px', marginBottom:'20px'}} xs={22} sm={22} md={22} lg={12} xl={12} xxl={12}>
                    <Image preview={false} src={About01}/>
                </Col>
                <Col className="reveal fade-left" xs={22} sm={22} md={22} lg={10} xl={8} xxl={8}>
                    <Divider orientation="center"><Text style={{fontSize:'2vw'}}><strong>M I S S I O N</strong></Text></Divider>
                    <div style={{fontSize:'18px', textAlign:'justify', textJustify:'inter-word'}}>
                    SWIM is a data analysis and visualization tool to eliminate data silos and acquire, analyze and visualize data to make smart (data-informed) decisions, achieve consensus on ‘one version of the truth’ and increase the public’s water literacy and awareness.
                    </div>
                    
                </Col>
            </Row>
            <Row ref={whatSWIMIsRef} align={"middle"} justify={"space-evenly"} style={{marginTop:'25px', marginBottom:'20px'}}>
                <Col className="reveal fade-left" xs={22} sm={22} md={22} lg={10} xl={8} xxl={8}>
                    <Divider orientation="center"><Text style={{fontSize:'2vw'}}><strong>V I S I O N</strong></Text></Divider>
                    <div style={{fontSize:'18px', textAlign:'justify', textJustify:'inter-word'}}>
                    SWIM is a digital ‘sandbox’ where anyone interested in water’s state or water management within the Bow River Basin can access data to help make decisions with a whole watershed context.
                    <br/><br/>
                    Users are diverse in their water interests and information needs. Data providers range from automated sensors, to stakeholder groups, to individual citizens. Are you interested in contributing data or using the platform? Please contact us for more information.
                    </div>
                    
                </Col>
                <Col style={{marginTop:'20px', marginBottom:'20px'}} xs={22} sm={22} md={22} lg={12} xl={12} xxl={12}>
                    <Image preview={false} src={About02}/>
                </Col>
            </Row>

            
        </>
        
    )
}

export default About;