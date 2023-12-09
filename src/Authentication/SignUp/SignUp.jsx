import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import SocialLogin from "../../Component/SocialLogin/SocialLogin";


const SignUp = () => {

    const navigate = useNavigate()

    const axiosPublic = useAxiosPublic();


    const { setUser } = useAuth()

    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`




    const {
        register,
        handleSubmit,
        reset,

        formState: { errors },
    } = useForm()



    const { createUser, updateUserProfile } = useContext(AuthContext)

    const onSubmit = async (data) => {
        console.log(data)

        // upload to imagebb and get a url}
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log(res.data);
        if (res.data.success) {

            createUser(data.email, data.password)
                .then(result => {
                    console.log(result.user);
                    updateUserProfile(data.name, res.data.data.display_url)
                        .then(() => {
                            setUser((prevUser) => {
                                prevUser.displayName = data.name;
                                prevUser.photoURL = res.data.data.display_url;
                                return { ...prevUser };
                            })
                            // create user entry in database
                            const userInfo = {
                                name: data.name,
                                email: data.email,
                                image: res.data.data.display_url ?res.data.data.display_url : data.photoURL,
                                role: 'member'
                            }
                            axiosPublic.post('/users', userInfo)
                                .then(res => {
                                    if (res.data.insertedId) {
                                        reset();
                                        Swal.fire({
                                            position: "center",
                                            icon: "success",
                                            title: "User created successfully",
                                            showConfirmButton: false,
                                            timer: 1500
                                        });
                                    }
                                    navigate('/');
                                })
                        })
                        .catch(() => {
                            console.log('error');
                        })
                })
                .catch(error => {
                    console.error(error)
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Email already in use!",
                        footer: '<a href="#">Try with a different email adress</a>'
                    });
                })

        }

    }



    return (
        <div
            style={{ backgroundImage: "url('https://i.ibb.co/W3JJBw9/5850167-3000208.jpg')" }}
            className="bg-cover bg-center h-screen p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800">
            {/* <!-- component --> */}
            {/* <!-- page --> */}
            <div
                className="mx-auto flex min-h-screen w-full items-center justify-center text-white"
            >
                {/* <!-- component --> */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex w-[30rem] flex-col space-y-10  rounded-lg p-10 shadow-2xl bg-black bg-opacity-30 backdrop-blur">
                    <div className="text-center text-4xl border-2 rounded-lg font-medium">SignUp</div>
                    <SocialLogin></SocialLogin>

                    <div
                        className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
                    >
                        <input
                            {...register("name", { required: true })}

                            type="text"
                            placeholder="Username"
                            className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                        />
                        {errors.name && <span className="text-red-400">This Name  field is required</span>}
                    </div>

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
                        className="w-full transform border-2 border-r-2  bg-transparent text-lg duration-300 focus-within:border-indigo-500"
                    >
                        <input
                            {...register("image", { required: true })}
                            type="file"
                            placeholder="Image"
                            className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                        />
                        {errors.email && <span className="text-red-400">This Image  field is required</span>}
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
                        Have account ?

                        <Link
                            to='/login'
                            href="#"
                            className="font-medium text-indigo-300 underline-offset-4 hover:underline"
                        > SignIn
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;