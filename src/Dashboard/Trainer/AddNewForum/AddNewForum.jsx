



import Swal from "sweetalert2";


import { useForm } from "react-hook-form";


import { Input } from "@material-tailwind/react";

import useAxiosSecure from "../../../Hooks/useAxiosSecure";


import useTrainer from "../../../Hooks/useTrainer";
import useAuth from "../../../Hooks/useAuth";

const AddNewForum = () => {

    const axiosSecure = useAxiosSecure()
    const [trainers] = useTrainer()
    const { user } = useAuth()

    console.log(user);



    const currentDate = new Date();

    console.log(trainers);
    const photoUrl = trainers.filter(trainer => trainer.email === user?.email)

    console.log(photoUrl);

    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        console.log(data?.email);
        const addForum = {
            title: data.title,
            category: data.category,
            author: data.author,
            email: data.email,
            content: data.content,
            image: photoUrl.map(photo => photo?.profileImage),
            data: currentDate

        }

        // console.log(addForum);

        const articelsRes = await axiosSecure.post('/articles', addForum)
        if (articelsRes.data.insertedId) {
            reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.author} Your Blog Is Posted`,
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
                <h2 className="sm:text-6xl  max-w-6xl text-3xl lg:py-10 font-extrabold mb-16 text-gray-400 p-5  rounded-lg">ADD NEW <span className='text-blue-400'>FORUM</span></h2>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-5 lg:mx-20"
                >
                    <div className="full">
                        <Input
                            color="blue"
                            className='text-white'
                            {...register("title",)}
                            label="Title" />
                    </div>
                    <div className="full">
                        <Input
                            color="blue"
                            className='text-white'
                            {...register("category",)}
                            label="Category" />
                    </div>
                    <div className="full">
                        <Input

                            color="blue"
                            className='text-white'
                            {...register("author",)}
                            defaultValue={user?.displayName}
                            label="author" />
                    </div>
                    <div className="full">
                        <Input
                            disabled
                            color="blue"
                            className='text-black'
                            defaultValue={user?.email}
                            {...register("email",)}
                            label="Email" />
                    </div>
                    <div className="full">
                        <Input
                            color="blue"
                            className='text-white'
                            {...register("content",)}
                            label="Content" />
                    </div>

                    <div>
                        <button className="btn text-2xl px-6  py-2 bg-gradient-to-r rounded-md shadow-2xl text-white font-serif from-blue-600 to-indigo-900">
                            Apply
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddNewForum;