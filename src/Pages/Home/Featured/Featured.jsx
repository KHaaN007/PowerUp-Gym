const Featured = () => {
    return (
        <div>
            <div className="font-[sans-serif] text-white  bg-gradient-to-r from-blue-600 to-indigo-800 py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="sm:text-6xl text-2xl font-extrabold mb-16 bg-gradient-to-r text-from-white to-black shadow-lg p-5 border-r-4 rounded-lg">WHY CHOOSE US</h2>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 max-md:max-w-lg mx-auto">
                        <div className="rounded-xl group p-8 text-center hover:bg-white hover:text-purple-800 hover:shadow-xl transition duration-300  flex flex-col items-center justify-center">
                            <img className="w-16 py-5" src="./weightlifting.png" alt="" />
                            <h3 className="text-xl font-semibold mb-2">State-of-the-Art Equipment</h3>
                            <p className="text-gray-300 group-hover:text-gray-500 text-sm">Showcase a wide range of modern and high-quality fitness equipment available at the gym, including cardio machines, weightlifting equipment, and specialized workout stations.</p>
                        </div>
                        <div className="rounded-xl group p-8 text-center hover:bg-white hover:text-purple-800 hover:shadow-xl transition duration-300  flex flex-col items-center justify-center">
                            <img className="w-16 py-5" src="./weightlifter.png" alt="" />
                          
                            <h3 className="text-xl font-semibold mb-2">Group Fitness Classes</h3>
                            <p className="text-gray-300 group-hover:text-gray-500 text-sm">Highlight various group fitness classes offered, such as yoga, spin classes, HIIT (High-Intensity Interval Training), Zumba, Pilates, or boot camps. Emphasize the diverse class schedule to appeal to different preferences and fitness levels.</p>
                        </div>
                        <div className="rounded-xl group p-8 text-center hover:bg-white hover:text-purple-800 hover:shadow-xl transition duration-300  flex flex-col items-center justify-center">
                            <img className="w-16 py-5" src="./trainer.png" alt="" />
                           
                            <h3 className="text-xl font-semibold mb-2">Certified Trainers and Personalized Training</h3>
                            <p className="text-gray-300 group-hover:text-gray-500 text-sm">Highlight experienced and certified trainers available to assist members in achieving their fitness goals. Emphasize personalized training programs tailored to individual needs, whether it`s weight loss, muscle gain, or specific fitness targets.</p>
                        </div>
                        <div className="rounded-xl group p-8 text-center hover:bg-white hover:text-purple-800 hover:shadow-xl transition duration-300  flex flex-col items-center justify-center">
                            <img className="w-16 py-5" src="./dumbbell.png" alt="" />
                           
                            <h3 className="text-xl font-semibold mb-2">Amenities and Facilities</h3>
                            <p className="text-gray-300 group-hover:text-gray-500 text-sm">Showcase additional amenities such as locker rooms, showers, sauna, swimming pool, sports facilities (basketball courts, tennis courts), childcare services, and refreshment areas to illustrate a comprehensive fitness experience.</p>
                        </div>
                        <div className="rounded-xl group p-8 text-center hover:bg-white hover:text-purple-800 hover:shadow-xl transition duration-300  flex flex-col items-center justify-center">
                            <img className="w-16 py-5" src="./fitness.png" alt="" />
                            
                            <h3 className="text-xl font-semibold mb-2">Membership Options and Packages</h3>
                            <p className="text-gray-300 group-hover:text-gray-500 text-sm">Highlight various membership plans, flexible pricing options, and any special offers or discounts available. Make it easy for potential members to understand the membership benefits and value they would receive.</p>
                        </div>
                        <div className="rounded-xl group p-8 text-center hover:bg-white hover:text-purple-800 hover:shadow-xl transition duration-300  flex flex-col items-center justify-center">
                            <img className="w-16 py-5" src="./live.png" alt="" />
                            
                            <h3 className="text-xl font-semibold mb-2">Community and Social Events</h3>
                            <p className="text-gray-300 group-hover:text-gray-500 text-sm">Promote community-building activities, social events, fitness challenges, workshops, or seminars organized by the gym. Emphasize the sense of belonging and camaraderie among members.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;