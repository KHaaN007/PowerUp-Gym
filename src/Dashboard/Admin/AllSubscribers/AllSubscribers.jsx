import { useEffect, useState } from "react";
// import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllSubscribers = () => {
    // const axiosPublic = useAxiosPublic();
    const [subscribes, setSubscribes] = useState([])
    const axiosSecure = useAxiosSecure()


    useEffect(() => {
        axiosSecure.get('/newsletter')
            .then(res => {
                console.log(res.data)
                setSubscribes(res.data)
            })
    }, [axiosSecure])
    console.log(subscribes);

    return (
        <div>
            <div className="relative flex flex-col w-full min-w-0 mb-0 break-words  border-0 border-transparent border-solid shadow-2xl pb-32 rounded-2xl bg-clip-border">
                <div className="p-6 pb-0 mb-0 bg-white text-3xl font-semibold font-serif rounded-t-2xl">
                    <h6>Newsletter</h6>
                </div>
                <div className="flex-auto px-0 pt-0 pb-2">
                    <div className="p-0 overflow-x-auto">
                        <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                            <thead className="align-bottom">
                                <tr>
                                    <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-lg border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70 text-cyan-200">Email</th>
                                    <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-lg border-b-solid tracking-none whitespace-nowrap text-slate-400 text-cyan-200 opacity-70">Name</th>

                                </tr>
                            </thead>
                            {
                                subscribes.map(subscribe => <tbody key={subscribe._id}>
                                    <tr>
                                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                            <div className="flex px-2 py-1">
                                                <div className="flex flex-col justify-center">
                                                    <p className="mb-0 leading-tight font-semibold text-base text-slate-400">{subscribe.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                            <p className="mb-0 font-semibold leading-tight text-base">{subscribe.name}</p>

                                        </td>

                                    </tr>



                                </tbody>)
                            }
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllSubscribers;