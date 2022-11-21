import { Row, Typography, Layout, Col, Skeleton, Avatar, Card, Input, Divider, Tag} from "antd";

import React from 'react';

import { useEffect, useState, useRef } from "react";
import '../css/ViewDiscussion.css'
import { height } from "@mui/system";

import { CommentOutlined, HeartOutlined, RightCircleFilled, } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const {Text} = Typography
const {Meta} = Card
const {Search} = Input



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

const discussionsDataMain = [];
for (let i = 0; i < 19; i++) {
    let src = "https://joeschmoe.io/api/v1/random"
    discussionsDataMain.push({
        id: i.toString(),
        title: `${i} - Discussion Title`,
        author: '@ahsefati',
        avatar: <Avatar src={src} />,
        shortDescription: `This is the description of the the discussion ${i}`,
        likes: Math.floor(Math.random() * 99),
        comments: Math.floor(Math.random() * 20)
    });
}

const ViewDiscussion = () => {


    const [discussionsData, setDiscussionsData] = useState(discussionsDataMain)

    const handleSearch = (textToSearch) => {
        const resultsOfSearch = discussionsDataMain.filter(discussionData=>discussionData.title.toLowerCase().includes(textToSearch.toLowerCase()) || 
                                                                            discussionData.author.toLowerCase().includes(textToSearch.toLowerCase()) || 
                                                                            discussionData.shortDescription.toLowerCase().includes(textToSearch.toLowerCase()))
        setDiscussionsData([...resultsOfSearch])
        
    }


    window.addEventListener('scroll', reveal);

    useEffect(()=>{
        setInterval(() => {
            reveal()
        }, 100);
        setDiscussionsData([...discussionsDataMain])
    },[])


    return(
        <>
            {/* Welcome to SWIM Dashboard! */}
            
                <Content
                style={{
                    padding: '0 1vw',
                    
                }}
                >
                    <Row justify={"center"}>
                        <Col xs={0} sm={0} md={0} lg={8} xl={8} xxl={6}>
                            <Search
                                placeholder="Search Discussions"
                                allowClear
                                enterButton="Search"
                                size="large"
                                onChange={(e)=>handleSearch(e.target.value)}
                                onSearch={(textToSearch)=>handleSearch(textToSearch)}
                            />
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={0} xl={0} xxl={0}>
                            <Search
                                placeholder="Search Discussions"
                                allowClear
                                enterButton="Search"
                                size="medium"
                                onSearch={(textToSearch)=>console.log(textToSearch)}
                            />
                        </Col>
                    </Row>
                    <Row justify={"center"}>
                        <Row style={{marginTop:'1vh', width:'80vw', height:'80vh', maxWidth:'80vw', maxHeight:'80vh', overflowY:'auto',}} justify={"start"}>
                            
                            { discussionsData.map((discussionData)=>{
                                    return (
                                        <Col key={discussionData.id} style={{height:'fit-content', padding:'0px'}} xs={24} sm={24} md={12} lg={8} xl={8} xxl={6}>
                                            <Card
                                                style={{
                                                    margin:"5px",
                                                    borderRadius:'25px',
                                                    cursor:'pointer'
                                                    
                                                }}
                                                className="card"
                                                
                                            >
                                                <Skeleton loading={false} avatar active>
                                                    <Meta
                                                        avatar={discussionData.avatar}
                                                        title={<><Text style={{fontSize:'1.3em', fontWeight:'bolder'}}>{discussionData.title}</Text><br/><Tag color={'blue'}>{discussionData.author}</Tag></>}
                                                        description={discussionData.shortDescription}
                                                    />
                                                    <Divider/>
                                                    <Row justify={"space-between"} align={"middle"}>
                                                        <Col>
                                                            <CommentOutlined style={{fontSize:'1.3em', marginRight:'5px'}}/><Text>{discussionData.comments}</Text>
                                                            <HeartOutlined style={{marginLeft:'10px' ,fontSize:'1.3em', marginRight:'5px'}}/><Text>{discussionData.likes}</Text>
                                                        </Col>
                                                        <Col>
                                                            <RightCircleFilled style={{fontSize:'1.8em', color:'#4288e1'}}/>
                                                        </Col>
                                                        
                                                    </Row>
                                                </Skeleton>
                                            </Card>
                                        </Col>
                                    )

                                })

                            }
                            
                            
                            
                        </Row>
                    </Row>
                    
                </Content>
            
        </>
        
    )
}

export default ViewDiscussion;