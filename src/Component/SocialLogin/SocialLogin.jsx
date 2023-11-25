import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const SocialLogin = () => {
    const { googleSignIn } = useAuth()

    const axiosPublic = useAxiosPublic()

const navigate =useNavigate()



    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                console.log(res.user);
                navigate('/')
                const userInfo = {
                    email: res.user?.email,
                    name: res.user?.displayName,
                    role: 'member'
                }

                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                    })
            })
    }


    return (
        <div className="my-4">
            <button
                onClick={handleGoogleSignIn}
                className="btn">
                
                Google
            </button>
        </div>
    );
};

export default SocialLogin;