
import Swal from "sweetalert2";


import { useForm } from "react-hook-form";


import { Input } from "@material-tailwind/react";

import useAxiosSecure from "../../../Hooks/useAxiosSecure";

import useAuth from "../../../Hooks/useAuth";

const AddClass = () => {

    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    console.log(user?.displayName);



    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        console.log(data.email);
        const addClass = {
            trainer_name: data.name,
            class_name: data.class,
            instruction: data.instruction,
            details: data.details,
            email: data.email,

        }

        const addClassRes = await axiosSecure.post('/classes', addClass)
        if (addClassRes.data.insertedId) {
            reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user?.displayName} Your Class Is Successfully ADDED`,
                showConfirmButton: false,
                timer: 1500
            });
        }


    }




    return (
        <div>
            <div
                style={{ backgroundImage: "url('https://i.ibb.co/JqB4QPY/30123415-7673364.jpg')" }}
                className="bg-cover bg-center h-screen  p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800">
                <h2 className="sm:text-6xl  max-w-6xl text-3xl lg:py-10 font-extrabold mb-16 text-gray-400 p-5  rounded-lg">ADD NEW <span className='text-blue-400'>CLASS</span></h2>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-5 lg:mx-20"
                >
                    <div className="full">
                        <Input
                            color="blue"
                            disabled
                            defaultValue={user?.displayName}
                            {...register("name",)}
                            label="Name" />
                    </div>
                    <div className="full">
                        <Input
                            disabled
                            defaultValue={user?.email}
                            color="blue"
                            className='text-black'
                            {...register("email",)}
                            label="Email" />
                    </div>
                    <div className="full">
                        <Input
                            color="blue"
                            className='text-white'
                            {...register("class",)}
                            label="Class Name" />
                    </div>
                    <div className="full">
                        <Input
                            color="blue"
                            className='text-white'
                            {...register("instruction",)}
                            label="Instruction" />
                    </div>
                    <div className="full">
                        <Input
                            color="blue"
                            className='text-white'
                            {...register("details",)}
                            label="Details" />
                    </div>

                    <div>
                        <button className="btn text-2xl px-6  py-2 bg-gradient-to-r rounded-md shadow-2xl text-white font-serif from-blue-600 to-indigo-900">
                            ADD CLASS
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddClass;