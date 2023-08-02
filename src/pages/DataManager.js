import { Row, Typography, Col, Button, Layout, Input, Space, Table, Popconfirm } from "antd";

import Highlighter from 'react-highlight-words';
import React from 'react';
import { SearchOutlined, } from '@ant-design/icons';
import { useEffect, useState, useRef } from "react";
import '../css/DataManager.css'

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


const DataManager = () => {

    const [dataSource, setDataSource] = useState([])

    window.addEventListener('scroll', reveal);

    useEffect(()=>{
        fetch('https://swim-watershed.ucalgary.ca/cgi-bin/app.cgi/api/getmyfiles', {
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

    const handleDelete = (name) => {
        console.log(name)
        fetch('https://swim-watershed.ucalgary.ca/cgi-bin/app.cgi/api/delete', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }, 
          body:JSON.stringify({
            "name": name
          }),
          method: 'POST',
        }).then((response) => response.json())
        .then((res) => {
          console.log(res)
        });
        const newData = dataSource.filter((item) => item.name !== name);
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
            width: '20%',
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Description',
            dataIndex: 'desc',
            key: 'desc',
            width: '25%',
            ...getColumnSearchProps('desc'),
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            width: '15%',
            ...getColumnSearchProps('date'),
            sorter: (a, b) => new Date(a.date) - new Date(b.date),
            sortDirections: ['descend', 'ascend'],
            responsive: ['md']
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            width:'25%',
            render: (_, record) =>
                dataSource.length >= 1 ? (<>
                <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.name)}>
                    <a>Delete</a>
                </Popconfirm>
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