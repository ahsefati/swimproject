import { Row, Typography, Layout, Col, Button, message, Input} from "antd";

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import React from 'react';

import { useEffect, useState, useRef } from "react";
import '../css/CreateDiscussion.css'
import { height } from "@mui/system";

import { SendOutlined, ClockCircleTwoTone } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
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


const CreateDiscussion = () => {

    
    const [discussionData , setDiscussionData] = useState("<h1>Title here...</h1><p>Discussion here...</p><h1>difhsdhsk</h1><p>hsdfgfsdgf</p><h1>dsf</h1><h2>FFF</h2>")
    const [title, setTitle] = useState("")
    window.addEventListener('scroll', reveal);

    useEffect(()=>{
        setInterval(() => {
            reveal()
        }, 100);
    },[])

    const onPublishDiscussion = async () => {
        
        const formData = new FormData();
        
        console.log(title)
        formData.append('title', title);
        formData.append('content', discussionData);
        formData.append('date', new Date().toISOString().split('T')[0]);

        try {
            const response = await fetch('https://swim-watershed.ucalgary.ca/cgi-bin/app.cgi/api/creatediscussion', {
              method: 'POST',
              body: formData,
            });
      
            if (response.ok) {
              console.log(response)
              message.success('Discussion has been published successfully!');
            } else {
              message.error('Discussion publishing failed.');
            }
          } catch (error) {
            console.error('Error occurred during discussion publishing:', error);
            message.error('Discussion publishing failed.');
          }
    }

    return(
        <>
            {/* Welcome to SWIM Dashboard! */}
            
                <Content
                style={{
                    padding: '0 1vw',
                    
                }}
                >
                    <Row style={{marginTop:'3vh'}} justify={"center"}>
                        <Col span={24} >
                            <Input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title here..."/>
                            <CKEditor
                                editor={ ClassicEditor }
                                data="<p>Discussion here...</p>"
                                onReady={ editor => {
                                    // You can store the "editor" and use when it is needed.
                                    
                                } }
                                onChange={ ( event, editor ) => {
                                    const data = editor.getData();
                                    setDiscussionData(data)
                                } }
                                onBlur={ ( event, editor ) => {
                                    
                                } }
                                onFocus={ ( event, editor ) => {
                                    
                                } }
                            />
                        </Col>
                    </Row>
                    <Row justify={"end"} style={{marginTop:'3vh'}}>
                        <Col>
                            <Button onClick={onPublishDiscussion} type="primary" block icon={<SendOutlined />}>Publish</Button>
                        </Col>
                    </Row> 
                    
                </Content>
            
        </>
        
    )
}

export default CreateDiscussion;