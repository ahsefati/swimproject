import { Row, Typography, Layout, Col, Skeleton, Avatar, Card, Input, Divider, Tag} from "antd";

import React from 'react';

import { useEffect, useState, useRef } from "react";
import '../css/ViewDiscussion.css'
import { height } from "@mui/system";

import { CommentOutlined, HeartOutlined, RightCircleFilled, } from '@ant-design/icons';

import r01 from '../assets/Avatars/random01.svg'
import r02 from '../assets/Avatars/random02.svg'
import r03 from '../assets/Avatars/random03.svg'
import r04 from '../assets/Avatars/random04.svg'
import r05 from '../assets/Avatars/random05.svg'
import r06 from '../assets/Avatars/random06.svg'
import r07 from '../assets/Avatars/random07.svg'
import r08 from '../assets/Avatars/random08.svg'
import r09 from '../assets/Avatars/random09.svg'
import r10 from '../assets/Avatars/random10.svg'
import { Link } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
const {Text} = Typography
const {Meta} = Card
const {Search} = Input

let ravatars = [r01, r02, r03, r04, r05, r06, r07, r08, r09, r10]

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

// const discussionsDataMain = [];
// for (let i = 0; i < 19; i++) {
//     let src = ravatars[Math.floor(Math.random() * 10)]
//     discussionsDataMain.push({
//         id: i.toString(),
//         title: `${i} - Discussion Title`,
//         author: '@ahsefati',
//         avatar: <Avatar src={src} />,
//         shortDescription: `This is the description of the the discussion ${i}`,
//         likes: Math.floor(Math.random() * 99),
//         comments: Math.floor(Math.random() * 20)
//     });
// }

const ViewDiscussion = () => {
    
    const [discussions, setDiscussions] = useState([])
    const [discussionsData, setDiscussionsData] = useState([])
    const handleSearch = (textToSearch) => {
        const resultsOfSearch = discussions.filter(discussionData=>discussionData.title.toLowerCase().includes(textToSearch.toLowerCase()) || 
                                                                            discussionData.user_name.toLowerCase().includes(textToSearch.toLowerCase()) || 
                                                                            discussionData.content.toLowerCase().includes(textToSearch.toLowerCase()))
        setDiscussionsData([...resultsOfSearch])
        
    }


    window.addEventListener('scroll', reveal);

    useEffect(()=>{
        fetch('https://swim-watershed.ucalgary.ca/cgi-bin/app.cgi/api/getalldiscussions', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }, 
          method: 'GET',
        }).then((response) => response.json())
        .then((res) => {
          console.log(res.data)
          setDiscussions(res.data)
          setDiscussionsData(res.data)
        });

        setInterval(() => {
            reveal()
        }, 100);
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
                            { discussionsData?.length > 0 && discussionsData.map((discussionData)=>{
                                    return (
                                        <Col key={discussionData.id} style={{height:'fit-content', padding:'0px'}} xs={24} sm={24} md={12} lg={8} xl={8} xxl={6}>
                                            <Link to={"/dashboard/discussion/"+discussionData.id}>
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
                                                            avatar={<Avatar src={discussionData?.user_image}/>}
                                                            title={<><Text style={{fontSize:'1.3em', fontWeight:'bolder'}}>{discussionData.title}</Text><br/>
                                                                    <Tag color={discussionData.user_name.length<12? 'blue':discussionData.user_name.length<15? 'red': 'purple'}>
                                                                        {discussionData.user_name}
                                                                    </Tag>
                                                                </>
                                                                }
                                                            description={discussionData.content.replaceAll("\<.*?\>", "")}
                                                        />
                                                        <Divider/>
                                                        <Row justify={"space-between"} align={"middle"}>
                                                            <Col>
                                                                <CommentOutlined style={{fontSize:'1.3em', marginRight:'5px'}}/><Text>{discussionData.num_comments}</Text>
                                                                <HeartOutlined style={{marginLeft:'10px' ,fontSize:'1.3em', marginRight:'5px'}}/><Text>{discussionData.num_likes}</Text>
                                                            </Col>
                                                            <Col>
                                                                <RightCircleFilled style={{fontSize:'1.8em', color:'#4288e1'}}/>
                                                            </Col>
                                                            
                                                        </Row>
                                                    </Skeleton>
                                                </Card>
                                            </Link>
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