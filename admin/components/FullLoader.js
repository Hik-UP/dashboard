import React from "react";
import Layout from "./Layout";
import {Spin} from "antd";

const FullLoader = () => {
    return (
        <Layout>
            <div style={{textAlign: 'center', paddingTop: 200}}>
                <Spin/>
            </div>
        </Layout>
    );
}

export default FullLoader;
