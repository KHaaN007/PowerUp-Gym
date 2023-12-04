import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";





const usePayment = () => {

    // const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()


    const { data: payment = [], isPending: loading, refetch } = useQuery({
        queryKey: ['payment'],
        queryFn: async () => {
            const res = await axiosSecure.get('/payment');
            return res.data;
        }
    })
    return [payment, loading, refetch];



}

export default usePayment;