import { Row, Typography, Col, Empty } from "antd";
import { useEffect } from "react";
import '../css/Help.css'


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


const Help = () => {
    window.addEventListener('scroll', reveal);

    useEffect(()=>{
        setInterval(() => {
            reveal()
        }, 400);
    },[])

    return(
        <>
            {/* Welcome to SWIM */}
            <Row>
                <Col className="temporary" style={{textAlign:'center',marginBottom:'100px', marginTop:'20px'}} span={24}>
                    <Text className="swimplatform">Help Center</Text>
                    <br/>
                    <Row justify={"center"}>
                        <Col xs={22} sm={22} md={16} lg={16} xl={12} xxl={8}>
                            <Text className="description">The documentation on how to use the website to Read, Analyze, or Provide data is going to be in this page.</Text>
                        </Col>
                    </Row>
                </Col>
                <Col className="temporary reveal fade-bottom" style={{textAlign:'center',marginBottom:'37%'}} span={24}>
                    <Empty/>
                </Col>
            </Row> 
        </>
        
    )
}

export default Help;