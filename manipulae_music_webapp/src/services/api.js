import axios from "axios";

const api = axios.create({
    baseURL: "https://deploy-manipulae-music.vercel.app",
});

export default api;
