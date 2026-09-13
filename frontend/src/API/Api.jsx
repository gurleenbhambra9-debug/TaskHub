import axios from 'axios'


const API= axios.create({
    baseURL:'http://localhost:1000'
})

API.interceptors.request.use((config)=>{
    const token=JSON.parse(localStorage.getItem("token"))

    if(token){
        config.headers.Authorization=`Bearer ${token}`
    }

    return config
})