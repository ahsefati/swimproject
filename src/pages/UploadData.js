import { Row, Typography, Col, Empty, Layout, Menu, Upload } from "antd";
import { Outlet, Link } from "react-router-dom";
import React from 'react';
import { FolderOutlined, BulbOutlined, EnvironmentOutlined, GlobalOutlined } from '@ant-design/icons';
import { useEffect } from "react";
import '../css/Dashboard.css'

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
        }, 400);
    },[])

    const items = [
        {key:'Data', icon:<FolderOutlined /> , label:'Data',
            children: [
                {key:'UploadData', label:<Link to={'/dashobard/uploadfile'}>Upload File</Link>},
                {key:'MyData', label:'Data Manager'},
                {key:'ExploreData', label:'Data Explorer'}
            ]
        },
        {key:'Discussions', icon:<BulbOutlined /> , label:'Discussions', 
            children: [
                {key:'NewDiscussion', label:'Create a Discussion'},
                {key:'ViewDiscussions', label:'View Discussions'},
            ]
        },
        {key:'Maps', icon:<EnvironmentOutlined /> , label:'Maps', 
            children: [
                {key:'MapOverview', label:'Overview'},
            ]
        },
        {key:'Network', icon:<GlobalOutlined /> , label:'Network', 
            children: [
                {key:'MyNetwork', label:'My Network'},
                {key:'SearchNetwork', label:'Global'},
            ]
        }
    ]

    return(
        <>
            {/* Welcome to SWIM Dashboard! */}
            
                <Content
                style={{
                    padding: '0 1vw',
                    
                }}
                >
                    <Text>Hi here we can upload a file</Text>
                </Content>
            
        </>
        
    )
}

export default UploadData;