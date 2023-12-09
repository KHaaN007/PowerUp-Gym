import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const GalleryBanner = () => {
    return (
        <div data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom">
            <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
                <img src="https://i.ibb.co/X7GcZB9/ban2.jpg" alt="Banner Image" className="absolute inset-0 lg:w-full w-full lg:h-full object-cover" />
                <div className="lg:min-h-[430px] relative z-20 md:min-h-[350px] max-w-6xl min-h-[195px]  mx-auto flex flex-col justify-center items-center text-center text-white p-6">


                 
                        <button type="button"
                            className="px-6 py-3 mt-10 rounded-full text-white text-base tracking-wider font-semibold outline-none bg-transparent hover:bg-gray-50 hover:text-[#333] border-2 border-gray-300 transition-all duration-300">
                            Gallery
                        </button>
          
                </div>
            </div>
        </div>
    );
};

export default GalleryBanner;