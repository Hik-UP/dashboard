import React, {useEffect, useState} from "react";
import Router, {useRouter} from 'next/router'
import {Menu} from "antd";
import {LogoutOutlined} from "@ant-design/icons";
import AccessTokenService from "../services/AccessTokenService";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAddressCard,
    faTv,
} from "@fortawesome/free-solid-svg-icons";

// association of route to menu to mark as selected
const activeMenus = {
    '/control': '/control'
};

const Navigation = () => {
    const router = useRouter();

    const navigate = async (pathname) => {
        await Router.push(pathname)
    }

    const logout = () => {
        AccessTokenService.remove();
        Router.push('/');
    }

    return (
        <Menu theme="dark" mode="inline" selectedKeys={[activeMenus[router.pathname]]}>
            <Menu.Item
                key={"/control"}
                icon={<FontAwesomeIcon icon={faTv} style={{marginRight: 10}} />}
                onClick={() => navigate('/control')}
            >
                Map
            </Menu.Item>
            <Menu.Item
                key={"/profile-update"}
                icon={<FontAwesomeIcon icon={faAddressCard}  style={{marginRight: 10}} />}
                onClick={() => navigate('/profile-update')}
            >
                Profile
            </Menu.Item>
            <Menu.Item
                style={{marginTop: "380%"}}
                key="/logout"
                icon={<LogoutOutlined />}
                onClick={logout}
            >
                Sign Out
            </Menu.Item>
        </Menu>
    );
}

export default Navigation
