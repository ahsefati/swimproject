import { Row, Typography, Col, Card, Layout, Menu } from "antd";
import { Outlet, Link } from "react-router-dom";
import React from 'react';
import { FolderOutlined, BulbOutlined, EnvironmentOutlined, GlobalOutlined } from '@ant-design/icons';
import { useEffect } from "react";
import '../css/Dashboard.css'

const { Header, Content, Footer, Sider } = Layout;
const {Text} = Typography
const {Meta} = Card



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
        {key:'Maps', icon:<EnvironmentOutlined /> , label:'Maps', 
            children: [
                {key:'MapOverview', label:<Link to={'/dashboard'}>Overview</Link>},
            ]
        },
        {key:'Data', icon:<FolderOutlined /> , label:'Data',
            children: [
                {key:'UploadData', label:<Link to={'/dashboard/uploaddata'}>Upload File</Link>},
                {key:'MyData', label:<Link to={'/dashboard/datamanager'}>Data Manager</Link>},
                {key:'ExploreData', label:<Link to={'/dashboard/dataexplorer'}>Data Explorer</Link>}
            ]
        },
        {key:'Discussions', icon:<BulbOutlined /> , label:'Discussions', 
            children: [
                {key:'NewDiscussion', label:<Link to={'/dashboard/creatediscussion'}>Create a Discussion</Link>},
                {key:'ViewDiscussions', label:<Link to={'/dashboard/viewdiscussions'}>View Discussions</Link>},
            ]
        },
        // {key:'Network', icon:<GlobalOutlined /> , label:'Network', 
        //     children: [
        //         {key:'MyNetwork', label:'My Network'},
        //         {key:'SearchNetwork', label:'Global'},
        //     ]
        // }
    ]

    return(
        <>
            {/* Welcome to SWIM Dashboard! */}
            <Layout
                
                style={{
                    padding: '24px 0 24px 1vw',
                    
                }}
            >
                <Sider breakpoint="md" collapsedWidth="50px" style={{backgroundColor:'white'}}>
                    
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['Data', 'Discussions', 'Maps', 'Network']}
                        style={{
                            height: 'fit-content',
                            
                        }}
                        items={items}
                    />
                </Sider>
                <Content
                style={{
                    padding: '0 1vw',
                    
                }}
                >
                    <Outlet/>
                </Content>
            </Layout>
        </>
        
    )
}

export default Dashboard;