
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

import { useForm } from "react-hook-form";

import AdsBanner from "../../../../Component/AdsBanner/AdsBanner";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { Input } from "@material-tailwind/react";
import useAuth from "../../../../Hooks/useAuth";

const BecomeATrainer = () => {

    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    console.log(user?.email);

    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        console.log(data);
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        // console.log(res.data);
        if (res.data.success) {
            const beAtrainer = {
                name: data.name,
                email: data.email,
                age: data.email,
                status: 'Applied Trainer',
                availableTimeInAweek: data.availableTimeInAweek,
                availableTimeInADay: data.availableTimeInADay,
                skills: data.skills,
                experience: data.experience,
                profileImage: res.data.data.display_url,
            }
            const beAtrainerRes = await axiosSecure.post('/beAtrainer', beAtrainer)
            console.log(beAtrainerRes);
            if (beAtrainerRes.data.insertedId) {
                // Show Success PopUp
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} Your Request Trainer Is Successfully Sent`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }

    }




    return (
        <div>
            <AdsBanner></AdsBanner>
            <div
                style={{ backgroundImage: "url('https://i.ibb.co/JqB4QPY/30123415-7673364.jpg')" }}
                className="bg-cover bg-center h-screen  p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-5 lg:mx-20"
                >
                    <div className="full">
                        <Input
                            color="blue"
                            className='text-white'
                            {...register("name", { required: true })}
                            label="Name" />
                    </div>
                    <div className="full">
                        <Input
                            disabled
                            defaultValue={user?.email}
                            color="blue"
                            className='text-black'
                            {...register("email", { required: true })}
                            label="Email" />
                    </div>
                    <div className="full">
                        <Input
                            type="number"
                            color="blue"
                            className='text-white'
                            {...register("age", { required: true })}
                            label="Age" />
                    </div>
                    <div className="full">
                        <Input
                            color="blue"
                            className='text-white'
                            type="number"
                            {...register("availableTimeInAweek", { required: true })}
                            label="Available Time in a week" />
                    </div>
                    <div className="full">
                        <Input
                            color="blue"
                            className='text-white'
                            type="number"
                            {...register("experience", { required: true })}
                            label="Year Of Experience" />
                    </div>
                    <div className="full">
                        <Input
                            color="blue"
                            className='text-white'
                            type="number"
                            {...register("availableTimeInADay", { required: true })}
                            label="Available Time in a Day" />
                    </div>
                    <div className="full">

                        <label>
                            <input
                                className="my-5"
                                type="checkbox"
                                value="Fitness Training"
                                {...register("skills")}
                            />
                            <span className="text-xl ml-2 mr-10  text-white ">Fitness Training</span>
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Fitness Training"
                                {...register("skills")}
                            />
                            <span className="text-xl ml-2 mr-5 text-white">Yoga</span>
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Weightlifting"
                                {...register("skills")}
                            />
                            <span className="text-xl ml-2 mr-5 text-white">Weightlifting</span>
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Martial Arts"
                                {...register("skills")}
                            />
                            <span className="text-xl ml-2 mr-5 text-white">Martial Arts</span>
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Nutrition Counseling"
                                {...register("skills")}
                            />
                            <span className="text-xl ml-2 mr-5 text-white">Nutrition Counseling</span>
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Bodyweight Exercises"
                                {...register("skills")}
                            />
                            <span className="text-xl ml-2 mr-5 text-white">Bodyweight Exercises</span>
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Barre Workouts"
                                {...register("skills")}
                            />
                            <span className="text-xl ml-2 mr-5 text-white">Barre Workouts</span>
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Kettlebell Training"
                                {...register("skills")}
                            />
                            <span className="text-xl ml-2 mr-5 text-white">Kettlebell Training</span>
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Aquatic Fitness"
                                {...register("skills")}
                            />
                            <span className="text-xl ml-2 mr-5 text-white">Aquatic Fitness</span>
                        </label>
                    </div>


                    {/* <div className="full flex gap-2">

                        <div>
                            <label>
                                <input
                                    className="my-5"
                                    type="checkbox"
                                    value="9"
                                    {...register("start")}
                                />
                                <span className="text-2xl  ml-2  text-white ">9</span>
                            </label>
                            <p className="inline-block text-white mx-2">to</p>
                            <label>
                                <input
                                    className="my-5"
                                    type="checkbox"
                                    value="10"
                                    {...register("end")}
                                />
                                <span className="text-2xl mr-4 ml-2  text-white ">10</span>
                            </label>
                            <p className="text-2xl text-white ml-10">or</p>
                            <label>
                                <input
                                    className="my-5"
                                    type="checkbox"
                                    value="10"
                                    {...register("start")}
                                />
                                <span className="text-2xl  ml-2  text-white ">10</span>
                            </label>
                            <p className="inline-block text-white mx-2">to</p>
                            <label>
                                <input
                                    className="my-5"
                                    type="checkbox"
                                    value="end"
                                    {...register("11")}
                                />
                                <span className="text-2xl mr-4 ml-2  text-white ">11</span>
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    className="my-5"
                                    type="checkbox"
                                    value="11"
                                    {...register("start")}
                                />
                                <span className="text-2xl  ml-2  text-white ">11</span>
                            </label>
                            <p className="inline-block text-white mx-2">to</p>
                            <label>
                                <input
                                    className="my-5"
                                    type="checkbox"
                                    value="12"
                                    {...register("end")}
                                />
                                <span className="text-2xl mr-4 ml-2  text-white ">12</span>
                            </label>
                            <p className="text-2xl text-white ml-10">or</p>
                            <label>
                                <input
                                    className="my-5"
                                    type="checkbox"
                                    value="12"
                                    {...register("start")}
                                />
                                <span className="text-2xl  ml-2  text-white ">12</span>
                            </label>
                            <p className="inline-block text-white mx-2">to</p>
                            <label>
                                <input
                                    className="my-5"
                                    type="checkbox"
                                    value="end"
                                    {...register("end")}
                                />
                                <span className="text-2xl mr-4 ml-2  text-white ">13</span>
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    className="my-5"
                                    type="checkbox"
                                    value="start"
                                    {...register("start")}
                                />
                                <span className="text-2xl  ml-2  text-white ">13</span>
                            </label>
                            <p className="inline-block text-white mx-2">to</p>
                            <label>
                                <input
                                    className="my-5"
                                    type="checkbox"
                                    value="end"
                                    {...register("end")}
                                />
                                <span className="text-2xl mr-4 ml-2  text-white ">14</span>
                            </label>
                            <p className="text-2xl text-white ml-10">or</p>
                            <label>
                                <input
                                    className="my-5"
                                    type="checkbox"
                                    value="start"
                                    {...register("start")}
                                />
                                <span className="text-2xl  ml-2  text-white ">14</span>
                            </label>
                            <p className="inline-block text-white mx-2">to</p>
                            <label>
                                <input
                                    className="my-5"
                                    type="checkbox"
                                    value="end"
                                    {...register("end")}
                                />
                                <span className="text-2xl mr-4 ml-2  text-white ">15</span>
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    className="my-5"
                                    type="checkbox"
                                    value="start"
                                    {...register("start")}
                                />
                                <span className="text-2xl  ml-2  text-white ">15</span>
                            </label>
                            <p className="inline-block text-white mx-2">to</p>
                            <label>
                                <input
                                    className="my-5"
                                    type="checkbox"
                                    value="end"
                                    {...register("end")}
                                />
                                <span className="text-2xl mr-4 ml-2  text-white ">16</span>
                            </label>
                            <p className="text-2xl text-white ml-10">or</p>
                            <label>
                                <input
                                    className="my-5"
                                    type="checkbox"
                                    value="start"
                                    {...register("start")}
                                />
                                <span className="text-2xl  ml-2  text-white ">16</span>
                            </label>
                            <p className="inline-block text-white mx-2">to</p>
                            <label>
                                <input
                                    className="my-5"
                                    type="checkbox"
                                    value="end"
                                    {...register("end")}
                                />
                                <span className="text-2xl mr-4 ml-2  text-white ">17</span>
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    className="my-5"
                                    type="checkbox"
                                    value="start"
                                    {...register("start")}
                                />
                                <span className="text-2xl  ml-2  text-white ">17</span>
                            </label>
                            <p className="inline-block text-white mx-2">to</p>
                            <label>
                                <input
                                    className="my-5"
                                    type="checkbox"
                                    value="end"
                                    {...register("end")}
                                />
                                <span className="text-2xl mr-4 ml-2  text-white ">18</span>
                            </label>
                            <p className="text-2xl text-white ml-10">or</p>
                            <label>
                                <input
                                    className="my-5"
                                    type="checkbox"
                                    value="start"
                                    {...register("start")}
                                />
                                <span className="text-2xl  ml-2  text-white ">18</span>
                            </label>
                            <p className="inline-block text-white mx-2">to</p>
                            <label>
                                <input
                                    className="my-5"
                                    type="checkbox"
                                    value="end"
                                    {...register("end")}
                                />
                                <span className="text-2xl mr-4 ml-2  text-white ">19</span>
                            </label>
                        </div>





                    </div> */}



                    <div
                        className="w-full transform  bg-transparent text-lg duration-300 focus-within:border-indigo-500"
                    >
                        <input
                            color="blue"

                            {...register("image", { required: true })}
                            type="file"
                            placeholder="Image"
                            className=" border-none bg-transparent outline-none placeholder:italic focus:outline-none text-white"
                        />
                    </div>
                    <div>
                        <button className="btn text-2xl px-6  py-2 bg-gradient-to-r rounded-md shadow-2xl text-white font-serif from-blue-600 to-indigo-900">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BecomeATrainer;