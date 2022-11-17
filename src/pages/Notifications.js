import { Row, Typography, Col, Empty, Table } from "antd";
import { useEffect } from "react";
import '../css/Notifications.css'


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


const Notifications = () => {
    window.addEventListener('scroll', reveal);

    useEffect(()=>{
        setInterval(() => {
            reveal()
        }, 400);
    },[])

    return(
        <>
            {/* Welcome to SWIM */}
            <Row justify={"center"}>
                <Col className="temporary" style={{textAlign:'center',marginBottom:'100px', marginTop:'20px'}} span={24}>
                    <Text className="notificationsPageTitle">Notifications</Text>
                    <br/>
                    <Row justify={"center"}>
                        <Col xs={22} sm={22} md={16} lg={16} xl={12} xxl={8}>
                            <Text className="description">Make comments, like posts or follow members to get things going.</Text>
                        </Col>
                    </Row>
                </Col>
                
                <Col className="temporary reveal fade-bottom" style={{textAlign:'center',marginBottom:'37%'}} xs={23} sm={23} md={23} lg={22} xl={19} xxl={16}>
                    <Table
                        style={{
                            marginTop: 8,
                        }}
                        columns={[
                            {
                                title: 'Title',
                                dataIndex: 'title',
                                key: 'title',
                                responsive: ['lg']
                            },
                            {
                                title: 'Sender',
                                dataIndex: 'sender',
                                key: 'sender',
                            },
                            {
                                title: 'Actions',
                                dataIndex: 'actions',
                                key: 'actions',
                                
                            },
                        ]}
                    />
                </Col>
            </Row> 
        </>
        
    )
}

export default Notifications;