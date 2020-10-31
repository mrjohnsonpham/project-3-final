import axios from 'axios';

const API = {
    testApi: ()=>{
        return axios.get("/api/test-api");
    }
}
export default API;