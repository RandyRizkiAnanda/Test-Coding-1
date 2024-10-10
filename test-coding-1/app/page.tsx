'use client'; // Tambahkan ini di bagian atas

import { useState } from 'react';
import { Input, Button, Form } from 'antd';

const Home = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Alihkan ke halaman utama setelah login (akan dibuat selanjutnya)
        window.location.href = '/main';
    };

    return (
        <Form onFinish={handleLogin}>
            <Form.Item>
                <Input
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </Form.Item>
            <Form.Item>
                <Input.Password
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Login</Button>
            </Form.Item>
        </Form>
    );
};

export default Home;
