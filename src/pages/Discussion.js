import { Row, Typography, Layout, Col, Skeleton, Avatar, Card, Input, Divider, Tag, Button, message} from "antd";

import React from 'react';
import HTMLRenderer from 'react-html-renderer';

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
import { Link, useParams } from "react-router-dom";
import TextArea from "antd/lib/input/TextArea";

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

const Discussion = () => {
    const {id} = useParams()
    const [commentContent, setCommentContent] = useState("")
    const [discussions, setDiscussions] = useState([])
    const [discussionsData, setDiscussionsData] = useState([])
    const [discussionData, setDiscussionData] = useState()

    window.addEventListener('scroll', reveal);

    useEffect(() => {
        const fetchDiscussion = async () => {
            const formData = new FormData();
            formData.append('post_id', id);
    
            await fetch('https://swim-watershed.ucalgary.ca/cgi-bin/app.cgi/api/getonediscussion', {
                  method: 'POST',
                  body: formData,
            }).then((response) => response.json())
            .then((res) => {
                setDiscussionData(res.data)
            })
            // if (response.ok) {
            //     console.log(response)
            // } else {
            //     message.error('Discussion is not found. Please refresh the page later.');
            // }
        }

        fetchDiscussion()

        setInterval(() => {
            reveal()
        }, 100);
    },[])

    const addComment = async () => {
        const formDataComment = new FormData()
        formDataComment.append('content', commentContent)
        formDataComment.append('post_id', id)        
        const response = await fetch('https://swim-watershed.ucalgary.ca/cgi-bin/app.cgi/api/addcomment', {
            method: 'POST',
            body: formDataComment,
        });
    
        if (response.ok) {
            console.log(response)
            message.success('Comment has been added successfully!');
        } else {
            message.error('Adding comment failed. Please try later!');
        }
    }

    return(
        <>
            {/* Welcome to SWIM Dashboard! */}
            
                <Content
                style={{
                    padding: '0 1vw',
                    backgroundColor:'white',
                    borderRadius:'25px',
                    height:'70vh',
                    maxHeight:'70vh',
                    overflow:'auto'
                }}
                >
                    {discussionData ?
                        <Row justify={"center"}>
                            <Col xs={24}>
                                <Row align={"middle"}>
                                    <Col xs={24} sm={24} md={20}>
                                        <Text style={{fontSize:'32px', fontWeight:'bold'}}>{discussionData.title}</Text>
                                    </Col>
                                    <Col xs={0} sm={0} md={4}>
                                        <Row align={"middle"} justify={"end"}>
                                            <HeartOutlined style={{marginLeft:'10px' ,fontSize:'2em', marginRight:'5px'}}/>
                                            <Text style={{fontSize:'2em'}}>{discussionData.num_likes}</Text>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row align={"middle"}>
                                    <Tag style={{fontSize:'14px', margin:'0px 0px 0px 8px'}} color={discussionData.user_name.length<12? 'blue':discussionData.user_name.length<15? 'red': 'purple'}>
                                        @{discussionData.user_name}
                                    </Tag>
                                    <Text style={{marginLeft:'8px', marginRight:'8px'}}>({discussionData.user_email})</Text>
                                    | <span style={{marginLeft:'8px'}}><Tag color="blue">{discussionData.date}</Tag></span>
                                </Row>
                                <Row style={{marginTop:'24px', marginBottom:'24px'}}>
                                    <Text style={{overflow:'auto', maxHeight:'60vh', fontSize:'18px'}}>
                                        {<HTMLRenderer html={discussionData.content}/>}
                                    </Text>
                                </Row>
                                <hr/>
                                <Row>
                                    <Col span={24}>
                                        <Text style={{marginBottom:'24px', fontSize:'20px', fontWeight:'bold', textDecoration:'underline'}}>Comments:</Text>
                                    </Col>
                                    <Col span={24}>
                                        {discussionData.comments.map(comment => {
                                            return(
                                                <Row style={{marginTop:'16px', marginBottom:'24px'}}>
                                                    <Meta
                                                        avatar={<Avatar size={"large"} src={comment.user_image}/>}
                                                        title={
                                                            <Text>
                                                                {comment.user_name} ({comment.user_email})
                                                            </Text>
                                                        }
                                                        description={<Text>{comment.content.replaceAll("\<.*?\>", "")}</Text>}
                                                    />
                                                </Row>
                                            )   
                                        })

                                        }
                                    </Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <Col xs={24} sm={12} md={8}>
                                        <Text style={{marginBottom:'24px', fontSize:'20px', fontWeight:'bold', textDecoration:'underline'}}>Add Yours:</Text>
                                        <TextArea style={{marginTop:'12px'}} value={commentContent} onChange={e=>setCommentContent(e.target.value)} placeholder="comment here..."/>
                                        <Button onClick={addComment} style={{marginTop:'12px', marginBottom:'24px'}} type="primary">Add</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        :
                        <Row style={{height:'70vh'}} justify={"center"} align={"middle"}>
                            <Text style={{fontSize:'24px', fontWeight:'bold'}}>Loading Data...</Text>
                        </Row>
                    }
                    
                </Content>
            
        </>
        
    )
}

export default Discussion;