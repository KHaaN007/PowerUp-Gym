import { useLoaderData } from "react-router-dom";

const ClasseDetails = () => {
    const data = useLoaderData()
    console.log(data);



    return (
        <div>
            <div className="grid grid-cols-3 gap-32 py-32 mx-36">
                <div

                    className="flex  items-center justify-center bg-gradient-to-bl from-violet-900 to-teal-400">
                    <div className="p-8 w-96 cursor-pointer rounded-3xl bg-gray-100 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
                        <div className="-mb-20 -translate-y-1/2 transform">
                            <img src="./powerUplogo-removebg-preview.png" alt="Kobe Bryant" title="Kobe Bryant" className="mx-auto h-64" />
                        </div>
                        <div className="text-center">
                            <h3 className="text-center text-4xl font-bold">fdfdsafdf</h3>
                            <span className="text-sm">sdgfdsfdf</span>
                        </div>
                        <p className="text-center text-lg">Hfdjkf</p>
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