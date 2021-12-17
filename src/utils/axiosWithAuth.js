import axios from 'axios';

const axiosWithAuth = ()=> {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: "https://localhost:5000"
    })
}

export default axiosWithAuth;

//Task List:
//1. Complete axiosWithAuth