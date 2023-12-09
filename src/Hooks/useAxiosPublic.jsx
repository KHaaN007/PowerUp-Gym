import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://mern-stack-website-server.vercel.app'
})





const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;