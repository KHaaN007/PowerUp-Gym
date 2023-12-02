
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
        console.log(data.email);
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        if (res.data.success) {
            const beAtrainer = {
                name: data.name,
                email: user.email,
                age: data.email,
                status: 'Applied Trainer',
                availableTimeInAweek: parseInt(data.availableTimeInAweek),
                availableSlotsPerDay: parseInt(data.availableTimeInADay),
                availableTimeSlots: data.timeSolt.map(time => ({ "timeSolt": time })),
                skills: data.skills,
                experience: parseInt(data.experience),
                profileImage: res.data.data.display_url,
            }

            const beAtrainerRes = await axiosSecure.post('/beAtrainer', beAtrainer)
            if (beAtrainerRes.data.insertedId) {
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
                            {...register("name",)}
                            label="Name" />
                    </div>
                    <div className="full">
                        <Input
                            // disabled
                            // defaultValue={user?.email}
                            color="blue"
                            className='text-black'
                            {...register("email",)}
                            label="Email" />
                    </div>
                    <div className="full">
                        <Input
                            type="number"
                            color="blue"
                            className='text-white'
                            {...register("age",)}
                            label="Age" />
                    </div>
                    <div className="full">
                        <Input
                            color="blue"
                            className='text-white'
                            type="number"
                            {...register("availableTimeInAweek",)}
                            label="Available Time in a week" />
                    </div>
                    <div className="full">
                        <Input
                            color="blue"
                            className='text-white'
                            type="number"
                            {...register("experience",)}
                            label="Year Of Experience" />
                    </div>
                    <div className="full">
                        <Input
                            color="blue"
                            className='text-white'
                            type="number"
                            {...register("availableTimeInADay",)}
                            label="Available Time in a Day" />
                    </div>
                    <div className=" bg-transparent shadow-2xl py-2 rounded-xl">
                        <h1 className="text-white text-xl">Add Your Skills</h1>
                        <label>
                            <input
                                className="my-5"
                                type="checkbox"
                                value="Fitness"
                                {...register("skills")}
                            />
                            <span className="text-lg ml-2 mr-5 text-gray-400 ">Fitness</span>
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Yoga"
                                {...register("skills")}
                            />
                            <span className="text-lg ml-2 mr-4 text-gray-400">Yoga</span>
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Weightlifting"
                                {...register("skills")}
                            />
                            <span className="text-lg ml-2 mr-4 text-gray-400">Weightlifting</span>
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Martial Arts"
                                {...register("skills")}
                            />
                            <span className="text-lg ml-2 mr-4 text-gray-400">Martial Arts</span>
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Nutrition Counseling"
                                {...register("skills")}
                            />
                            <span className="text-lg ml-2 mr-4 text-gray-400">Nutrition Counseling</span>
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Bodyweight"
                                {...register("skills")}
                            />
                            <span className="text-lg ml-2 mr-4 text-gray-400">Bodyweight</span>
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Barre Workouts"
                                {...register("skills")}
                            />
                            <span className="text-lg ml-2 mr-4 text-gray-400">Barre Workouts</span>
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Kettlebell Training"
                                {...register("skills")}
                            />
                            <span className="text-lg ml-2 mr-4 text-gray-400">Kettlebell Training</span>
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Aquatic Fitness"
                                {...register("skills")}
                            />
                            <span className="text-lg ml-2 mr-4 text-gray-400">Aquatic Fitness</span>
                        </label>
                    </div>


                    <div>
                        <h1 className="text-white text-xl">Add Your Schedule</h1>
                        <div>

                            <div className="full flex gap-8 flex-wrap bg-transparent shadow-2xl py-2 rounded-xl">
                                <label>
                                    <input
                                        className="my-5"
                                        type="checkbox"
                                        value="8:00AM - 9:00PM"
                                        {...register("timeSolt")}
                                    />
                                    <span className="text-lg ml-2 text-gray-400 ">8:00AM - 9:00PM</span>
                                </label>
                                <label>
                                    <input
                                        className="my-5"
                                        type="checkbox"
                                        value="9:00AM - 10:00PM"
                                        {...register("timeSolt")}
                                    />
                                    <span className="text-lg ml-2 text-gray-400 ">9:00AM - 10:00PM</span>
                                </label>
                                <label>
                                    <input
                                        className="my-5"
                                        type="checkbox"
                                        value="10:00AM - 11:00PM"
                                        {...register("timeSolt")}
                                    />
                                    <span className="text-lg ml-2 text-gray-400 ">10:00AM - 11:00PM</span>
                                </label>
                                <label>
                                    <input
                                        className="my-5"
                                        type="checkbox"
                                        value="11:00AM - 12:00PM"
                                        {...register("timeSolt")}
                                    />
                                    <span className="text-lg ml-2 text-gray-400 ">11:00AM - 12:00PM</span>
                                </label>
                                <label>
                                    <input
                                        className="my-"
                                        type="checkbox"
                                        value="12:00PM - 1:00PM"
                                        {...register("timeSolt")}
                                    />
                                    <span className="text-lg ml-2 text-gray-400 ">12:00PM - 1:00PM</span>
                                </label>
                                <label>
                                    <input
                                        className="my-"
                                        type="checkbox"
                                        value="1:00PM - 2:00PM"
                                        {...register("timeSolt")}
                                    />
                                    <span className="text-lg ml-2 text-gray-400 ">1:00PM - 2:00PM</span>
                                </label>
                                <label>
                                    <input
                                        className="my-"
                                        type="checkbox"
                                        value="1:00PM - 2:00PM"
                                        {...register("timeSolt")}
                                    />
                                    <span className="text-lg ml-2 text-gray-400 ">2:00PM - 3:00PM</span>
                                </label>
                                <label>
                                    <input
                                        className="my-"
                                        type="checkbox"
                                        value="1:00PM - 2:00PM"
                                        {...register("timeSolt")}
                                    />
                                    <span className="text-lg ml-2 text-gray-400 ">3:00PM - 4:00PM</span>
                                </label>
                                <label>
                                    <input
                                        className="my-"
                                        type="checkbox"
                                        value="1:00PM - 2:00PM"
                                        {...register("timeSolt")}
                                    />
                                    <span className="text-lg ml-2 text-gray-400 ">4:00PM - 5:00PM</span>
                                </label>
                                <label>
                                    <input
                                        className="my-"
                                        type="checkbox"
                                        value="1:00PM - 2:00PM"
                                        {...register("timeSolt")}
                                    />
                                    <span className="text-lg ml-2 text-gray-400 ">5:00PM - 6:00PM</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-full transform  bg-transparent text-lg duration-300 focus-within:border-indigo-500"
                    >
                        <input
                            color="blue"

                            {...register("image",)}
                            type="file"
                            placeholder="Image"
                            className=" border-none bg-transparent outline-none placeholder:italic focus:outline-none text-white"
                        />
                    </div>
                    <div>
                        <button className="btn border-0 text-2xl px-6  py-2 bg-gradient-to-r rounded-md shadow-2xl text-white font-serif from-blue-600 to-indigo-900">
                            Apply
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BecomeATrainer;