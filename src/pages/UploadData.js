import { Row, Typography, Col, Button, Layout, Menu, Upload, Divider } from "antd";
import { Outlet, Link } from "react-router-dom";
import React from 'react';
import { UploadOutlined, CloudUploadOutlined, EnvironmentOutlined, GlobalOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import '../css/UploadData.css'

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


const UploadData = () => {
    window.addEventListener('scroll', reveal);

    useEffect(()=>{
        setInterval(() => {
            reveal()
        }, 100);
    },[])

    const [fileList, setFileList] = useState([
        // {
        //   uid: '-1',
        //   name: 'xxx.png',
        //   status: 'done',
        //   url: 'http://www.baidu.com/xxx.png',
        // },
    ]);

    const handleChange = (info) => {
        let newFileList = [...info.fileList];
    
        // 1. Limit the number of uploaded files
        // Only to show two recent uploaded files, and old ones will be replaced by the new
        newFileList = newFileList.slice(-5);
    
        // 2. Read from response and show file link
        newFileList = newFileList.map((file) => {
          if (file.response) {
            // Component will show file.url as link
            file.url = file.response.url;
          }
          return file;
        });
        setFileList(newFileList);
    };

    const props = {
        action: '',
        onChange: handleChange,
        multiple: true,
    };

    return(
        <>
            {/* Welcome to SWIM Dashboard! */}
            
                <Content
                style={{
                    padding: '0 1vw',
                    
                }}
                >
                    <Row style={{marginTop:'2vh'}} justify={"center"}>
                        <Text className="uploadtitle">Upload Tool</Text>
                    </Row>
                    <Row justify={"center"}>
                        <Col xs={22} sm={22} md={16} lg={12} xl={10} xxl={10}>
                            <Row style={{marginTop:'5vh'}} justify={"start"}>
                                <Text className="uploadstep">1- Upload Your Files</Text>
                            </Row>
                            <Divider style={{marginTop:'2vh'}} orientation="left"><Text className="uploadfilefoldertitle">File Upload</Text></Divider>
                            <Row justify={"center"}>
                                <Upload {...props} fileList={fileList}>
                                    <Button icon={<UploadOutlined />}>Upload a file</Button>
                                </Upload>
                            </Row>
                            <Divider style={{marginTop:'2vh'}} orientation="left"><Text className="uploadfilefoldertitle">or Directory Upload</Text></Divider>
                            <Row justify={"center"}>
                                <Upload {...props} fileList={fileList} directory>
                                    <Button icon={<UploadOutlined />}>Upload a folder</Button>
                                </Upload>
                            </Row>
                            <Row style={{marginTop:'5vh'}} justify={"start"}>
                                <Text className="uploadstep">2- Save the Files</Text>
                            </Row>
                            <Row style={{marginTop:'5vh',}} justify={"center"}>
                                    <Button style={{color:'green', fontWeight:'bolder'}} icon={<CloudUploadOutlined />}>Save on Cloud</Button>
                            </Row>
                        </Col>
                    </Row>
                </Content>
            
        </>
        
    )
}

export default UploadData;