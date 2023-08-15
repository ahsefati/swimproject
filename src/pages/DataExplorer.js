import { Row, Typography, Col, Button, Layout, Input, Space, Table, Popconfirm, Tag } from "antd";

import Highlighter from 'react-highlight-words';
import React from 'react';
import { SearchOutlined, } from '@ant-design/icons';
import { useEffect, useState, useRef } from "react";
import '../css/DataManager.css'

const { Header, Content, Footer, Sider } = Layout;
const {Text} = Typography

const data = [
    {
        key: '1',
        name: 'Test 1',
        owners: ['@LeeJackson'] ,
        dateUpload: '12 December 2022',
    },
    {
        key: '2',
        name: 'Test 2',
        owners: ['@uofc'],
        dateUpload: '14 December 2022',
    },
    {
        key: '3',
        name: 'Test 3',
        owners: ['@IBM'],
        dateUpload: '10 October 2022',
    },
    {
        key: '4',
        name: 'Test 4',
        owners: ['@IBM'],
        dateUpload: '18 September 2022',
    },
    {
        key: '5',
        name: 'Test 5',
        owners: ['@uofc'],
        dateUpload: '12 August 2022',
    },
    {
        key: '6',
        name: 'Test 6',
        owners: ['@uofc', '@IBM'],
        dateUpload: '7 October 2022',
    },
    {
        key: '7',
        name: 'Test 7',
        owners: ['@uofc', '@IBM', '@LeeJackson'],
        dateUpload: '11 September 2022',
    },
    {
        key: '8',
        name: 'Test 8',
        owners: ['@ahsefati', '@LeeJackson'],
        dateUpload: '10 August 2022',
    },
];

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


const DataExplorer = () => {

    window.addEventListener('scroll', reveal);

    const [dataSource, setDataSource] = useState([])

    window.addEventListener('scroll', reveal);

    useEffect(()=>{
        fetch('https://swim-watershed.ucalgary.ca/cgi-bin/app.cgi/api/getallfiles', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }, 
          method: 'GET',
        }).then((response) => response.json())
        .then((res) => {
          console.log(res.data)
          setDataSource(res.data)
        });

        setInterval(() => {
            reveal()
        }, 100);
    },[])

    const [searchText, setSearchText] = useState('');
  
    const [searchedColumn, setSearchedColumn] = useState('');
  
    const searchInput = useRef(null);
    
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
        <div
            style={{
            padding: 8,
            }}
            onKeyDown={(e) => e.stopPropagation()}
        >
            <Input
            ref={searchInput}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
            style={{
                marginBottom: 8,
                display: 'block',
            }}
            />
            <Space>
            <Button
                type="primary"
                onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                icon={<SearchOutlined />}
                size="small"
                style={{
                width: 90,
                }}
            >
                Search
            </Button>
            <Button
                onClick={() => clearFilters && handleReset(clearFilters)}
                size="small"
                style={{
                width: 90,
                }}
            >
                Reset
            </Button>
            <Button
                type="link"
                size="small"
                onClick={() => {
                confirm({
                    closeDropdown: false,
                });
                setSearchText(selectedKeys[0]);
                setSearchedColumn(dataIndex);
                }}
            >
                Filter
            </Button>
            <Button
                type="link"
                size="small"
                onClick={() => {
                close();
                }}
            >
                close
            </Button>
            </Space>
        </div>
        ),
        filterIcon: (filtered) => (
        <SearchOutlined
            style={{
            color: filtered ? '#1890ff' : undefined,
            }}
        />
        ),
        onFilter: (value, record) =>
        record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
        if (visible) {
            setTimeout(() => searchInput.current?.select(), 100);
        }
        },
        render: (text) =>
        searchedColumn === dataIndex ? (
            <Highlighter
            highlightStyle={{
                backgroundColor: '#ffc069',
                padding: 0,
            }}
            searchWords={[searchText]}
            autoEscape
            textToHighlight={text ? text.toString() : ''}
            />
        ) : (
            text
        ),
    });
    
    const columns = [
    
        {
            title: 'Name of File',
            dataIndex: 'name',
            key: 'name',
            width: '15%',
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Description',
            dataIndex: 'desc',
            key: 'desc',
            width: '20%',
            ...getColumnSearchProps('desc'),
        },
        {
            title: 'File Owner Name',
            key: 'user_name',
            dataIndex: 'user_name',
            width:'10%',
            responsive: ['sm'],
            ...getColumnSearchProps('user_name'),
            render: (_, record) =>
                <>
                    <Tag color={record.user_name.length<12? 'blue':record.user_name.length<15? 'red': 'purple'} key={record.id}>
                    {record.user_name}
                    </Tag>
                </>
        },
        {
            title: 'Owner Email',
            dataIndex: 'user_email',
            key: 'user_email',
            width: '20%',
            ...getColumnSearchProps('user_email'),
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            width: '10%',
            ...getColumnSearchProps('dateUpload'),
            sorter: (a, b) => new Date(a.dateUpload) - new Date(b.dateUpload),
            sortDirections: ['descend', 'ascend'],
            responsive: ['md']
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            width:'20%',
            render: (_, record) =>
            <>
                {(record.name.includes(".jpeg") || record.name.includes(".jpg") || record.name.includes(".png") || record.name.includes(".pdf") ) &&
                <a style={{marginLeft:'12px'}} href={"https://swim-watershed.ucalgary.ca/cgi-bin/uploadedfiles/"+record.name}>Preview</a>
                }
                <a download style={{marginLeft:'12px'}} href={"https://swim-watershed.ucalgary.ca/cgi-bin/uploadedfiles/"+record.name}>Download</a>
            </>
        },
    ];


    return(
        <>
            {/* Welcome to SWIM Dashboard! */}
            
                <Content
                style={{
                    padding: '0 1vw',
                    
                }}
                >
                    <Row style={{marginTop:'2vh'}} justify={"center"}>
                        <Text className="uploadtitle">Data Manager</Text>
                    </Row>
                    
                    <Col style={{marginTop:'4vh'}} span={24}>
                        <Table columns={columns} dataSource={dataSource} pagination={{current: 1, pageSize: 10,}}/>
                    </Col>    
                    
                </Content>
            
        </>
        
    )
}

export default DataExplorer;