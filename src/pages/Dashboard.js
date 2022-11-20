import { Row, Typography, Col, Empty, Layout, Menu } from "antd";
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


const Dashboard = () => {
    window.addEventListener('scroll', reveal);

    useEffect(()=>{
        setInterval(() => {
            reveal()
        }, 400);
    },[])

    const items = [
        {key:'Data', icon:<FolderOutlined /> , label:'Data',
            children: [
                {key:'UploadData', label:'Upload File'},
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
            <Layout
                
                style={{
                padding: '24px 0 24px 10px',
                }}
            >
                <Sider breakpoint="md" collapsedWidth="50px">
                    
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{
                            height: '80vh',
                        }}
                        items={items}
                    />
                </Sider>
                <Content
                style={{
                    padding: '0 24px',
                    minHeight: 280,
                }}
                >
                Content
                </Content>
            </Layout>
        </>
        
    )
}

export default Dashboard;