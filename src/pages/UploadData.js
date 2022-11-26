import { Row, Typography, Col, Button, Layout, Menu, Upload, Divider, message } from "antd";
import { Outlet, Link } from "react-router-dom";
import React from 'react';
import { UploadOutlined, CloudUploadOutlined, EnvironmentOutlined, InboxOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import '../css/UploadData.css'

const { Header, Content, Footer, Sider } = Layout;
const {Text} = Typography
const { Dragger } = Upload;


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

const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
    height:'50vh'
};


const UploadData = () => {
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
                    <Row style={{marginTop:'2vh', marginBottom:'2vh'}} justify={"center"}>
                        <Text className="uploadtitle">Upload File Tool</Text>
                    </Row>

                    <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    </Dragger>
                    
                </Content>
            
        </>
        
    )
}

export default UploadData;