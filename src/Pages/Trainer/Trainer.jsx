import { useEffect } from "react";
import { useState } from "react";
import BeATrainer from "./BeATrainer/BeATrainer";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Link } from "react-router-dom";
AOS.init();


const Trainer = () => {

    const [trainers, setTrainers] = useState([])



    useEffect(() => {
        fetch('http://localhost:5000/trainers')
            .then(res => res.json())
            .then(data => {

                setTrainers(data)
            })
    }, [])

    // console.log(trainers);














    return (
        <div>
            <BeATrainer></BeATrainer>

            <div data-aos="fade-down" className=" md:px-6 gap-10 py-10  grid lg:grid-cols-2 grid-cols-1">
                {
                    trainers.map(trainer => <div key={trainer._id} className="mb-32 text-center rounded-xl shadow-2xl lg:text-left bg-gradient-to-r from-indigo-700 to-purple-400">
                        <div className="py-12 md:px-6 md:px-12">
                            <div className="">
                                <div className="flex grid items-center lg:grid-cols-2">
                                    <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0 ">
                                        <div
                                            className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                                            <h2 className="mb-2 text-3xl font-bold text-primary dark:text-primary-400">
                                                {trainer.name}
                                            </h2>
                                            <button disabled type="button"
                                                className="px-6 py-2.5 rounded-lg text-white text-lg tracking-wider font-semibold border-none outline-none bg-gradient-to-r from-indigo-700 to-purple-400">

                                                {trainer.experience} Years Experience
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18px" fill="#fff" className="ml-2 inline animate-spin"
                                                    viewBox="0 0 24 24">
                                                    <path fill-rule="evenodd"
                                                        d="M7.03 2.757a1 1 0 0 1 1.213-.727l4 1a1 1 0 0 1 .59 1.525l-2 3a1 1 0 0 1-1.665-1.11l.755-1.132a7.003 7.003 0 0 0-2.735 11.77 1 1 0 0 1-1.376 1.453A8.978 8.978 0 0 1 3 12a9 9 0 0 1 4.874-8l-.117-.03a1 1 0 0 1-.727-1.213zm10.092 3.017a1 1 0 0 1 1.414.038A8.973 8.973 0 0 1 21 12a9 9 0 0 1-5.068 8.098 1 1 0 0 1-.707 1.864l-3.5-1a1 1 0 0 1-.557-1.517l2-3a1 1 0 0 1 1.664 1.11l-.755 1.132a7.003 7.003 0 0 0 3.006-11.5 1 1 0 0 1 .039-1.413z"
                                                        clip-rule="evenodd" data-original="#000000" />
                                                </svg>
                                            </button>


                                            <button disabled className="btn text-2xl my-5 px-6 disabled  py-2 bg-gradient-to-r rounded-md shadow-2xl text-white font-serif from-blue-600 to-indigo-900">Available Slot Per Day {trainer.availableSlotsPerDay}</button>

                                            {/* Social Icon */}
                                            <div>
                                                <div className="mt-6 flex justify-between">
                                                    <div className="bg-gray-100 hover:bg-gray-200 w-12 h-12 flex items-center justify-center rounded-full cursor-pointer">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="26px" viewBox="0 0 512 512">
                                                            <path fill-rule="evenodd"
                                                                d="M256.612 13.686C119.557 13.686 8.2 124.223 8.2 261.489c0 137.259 111.357 247.796 248.412 247.796S503.8 398.747 503.8 261.489c0-137.266-110.133-247.803-247.188-247.803zm19.579 314.61c-18.355-1.217-25.698-10.93-40.382-19.435-7.342 41.296-17.132 80.165-45.277 100.817-8.566-61.948 12.237-108.104 22.027-157.91-17.132-27.938 2.447-86.242 37.934-71.668 44.054 17.008-37.934 106.894 17.132 117.824 58.738 12.148 81.988-100.816 46.501-137.259-52.62-52.233-151.74-1.216-139.502 74.095 3.67 18.225 22.027 24.295 8.566 49.807-34.264-7.287-44.054-34.016-42.83-68.025 2.447-57.093 51.395-97.18 101.567-103.25 62.409-7.287 121.147 23.078 128.489 81.382 9.79 66.815-28.145 138.483-94.225 133.622z"
                                                                data-original="#000000" />
                                                        </svg>
                                                    </div>
                                                    <div className="bg-gray-100 hover:bg-gray-200 w-12 h-12 flex items-center justify-center rounded-full cursor-pointer">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="26px" viewBox="0 0 512 512">
                                                            <path d="M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0"
                                                                data-original="#000000" />
                                                            <path
                                                                d="M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0"
                                                                data-original="#000000" />
                                                            <path
                                                                d="M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0"
                                                                data-original="#000000" />
                                                        </svg>
                                                    </div>
                                                    <div className="bg-gray-100 hover:bg-gray-200 w-12 h-12 flex items-center justify-center rounded-full cursor-pointer">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="26px" viewBox="0 0 512 512">
                                                            <path fill="#333"
                                                                d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                                                                data-original="#03a9f4" />
                                                        </svg>
                                                    </div>
                                                    <div className="bg-gray-100 hover:bg-gray-200 w-12 h-12 flex items-center justify-center rounded-full cursor-pointer">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="26px" viewBox="0 0 682.667 682.667">
                                                            <path
                                                                d="M604.672 0H35.297C15.8.012-.003 15.824 0 35.328v569.375C.012 624.2 15.824 640.003 35.328 640h306.547V392.5H258.75v-96.875h83.125v-71.293c0-82.676 50.473-127.676 124.223-127.676 35.324 0 65.68 2.633 74.527 3.809v86.41H489.77c-40.125 0-47.895 19.066-47.895 47.05v61.7h95.938l-12.5 96.875h-83.438V640h162.797c19.508.004 35.324-15.805 35.328-35.313V35.298C639.992 15.8 624.176-.003 604.672 0zm0 0"
                                                                data-original="#000000" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>

                                            <Link to={`/trainerDetail/${trainer._id}`}>
                                                <button className="relative mt-8 flex h-[50px] w-40 items-center justify-center overflow-hidden bg-blue-600 font-medium text-white shadow-2xl transition-all rounded-lg duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px]">
                                                    <span className="relative z-10">Know More</span>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="md:mb-12 lg:mb-0">
                                        <img src={trainer.profileImage}
                                            className="lg:rotate-[6deg] w-full rounded-lg shadow-lg dark:shadow-black/20 h-[620px]" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Trainer;