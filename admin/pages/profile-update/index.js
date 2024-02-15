import React, { useState, useRef, useEffect } from 'react';
import { UserOutlined } from '@ant-design/icons';
import Layout from '../../components/Layout';
import { Button, Form, Input, Radio, Card, Avatar, Space, Alert } from 'antd';
import UserDataService from "../../services/UserDataService";
import API from '../../services/API';
import { Typography } from 'antd';

const { Title } = Typography;


export default function ProfileUpdate () {

  const [username, setInputValueUsername] = useState('');
  const [email, setInputValueEmail] = useState('');
  const [showAlert, setShowAlert] = useState(false);


  const handleInputChange = (e) => {
    const { username, email } = e.target;
    setInputValueEmail(email);
    setInputValueUsername(username);
  };


  const handleSubmit = async (event) => {
    try {
      console.log(username);
      const user_data = UserDataService.get();
      const data = {};
      data.id = user_data.id;
      data.roles = user_data.roles;
      data.email = email;
      data.username = username;
      console.log(data);
      const response = await API.send('PUT', '/api/user/profile/update', data, true);   
      console.log(response);
      if (response.status == 200) {
        setShowAlert(true);
        console.log('here');
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
    };

    return (
        <Layout>
        <Card style={{marginTop: "10%", alignVertical:"25%", left: "25%", width: "50%", alignHorizontal: "25%"}}>
        <Title level={2} style={{marginTop:"0%"}}>Profile Update</Title> 
        <Form style={{marginTop:"5%"}} >
          <Form.Item label="Username">
            <Input  style={{marginLeft: "2.3%"}} className="Username" onChange={e => { setInputValueUsername(e.currentTarget.value); }} value={username} placeholder="Username"/>
          </Form.Item>
          <Form.Item style={{marginLeft: "4%"}} label="E-Mail">
            <Input style={{left: "2%"}} value={email} onChange={e => { setInputValueEmail(e.currentTarget.value); }} className="e-mail" placeholder="Password"/>
          </Form.Item>
          {showAlert &&
          < Alert message="Profile updated with success !" type="success" showIcon />
          }
            <Button style={{left: "87%", top:"50%"}} className="button-submit" onClick={handleSubmit} type="primary">Submit</Button>
        </Form>
        </Card>
        </Layout>
        )

    };
