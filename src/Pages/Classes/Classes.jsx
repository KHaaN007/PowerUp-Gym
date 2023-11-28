import { useEffect } from "react";
import { useState } from "react";
import AdsBanner from "../../Component/AdsBanner/AdsBanner";
import WeeklySchedule from "./WeeklySchedule/WeeklySchedule";
import { Link } from "react-router-dom";






const classNameNamees = () => {
    const [classNames, setclassNames] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setclassNames(data))
    }, [])
    console.log(classNames);


    return (
        <div style={{ backgroundImage: "url('https://i.ibb.co/vqgM44m/21937225-gym-banner-12.jpg')" }}>
            <AdsBanner></AdsBanner>
            <WeeklySchedule></WeeklySchedule>




            <div className="">
                <h2 className="sm:text-6xl max-w-6xl text-2xl py-10 font-extrabold mb-16 bg-gradient-to-r text-from-white to-black shadow-2xl p-5 border-r-4 rounded-lg">OUR CLASSES</h2>

                <div>

                    <div

                        className="grid lg:grid-cols-3 grid-cols-1 container mx-auto gap-10 py-32">
                        {
                            classNames.map((className) => <div key={className._id}>
                                <Link
                                    to={`/classeDetail/${className._id}`}>
                                    <div className="w-full h-56 lg:h-60 rounded-xl flex justify-center items-center focus:outline-none bg-gradient-to-tr from-indigo-500 to-blue-500">
                                        <img src="./powerUplogo-removebg-preview.png" alt="Kobe Bryant" title="Kobe Bryant" className="mx-auto h-20" />
                                        <h2 className=" font-semibold font-serif p-5 bg-indigo-600 rounded-2xl shadow-2xl
                                    sm:text-3xl max-w-6xl text-2xl py-5  mb-16 bg-gradient-to-r text-from-white to-black  border-r-4 
                                    ">{className.class_name}</h2>
                                    </div>
                                </Link>
                            </div>)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default classNameNamees;