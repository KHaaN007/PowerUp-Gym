import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useTrainerVerify = () => {
    const { user, loading } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: isTrainer, isPending: isTrainerLoading } = useQuery({
        queryKey: [user?.email, 'isTrainer'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/trainer/${user?.email}`)
            // console.log('Response from User Admin', res.data);   
            return res.data?.trainer
        },
        // enabled: !!user?.email,
    })
    return [isTrainer, isTrainerLoading]
};

export default useTrainerVerify;