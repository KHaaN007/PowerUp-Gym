import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";






const useNewsletter = () => {

    const axiosPublic = useAxiosPublic()


    const { data: Newsletter = [], isPending: loading, refetch } = useQuery({
        queryKey: ['Newsletter'],
        queryFn: async () => {
            const res = await axiosPublic.get('/newsletter');
            return res.data;
        }
    })
    return [Newsletter, loading, refetch];


}
export default useNewsletter;
