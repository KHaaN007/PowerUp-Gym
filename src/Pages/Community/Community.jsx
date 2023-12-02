import { useEffect, useState } from "react";
import AdsBanner from "../../Component/AdsBanner/AdsBanner";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Community = () => {
    const [postData, setPostData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const limit = 6;

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
    }, [axiosPublic, page, limit]);

    const handlePagination = direction => {
        if (direction === "prev" && page > 1) {
            setPage(page - 1);
        } else if (direction === "next") {
            setPage(page + 1);
        }
    };

    return (
        <div className="">
            <AdsBanner />
            <div className="grid grid-cols-3">
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    postData.map(article => (
                        <div key={article.id} className="bg-gradient-to-r from-blue-200 to-indigo-400 px-6 py-8 shadow-2xl w-full max-w-xl rounded-xl font-[sans-serif] overflow-hidden mx-auto mt-4">
                            <h2 className="py-4 text-2xl">{article.title}</h2>
                            <div className="flex items-center">
                                <p className="text-sm text-black text-right">{article.content}</p>
                                <img src={article.image} className="w-20 h-20 ml-6 rounded-full" />
                            </div>
                            <h3 className="text-[#333] text-lg font-semibold mt-4">{article.author}</h3>
                            <div className=" flex justify-end gap-4 pt-5 ">
                                <button
                                    type="button"
                                    className="gap-1 flex justify-center items-center rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs bg-white font-semibold uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]">
                                    Down VOTE <FaChevronDown />
                                </button>
                                <button
                                    type="button"
                                    className="gap-1 flex justify-center items-center rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs bg-white font-semibold uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]">
                                    UP VOTE <FaChevronUp />
                                </button>                   {/* <button className="">Down Vote <FaChevronDown /></button> */}
                            </div>
                        </div>
                    ))
                )}
            </div>
          
                <div className="join flex justify-center items-center py-20">
                    <button className="join-item btn btn-outline" onClick={() => handlePagination("prev")} disabled={page <= 1}>
                        prev
                    </button>
                    <button
                        disabled={!postData.length}
                        className="join-item btn btn-outline"
                        onClick={() => handlePagination("next")}
                    >
                        next
                    </button>
                </div>
           
        </div>
    );
};

export default Community;
