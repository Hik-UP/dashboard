import React from 'react'
import App from 'next/app'
import '../styles/app.scss'
import "antd/dist/antd.css";
import Head from 'next/head'


function IndexPage() {
    return (
        <Head>
            <title>Hik'UP Admin</title>
        </Head>
    )
}

export default class MyApp extends App {

    componentDidMount() {
        history.pushState({}, "Area Admin", location.hash.substring(1));
    }

    render() {
        const {Component, pageProps} = this.props
        return (
            <div>
                <IndexPage/>
                <Component {...pageProps} {...this.state}/>
            </div>
        );
    };
}
