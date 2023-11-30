import { Link, useLoaderData } from "react-router-dom";
import AdsBanner from "../../Component/AdsBanner/AdsBanner";
import Marquee from "react-fast-marquee";
import BeATrainer from "./BeATrainer/BeATrainer";

const TrainerDetails = () => {
    const data = useLoaderData()


    console.log(data);

    const slots = data.availableTimeSlots


    // console.log(slots);




    return (
        <div>
            <AdsBanner></AdsBanner>
            <Marquee>
                <h2 className="text-2xl">{data.name} Have {data.availableSlotsPerDay} Slots In A day</h2>
            </Marquee>
            <Link to={`/packageDetail/${data._id}`}>
                <div className="grid grid-cols-3 gap-10 container mx-auto">
                    {
                        slots.map((slot, index) => <div key={index}>
                            <div className="relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                                <div
                                    style={{ backgroundImage: `url(${data.profileImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                    className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                                    <div className="absolute text-left p-2 inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50">
                                        <h2 className="text-3xl text-white font-serif shadow-2xl bg-blue-gray-100">Slot No. {index + 1} </h2>
                                    </div>
                                </div>
                                <div className="relative p-6 px-6 py-14 md:px-12">
                                    <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                                        {data.name}
                                    </h2>
                                    <button disabled className="btn text-2xl my-5 px-6 disabled  py-2 bg-gradient-to-r rounded-md shadow-2xl text-white font-serif from-blue-600 to-indigo-900">

                                    </button>
                                    <button disabled className="btn text-2xl my-5 px-6 disabled  py-2 bg-gradient-to-r rounded-md shadow-2xl text-white font-serif from-blue-600 to-indigo-900">Season End At {slot.end} </button>

                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </Link>
            <BeATrainer></BeATrainer>
        </div>
    );
};

export default TrainerDetails;