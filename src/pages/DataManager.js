import { Row, Typography, Col, Button, Layout, Input, Space, Table, Popconfirm } from "antd";

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
        dateUpload: '12 December 2022',
    },
    {
        key: '2',
        name: 'Test 2',
        dateUpload: '14 December 2022',
    },
    {
        key: '3',
        name: 'Test 3',
        dateUpload: '10 October 2022',
    },
    {
        key: '4',
        name: 'Test 4',
        dateUpload: '18 September 2022',
    },
    {
        key: '5',
        name: 'Test 5',
        dateUpload: '12 August 2022',
    },
    {
        key: '6',
        name: 'Test 6',
        dateUpload: '7 October 2022',
    },
    {
        key: '7',
        name: 'Test 7',
        dateUpload: '11 September 2022',
    },
    {
        key: '8',
        name: 'Test 8',
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


const DataManager = () => {

    const [dataSource, setDataSource] = useState(data)

    window.addEventListener('scroll', reveal);

    useEffect(()=>{
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

    const handleDelete = (key) => {
        const newData = dataSource.filter((item) => item.key !== key);
        setDataSource(newData);
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
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: '35%',
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Date',
            dataIndex: 'dateUpload',
            key: 'dateUpload',
            width: '30%',
            ...getColumnSearchProps('dateUpload'),
            sorter: (a, b) => new Date(a.dateUpload) - new Date(b.dateUpload),
            sortDirections: ['descend', 'ascend'],
            responsive: ['md']
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            width:'25%',
            render: (_, record) =>
                dataSource.length >= 1 ? (<>
                <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                    <a>Delete</a>
                </Popconfirm>
                <a style={{marginLeft:'10px', color:'gray', cursor:'not-allowed'}}>Rename</a>
                </>
                ) : null,
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

export default DataManager;