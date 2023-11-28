import { useLoaderData } from "react-router-dom";
import AdsBanner from "../../../Component/AdsBanner/AdsBanner";

const ClasseDetails = () => {

    const className = useLoaderData()
    console.log(className);
    return (
        <div>
            <div>
                <AdsBanner></AdsBanner>
                  <div
                  
                 
                        className="flex h-screen bg-gradient-to-r from-blue-600 to-indigo-800 items-center justify-center ">
                        <div className="p-8 w-96 cursor-pointer rounded-3xl bg-gray-100 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
                            <div className="-mb-20 -translate-y-1/2 transform">
                                <img src="/powerUplogo-removebg-preview.png" alt="Kobe Bryant" title="Kobe Bryant" className="mx-auto h-64 rounded-2xl" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-center text-4xl font-bold">{className.class_name}</h3>
                                <span className="text-2xl">{className.trainer_name}</span>
                            </div>
                            <p className="text-center text-lg pt-3">
                            <span className="font-semibold">Instruction</span> : {className.instruction}</p>
                            <p className="text-center text-lg py-3">
                            <span className="font-semibold">Details</span> : {className.details}</p>
                            <div className="text-center">
                                <button className="rounded-xl bg-black px-24 py-2 text-white">Join Now</button>
                            </div>
                        </div>
                    </div>

                
            </div>
        </div>
    );
};

export default ClasseDetails;