import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";





const usePackage = () => {

    // const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()


    const { data: Package = [], isPending: loading, refetch } = useQuery({
        queryKey: ['Package'],
        queryFn: async () => {
            const res = await axiosSecure.get('/package');
            return res.data;
        }
    })
    return [Package, loading, refetch];



}

export default usePackage;