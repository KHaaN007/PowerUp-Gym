/************JWT TOKEN SECURE************/



import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
})
const useAxiosSecure = () => {

    const navigate = useNavigate()


    /**UseAuth From useAuth Hook (It Found On Hooks File)**/
    const { logOut } = useAuth()



    axiosSecure.interceptors.request.use(function (config) {

        const token = localStorage.getItem('access-token')


        // console.log('Request Stopped By Interceptors', token);

        config.headers.Authorization = `Bearer ${token}`



        return config
    }, function (error) {
        return Promise.reject(error)
    })



    //Intercepts 401 and 403 Status
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async(error) => {
        const status = error.response.status

        console.log('status error in the interceptor', status);


        // For 401 or 403 Logout The User and Move the User To The Login
        if (status === 401 || status === 403) {
            await logOut();
            navigate('/login')
        }

        return Promise.reject(error)
    })





    return axiosSecure

};

export default useAxiosSecure;







