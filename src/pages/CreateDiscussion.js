import { Row, Typography, Layout, Col, Button} from "antd";

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

    

    window.addEventListener('scroll', reveal);

    useEffect(()=>{
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
                    <Row style={{marginTop:'3vh'}} justify={"center"}>
                        <Col span={24} >
                            <CKEditor
                                editor={ ClassicEditor }
                                data="<h1>Type Title of the Discussion...</h1><p>what do you think about it?</p>"
                                onReady={ editor => {
                                    // You can store the "editor" and use when it is needed.
                                    
                                } }
                                onChange={ ( event, editor ) => {
                                    const data = editor.getData();
                                    
                                } }
                                onBlur={ ( event, editor ) => {
                                    
                                } }
                                onFocus={ ( event, editor ) => {
                                    
                                } }
                            />
                        </Col>
                    </Row>
                    <Row justify={"end"} style={{marginTop:'3vh'}}>
                        
                        <Col style={{marginRight:'25px'}}>
                            <Button type="dashed" icon={<ClockCircleTwoTone />}>Save Draft</Button>
                        </Col>
                        <Col>
                            <Button type="primary" icon={<SendOutlined />}>Publish</Button>
                        </Col>
                    </Row> 
                    
                </Content>
            
        </>
        
    )
}

export default CreateDiscussion;