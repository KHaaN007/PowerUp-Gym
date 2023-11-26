import { Link } from "react-router-dom";

const BeATrainer = () => {
    return (
        <div>
            <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
                <img src="https://i.ibb.co/7148Pzd/ban.jpg" alt="Banner Image" className="absolute inset-0 lg:w-full h-full object-cover" />
                <div className="lg:min-h-[820px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">


                    <Link to='/becomeATrainer'>
                        <button type="button"
                            className="px-6 py-3 mt-10 rounded-full text-white text-base tracking-wider font-semibold outline-none bg-transparent hover:bg-gray-50 hover:text-[#333] border-2 border-gray-300 transition-all duration-300">
                            Become a Trainer
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BeATrainer;