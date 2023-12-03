const storageName2 = "user_data";

class UserDataService {
    userData = null;

    get() {
        if (this.userData)
            return this.userData;
        if (localStorage === undefined)
            return null; 
        const userData = JSON.parse(localStorage.getItem(storageName2));
        return userData;
    }

    set(userData) {
        this.userData = userData;
        delete userData.token;
        localStorage.setItem(storageName2, JSON.stringify(userData));
    }

    remove() {
        this.userData = null;
        localStorage.removeItem(storageName2);
    }
}

const service = new UserDataService();
export default service;
