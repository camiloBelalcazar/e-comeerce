import axios from "axios";


export const axiosEcommerce = axios.create({
    baseURL: 'https://e-commerce-api-v2.academlo.tech/api/v1'
})

export const getConfig = () => { 
    return {
        headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('userInfo')).token}`
        }
    }
}

/* const instance = axios.create({
    baseURL: 'https://api.example.com'
  }); */