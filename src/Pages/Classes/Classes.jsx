import { useEffect } from "react";
import { useState } from "react";
import AdsBanner from "../../Component/AdsBanner/AdsBanner";
import WeeklySchedule from "./WeeklySchedule/WeeklySchedule";






const classNameNamees = () => {
    const [classNames, setclassNames] = useState([])

    useEffect(() => {
        fetch('/classes.json')
            .then(res => res.json())
            .then(data => setclassNames(data))
    }, [])
    console.log(classNames);


    return (
        <div>
            <AdsBanner></AdsBanner>
            <WeeklySchedule></WeeklySchedule>
            
            <div className="grid grid-cols-3 gap-32 py-32 mx-36">
                {
                    classNames.map((className, index) => <div
                        key={index}
                        className="flex  items-center justify-center bg-gradient-to-bl from-violet-900 to-teal-400">
                        <div className="p-8 w-96 cursor-pointer rounded-3xl bg-gray-100 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
                            <div className="-mb-20 -translate-y-1/2 transform">
                                <img src="./powerUplogo-removebg-preview.png" alt="Kobe Bryant" title="Kobe Bryant" className="mx-auto h-64" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-center text-4xl font-bold">{className.class_name}</h3>
                                <span className="text-sm">{className.trainer_name}</span>
                            </div>
                            <p className="text-center text-lg">{className.instruction}</p>
                            <div className="text-center">
                                <button className="rounded-xl bg-black px-24 py-2 text-white">Join Now</button>
                            </div>
                        </div>
                    </div>)

                }
            </div>
        </div>
    );
};

export default classNameNamees;