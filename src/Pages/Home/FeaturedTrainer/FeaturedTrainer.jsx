


import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import useTrainer from '../../../Hooks/useTrainer';


AOS.init();


const FeaturedTrainer = () => {

    const [trainers] = useTrainer()


console.log(trainers);
const limitedTrainers = trainers.slice(0, 6);
    return (
        <div>


            <div data-aos="fade-down" className=" md:px-6 gap-10 py-10  grid lg:grid-cols-3 grid-cols-1 container mx-auto">
                {
                    limitedTrainers.map(trainer =>
                        <div key={trainer._id} className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
                                <img src={trainer.profileImage} alt="profile-picture" />
                            </div>
                            <div className="p-6 text-center">
                                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                    {trainer.name}
                                </h4>
                                <p
                                    className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
                                    Trainer
                                </p>
                            </div>
                            <div className="flex justify-center p-6 pt-2 gap-7">
                                <a href="#facebook"
                                    className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400">
                                    <i className="fab fa-facebook" aria-hidden="true"></i>
                                </a>
                                <a href="#twitter"
                                    className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-light-blue-600 to-light-blue-400">
                                    <i
                                        className="fab fa-twitter" aria-hidden="true">
                                    </i>
                                </a>
                                <a href="#instagram"
                                    className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400"><i
                                        className="fab fa-instagram" aria-hidden="true">
                                    </i>
                                </a>
                            </div>
                        </div>

                    )}
            </div>
        </div>
    );
};

export default FeaturedTrainer;