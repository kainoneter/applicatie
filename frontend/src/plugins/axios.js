import axios from "axios";

axios.defaults.withCredentials = true;

const api = axios.create({
    baseURL: "http://localhost:8000/api/",
});

async function getCookie() {
    const res = await axios.get('http://localhost:8000/sanctum/csrf-cookie', {
        withCredentials: true,
    });

    return res;
}

export default api;
export { getCookie }; 
