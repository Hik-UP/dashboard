import React, { useState, useRef, useEffect } from 'react';
import { UserOutlined } from '@ant-design/icons';
import Layout from '../../components/Layout';
import { Button, Form, Input, Radio, Card, Avatar, Space } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;


export default function ProfileUpdate () {
    return (
        <Layout>
        <Card style={{marginTop: "17%",alignVertical:"25%",left: "25%", width: "50%", alignHorizontal: "25%"}}>
        <Title level={2} style={{marginTop:"0%"}}>Profile Update</Title>

        <Form style={{marginTop:"5%"}} >
          <Form.Item label="Username">
            <Input  style={{marginLeft: "2.3%"}} className="username" placeholder="Username"/>
          </Form.Item>
          <Form.Item style={{marginLeft: "1%"}} label="Password">
            <Input style={{left: "2%"}} className="password" placeholder="Password"/>
          </Form.Item>
          <Form.Item style={{marginLeft: "2.5%"}} label="Confirm">
            <Input style={{left: "2%"}} className="password" placeholder="Confirm Password"/>
          </Form.Item>
          <Form.Item >
            <Button style={{left: "87%", top:"50%"}} className="button-submit" type="primary">Submit</Button>
          </Form.Item>
        </Form>
        </Card>
        </Layout>
    
        )

    };
