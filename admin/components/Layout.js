import React, {useEffect} from "react";
import Router from 'next/router'
import {Layout as AntdLayout} from 'antd';
import Navigation from "./Navigation";
import AccessTokenService from "../services/AccessTokenService";

const {Content, Sider} = AntdLayout;

const Layout = (props) => {
    useEffect(() => {
        const access_token = AccessTokenService.get();
        if (!access_token)
            Router.push('/');
    });

    return (
        
        <AntdLayout style={{height: "100vh"}}>
            <Sider>
                <div style={{color: "white", textAlign: "center", marginTop: 20, marginBottom: 20, fontSize: 20}}>
                    Admin
                </div>
                <Navigation/>
            </Sider>
            <AntdLayout style={{overflowY: "scroll"}}>
                <Content style={{margin: ''}}>
                    <div style={{paddingBottom: 50}}>
                        {props.children}
                    </div>
                </Content>
            </AntdLayout>
        </AntdLayout>
    );
}

export default Layout
