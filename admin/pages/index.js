import React, {useEffect, useState} from 'react';
import Router from 'next/router';
import {Card, Alert, Input, Button, Layout} from 'antd';
import API from '../services/API';
import AccessTokenService from "../services/AccessTokenService";
import UserDataService from "../services/UserDataService";


const Login = () => {
    useEffect(() => {
        const token = AccessTokenService.get();
        if (token)
            Router.push('/control');
    });

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const submit = async () => {
        const data = {
            email,
            password,
        }
        setError(null);
        setLoading(true);
        const response = await API.send('POST', '/api/auth/login', data, false);
        //const rslt = JSON.parse(response);
        setLoading(false);
        if (response.status === 200) {
            if (response.data.user.roles[0] == "ADMIN") {
                console.log(response.data.user.roles[0]);
                AccessTokenService.set(response.data.user.token);
                UserDataService.set(response.data.user);

                await Router.push('/control');
            } else {
                setError("Non Admin Users");
            }
        } else if (response.status === 401)
            setError("Bad credentials");
        else
            setError("An error occurred");
    }

    return (
        <Layout style={{height: "100vh"}}>
            <Card style={{width: 400, backgroundColor: "#fff", margin: "auto", textAlign: "center"}}>
                {error && (
                    <Alert style={{marginBottom: 30}} message={error} type="error" />
                )}
                <Input
                    placeholder={"Email"}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <Input
                    style={{marginTop: 15}}
                    placeholder={"Password"}
                    value={password}
                    type={"password"}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <Button
                    type={"primary"}
                    onClick={submit}
                    loading={loading}
                    style={{marginTop: 20}}
                >
                    Submit
                </Button>
            </Card>
        </Layout>
    );
}

export default Login
