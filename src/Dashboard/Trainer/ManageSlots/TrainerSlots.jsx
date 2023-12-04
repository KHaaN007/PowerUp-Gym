/* eslint-disable react/prop-types */


const TrainerSlots = ({ slots }) => {
    const { _id }=slots;

  
    return (
        <div className="grid grid-cols-3 gap-5 m-8">
            {
                slots.availableTimeSlots.map(slot => <div key={_id} className="relative flex-col items-end justify-center overflow-hidden rounded-xl b bg-clip-border text-center text-gray-700">
                    <div

                        className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                        <div className="absolute text-left p-2 inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50">

                        </div>
                       
                    </div>
                    <div className="relative p-6 px-6 py-14 md:px-12">
                        <h2 className=" block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">

                        </h2>

                        <button disabled className=" text-xl my-5 px-6 disabled  py-2 bg-gradient-to-r rounded-md shadow-xl text-white font-serif from-blue-600 to-indigo-900">Season{slot.timeSolt} </button>

                    </div>
                </div>)
            }
        </div>
    );
};

export default TrainerSlots;