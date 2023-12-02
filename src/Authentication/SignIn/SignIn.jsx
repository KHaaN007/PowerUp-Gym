import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Component/SocialLogin/SocialLogin";




const SignIn = () => {

    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || '/'






    const {
        register,
        handleSubmit,
       

        formState: { errors },
    } = useForm()



    const { signIN } = useContext(AuthContext)

    const onSubmit = async (data) => {
        console.log(data)
        signIN(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Log in successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please put correct email and password!',
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            })


    }



    return (
        <div
        style={{ backgroundImage: "url('https://i.ibb.co/W3JJBw9/5850167-3000208.jpg')" }}
        className="bg-cover bg-center h-screen p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800">
            {/* <!-- component --> */}
            {/* <!-- page --> */}
            <div>
            <div
                className="mx-auto flex min-h-screen w-full items-center justify-center  text-white"
                >
                {/* <!-- component --> */}
                    
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex w-[30rem] flex-col space-y-10  rounded-lg p-10 shadow-2xl bg-black bg-opacity-30 backdrop-blur">
                    <div className="text-center text-4xl font-medium border-2 rounded-lg">SignIn</div>


                    <SocialLogin></SocialLogin>
                    <div
                        className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
                    >
                        <input
                            {...register("email", { required: true })}
                            type="text"
                            placeholder="Email or Username"
                            className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                        />
                        {errors.email && <span className="text-red-400">This Email  field is required</span>}
                    </div>
                    <div
                        className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
                    >
                        <input
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters long",
                                },
                                maxLength: {
                                    value: 20,
                                    message: "Password must not exceed 20 characters",
                                },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d]{0,}[^\s]{1}[A-Za-z\d@$!%*?&#]{0,}$/,
                                    message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and exactly one of the special characters (@, $, !, %, *, ?, &, #)",
                                },
                            })}
                            type="password"
                            placeholder="Password"
                            className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
                        />
                        {errors.password && (
                            <p className="text-red-500">{errors.password.message}</p>
                        )}

                    </div>

                    <button
                        className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400"
                    >
                        Register
                    </button>



                    <p className="text-center text-lg">
                        Create an account ?

                        <Link
                            to='/signUp'
                            href="#"
                            className="font-medium text-indigo-300 underline-offset-4 hover:underline"
                        >  SignUP
                        </Link>
                    </p>
                </form>
            </div>
            </div>
        </div>
    );
};

export default SignIn;