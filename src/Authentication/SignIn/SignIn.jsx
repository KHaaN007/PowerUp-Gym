import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../Component/SocialLogin/SocialLogin";

const SignIn = () => {

    const { signIN } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || '/'

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => {
        console.log(data)
        signIN(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login Success",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
    }

    console.log(watch("email"))



    return (
        <div>

            {/* <!-- component --> */}
            {/* <!-- page --> */}
            <div>

                {/* <!-- component --> */}
                {/* <!-- page --> */}
                <div
                    className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white"
                >
                    {/* <!-- component --> */}
                    <div


                        className="flex w-[30rem] flex-col space-y-10">
                        <div className="text-center text-4xl font-medium">SignIn</div>
                        <SocialLogin></SocialLogin>

                        <from
                            onSubmit={handleSubmit(onSubmit)}
                            className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
                        >
                            <input
                                {...register("email", { required: true })}
                                type="text"
                                placeholder="Email or Username"
                                className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                            />
                            {errors.email && <span className="text-red-400">This Email  field is required</span>}
                        </from>
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
                            LOG IN
                        </button>



                        <p className="text-center text-lg">
                            Have account ?

                            <Link
                                to='/signUp'
                                href="#"
                                className="font-medium text-indigo-500 underline-offset-4 hover:underline"
                            > Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;