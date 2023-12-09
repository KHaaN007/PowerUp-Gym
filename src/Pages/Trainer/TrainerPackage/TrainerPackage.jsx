import { useState } from "react";
import { useEffect } from "react";

import AdsBanner from "../../../Component/AdsBanner/AdsBanner";
import { useLoaderData } from "react-router-dom";
// import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";

const TrainerPackage = () => {
    const [slotPackages, setSlotPackages] = useState([])

    const data = useLoaderData()

    const { user } = useAuth()

console.log(user);
    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        fetch('/slotPackage.json')
            .then(res => res.json())
            .then(data => setSlotPackages(data))
    }, [])


    console.log(data);
    

    const handleBooked = async (id) => {
        console.log(id);

        try {
            const filterSlotPackage = slotPackages.filter(slotPackage => slotPackage.id === id);

            for (const slot of filterSlotPackage) {
                const BookedPackage = {
                    name: user.displayName,
                    image: user.photoUrl,
                    Useremail: user.email,
                    trainerEmail: data.email,
                    trainerName:data.name,
                    trainerImage:data.profileImage,
                    id: data._id,
                    status: data.trainer,
                    packageName: slot.name,
                    price: slot.price,
                    classesIncluded: slot.classesIncluded,
                    facilities: slot.facilities,
                };

                const BookedPackageRes = await axiosSecure.post('/packageBooked', BookedPackage);
                console.log(BookedPackage);

                if (BookedPackageRes.data && BookedPackageRes.data.insertedId) {
                    // Show Success PopUp
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${data.name} Your Request Trainer Is Successfully Sent`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        } catch (error) {
            console.error('Error occurred while booking:', error);
            // Handle the error here, e.g., show an error message
        }
    };

    //
    return (
        <div>
            <AdsBanner></AdsBanner>
            <div className="grid lg:grid-cols-3 grid-cols-1 container mx-auto">
                {
                    slotPackages.map(slotPackage => <div key={slotPackage.id} className="bg-white dark:bg-gray-900" >
                        <div className="container px-6 py-8 mx-auto">
                            <div className="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">


                                <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-900 dark:border-gray-700">
                                    <div className="flex-shrink-0">
                                        <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                                            {slotPackage.name}
                                        </h2>
                                    </div>

                                    <div className="flex-shrink-0">
                                        <span className="pt-2 text-3xl font-bold text-gray-800 uppercase dark:text-gray-100">
                                            ${slotPackage.price}
                                        </span>

                                        <span className="text-gray-500 dark:text-gray-400">
                                            /month
                                        </span>
                                    </div>

                                    <ul className="flex-1 space-y-4">


                                        <li className="text-gray-500 dark:text-gray-400">
                                            {slotPackage.classesIncluded}
                                        </li>



                                        <li className="text-gray-500 dark:text-gray-400">
                                            {slotPackage.facilities}
                                        </li>
                                    </ul>
                                    {/* onClick={() => handleDeleteUser(user._id)} */}
                                    <button
                                        onClick={() => handleBooked(slotPackage.id)}
                                        className="inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none">
                                        Join Now
                                    </button>
                                </div>


                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TrainerPackage;