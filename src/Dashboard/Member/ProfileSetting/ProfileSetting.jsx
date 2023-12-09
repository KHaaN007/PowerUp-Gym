
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useUser from "../../../Hooks/useUser";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";




const ProfileSetting = () => {

    const { user } = useAuth()
    const [users] = useUser();

    const userEmail = users.find(member => member.email === user.email)
    console.log(userEmail);




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
            const userInfo = {
                name: data.name,
                image: res.data.data.display_url 
            }

            axiosPublic.patch(`/users/${userEmail.email}`, userInfo)


            // data?.url(data.name, res.data.data.display_url)
            //     .then(() => {
            //         setUser((prevUser) => {
            //             prevUser.displayName = data.name;
            //             prevUser.photoURL = res.data.data.display_url;
            //             return { ...prevUser };
            //         })
            //         // create user entry in database
                    

                   

            //     })
        }

    }








    return (
        <div>
            {/* <!-- component --> */}
            <div className="mx-auto right-0 mt-2 h-screen">
                <div
                        key={userEmail?._id}
                        className="bg-white rounded overflow-hidden shadow-lg">
                        <div className="text-center p-6 bg-gradient-to-r from-blue-600 to-indigo-900 m-2 rounded-2xl shadow-2xl border-b">
                            <img className="h-24 w-24 text-white rounded-full mx-auto" width="32" height="32" src={userEmail?.image} />
                            <p className="pt-2 text-lg font-semibold text-gray-50">{userEmail?.name}</p>
                            <p className="text-sm text-gray-100">{userEmail?.email}</p>
                            <div className="mt-5">
                                <a
                                    className="border rounded-full py-2 px-4 text-lg font-semibold text-gray-100"
                                >
                                    Manage your Account
                                </a>
                            </div>
                        </div>
                    </div> 
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex  flex-col space-y-10 m-10 rounded-lg p-10 shadow-2xl bg-black bg-opacity-30 backdrop-blur">
                    <div className="text-center text-4xl  border-2 rounded-lg font-medium">Update Profile</div>

                    <div
                        className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
                    >
                        <input
                            {...register("name", { required: true })}

                            type="text"
                            placeholder="Username"
                            className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                        />
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

                    </div>


                    <button
                        className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400"
                    >
                        Update Profile
                    </button>


                </form>
            </div>

        </div>
    );
};

export default ProfileSetting;