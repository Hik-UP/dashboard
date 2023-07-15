const storageName = "access_token";

class AccessTokenService {
    accessToken = null;

    get() {
        if (this.accessToken)
            return this.accessToken;

        if (localStorage === undefined)
            return null;
        const accessToken = localStorage.getItem(storageName);
        this.accessToken = accessToken
        return accessToken;
    }

    set(accessToken) {
        this.accessToken = accessToken;
        localStorage.setItem(storageName, accessToken);
    }

    remove() {
        this.accessToken = null;
        localStorage.removeItem(storageName);
    }
}

const service = new AccessTokenService();
export default service;
