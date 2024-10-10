"use client"; // Tambahkan baris ini

import { useEffect, useState } from 'react';
import { Table, Input } from 'antd';

const MainPage = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://universities.hipolabs.com/search?country=indonesia&name=universitas');
            const result = await response.json();
            setData(result);
        };
        fetchData();
    }, []);

    const filteredData = data.filter((item) => 
        item.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
            <Input
                placeholder="Filter by name"
                onChange={(e) => setFilter(e.target.value)}
                style={{ marginBottom: '20px' }}
            />
            <Table dataSource={filteredData} columns={[
                { title: 'Name', dataIndex: 'name', key: 'name' },
                { title: 'Country', dataIndex: 'country', key: 'country' },
                { title: 'Website', dataIndex: 'website', key: 'website' },
            ]} />
        </div>
    );
};

export default MainPage;
