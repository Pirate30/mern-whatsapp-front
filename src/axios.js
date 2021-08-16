import axios from "axios";

const instance = axios.create({
    baseURL:"http://localhost:8800/api/wp/",
})

// module.exports = instance;
export default instance