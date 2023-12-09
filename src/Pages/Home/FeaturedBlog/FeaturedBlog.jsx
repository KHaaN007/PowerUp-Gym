import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const FeaturedBlog = () => {
    const [postData, setPostData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const limit = 3;


    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        setIsLoading(true);
        axiosPublic
            .get(`/articles?page=${page}&limit=${limit}`)
            .then(res => {
                setPostData(res.data.result);
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error.message);
                setIsLoading(false);
            });
    }, [axiosPublic, page]);


    return (
        //  <div></div>
        <div className="bg-gradient-to-r from-blue-600 to-indigo-900 py-32">
            <div className='w-6/12 mx-auto'>
                <h2 className="sm:text-6xl text-2xl font-extrabold lg:my-16  shadow-lg p-5 border-r-8 rounded-lg">BLOGS</h2>
            </div>

            <div className="grid grid-cols-3 gap-6  container mx-auto">
                {
                    Array.isArray(postData) && postData.map(article => <div key={article?._id}>
                        {/* <!-- component --> */}
                        <div className="flex items-center justify-center ">


                            <card className="text-white  bg-black bg-opacity-30 backdrop-blur rounded-lg p-8 ">

                                {/* <!-- Header --> */}
                                <header className="flex font-light text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rotate-90 -ml-2" viewBox="0 0 24 24" stroke="#b91c1c">

                                    </svg>
                                    <p className="text-lg">{article?.category}</p>
                                </header>

                                <h3 className="font-bold text-xl mt-8">{article.title}</h3>
                                <p className="font-light"> {article?.content.slice(0, 100)}.... </p>


                                <Link to='/community'>
                                    <button className="bg-indigo-400 text-white font-semibold rounded-lg py-2 px-5 text-sm mt-6 inline-flex items-center group">
                                        <p> READ MORE </p>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-2 delay-100 duration-200 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                                        </svg>
                                    </button>
                                </Link>

                            </card>

                        </div>

                    </div>)
                }
            </div>

        </div>
    );
};

export default FeaturedBlog;