import { Link } from "react-router-dom";
import useClasses from "../../../Hooks/useClasses";





const FeaturedClasses = () => {

    const [classes] = useClasses()


    const limitedclasses = classes.slice(0, 6);


    return (
        <div style={{
            backgroundImage: "url('https://i.ibb.co/hMdZZSC/5614080-2902410.jpg')",
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>





            <div className="">
                <h2 className="sm:text-6xl  max-w-6xl text-3xl lg:py-10 font-extrabold mb-16 text-gray-400 shadow-2xl p-5 border-r-4 rounded-lg">FEATURED CLASSES</h2>

                <div>

                    <div

                        className="grid lg:grid-cols-3 grid-cols-1 container mx-auto gap-10 lg:py-32">
                        {
                            limitedclasses.map((className) => <div key={className._id}>
                                <Link
                                    to={`/classeDetail/${className._id}`}>
                                    <div className="w-full h-56 lg:h-60 rounded-xl flex justify-center items-center focus:outline-none bg-gradient-to-tr from-indigo-500 to-blue-500">
                                        <img src="./powerUplogo-removebg-preview.png" alt="Kobe Bryant" title="Kobe Bryant" className="mx-auto h-20" />
                                        <h2 className=" font-semibold font-serif p-5 bg-indigo-600 rounded-2xl shadow-2xl
                                    sm:text-3xl max-w-6xl text-2xl py-5  mb-16 bg-gradient-to-r text-from-white to-black  border-r-4 
                                    ">{className.class_name}</h2>
                                    </div>
                                </Link>
                            </div>)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FeaturedClasses;