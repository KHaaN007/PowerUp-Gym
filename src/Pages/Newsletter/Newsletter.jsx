import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Newsletter = () => {



    const axiosPublic = useAxiosPublic();


    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()


    const onSubmit = async (data) => {

       



        console.log(data);
        
            
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                        }




                        axiosPublic.post('/newsletter', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log("Data Inserted");
                                    reset()
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "User Create Successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                }
                            })
                     

    console.log(watch("email",'name'))

                        }



    return (
        <div>
            <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-40 before:z-10">
                <img src="https://i.ibb.co/LgdMB8n/21399591-6471716.jpg" alt="Banner Image" className="absolute  inset-0 w-full h-full object-cover object-bottom" />
                <div className="min-h-[400px] relative z-20 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center text-white px-6 py-10">
                    <form 
                     onSubmit={handleSubmit(onSubmit)}
                    className="max-w-3xl mx-auto text-center">
                        <h3 className="md:text-5xl text-4xl font-extrabold">Subscribe to Our Newsletter</h3>
                        <p className="text-sm mt-6">Subscribe to our newsletter and stay up to date with the latest news,
                            updates, and exclusive offers. Get valuable insights. Join our community today!</p>
                        <div className="max-w-lg mx-auto bg-gray-100 flex px-2 py-1 rounded-full text-left mt-12 border focus-within:border-gray-700">
                            <input
                            {...register("name", { required: true })}
                                type='text'
                                placeholder='Enter your Name'
                                className="w-full outline-none bg-transparent text-sm text-[#333] px-4 py-3" />
                        </div>
                        <div className="max-w-lg mx-auto bg-gray-100 flex px-2 py-1 rounded-full text-left my-5 border focus-within:border-gray-700">
                            <input
                            {...register("email", { required: true })}
                                type='email'
                                placeholder='Enter your email'
                                className="w-full outline-none bg-transparent text-sm text-[#333] px-4 py-3" />
                        </div>
                        <button className="btn border-0 text-2xl px-6   py-2 bg-gradient-to-r rounded-md shadow-2xl text-white font-serif from-blue-600 to-indigo-900">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;