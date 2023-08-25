import AccessTokenService from "./AccessTokenService";
import Router from "next/router";

class API {
    getDomain() {
        return process.env.NEXT_PUBLIC_API_URL;
    }

    getApiDomain() {
        return this.getDomain();
    }

    async CreateMarker(method, route, user_data ,data = null, auth = true) {
        let api = this.getApiDomain();
        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        if (auth) {
            let accessToken = AccessTokenService.get();
            accessToken = accessToken ? accessToken : '';
            if (accessToken)
                headers['Authorization'] = 'Bearer ' + accessToken;
        }
        if (method !== "GET" && data) {
            data = JSON.stringify(data);
            data = '{ \"user\": {\"id\": \"'+ user_data.id +'\", \"roles\": [\"'+ user_data.roles +'\"] }, \"trail\" : '+ data + '}';
            console.log(data);
        }
        else
            data = null;
        try {
        let url = api + route;
        let response = await fetch(url, {
                method: method,
                headers: headers,
                body: data,
            });
            console.log(data);
            return {
                data: await response.json(),
                status: response.status,
            };
        } catch (e) {
            await Router.push('/');
            return {
                data: null,
                status: -1,
            };
        }
    }

    async send(method, route, data = null, auth = true) {
        let api = this.getApiDomain();
        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        if (auth) {
            let accessToken = AccessTokenService.get();
            accessToken = accessToken ? accessToken : '';
            if (accessToken)
                headers['Authorization'] = 'Bearer ' + accessToken;
        }
        if (method !== "GET" && data) {
            data = JSON.stringify(data);
            data = "{ \"user\": "+ data + "}";
            console.log(data);
        }
        else
            data = null;
        try {
        let url = api + route;
        let response = await fetch(url, {
                method: method,
                headers: headers,
                body: data,
            });
            //if (response.status === 401) {
            //    AccessTokenService.remove();
            //    return {
            //        data: await response.json(),
            //        status: response.status,
            //    };
            //} 
            console.log(data);
            return {
                data: await response.json(),
                status: response.status,
            };
        } catch (e) {
            await Router.push('/');
            return {
                data: null,
                status: -1,
            };
        }
    }
}

const service = new API();
export default service;
