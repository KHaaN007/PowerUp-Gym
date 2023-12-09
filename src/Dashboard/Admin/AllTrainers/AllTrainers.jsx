import useTrainer from "../../../Hooks/useTrainer";
import { FaPaypal } from "react-icons/fa";
import './AllTrainers.css'
import { Link } from "react-router-dom";
import usePayment from "../../../Hooks/usePayment";

const AllTrainers = () => {

    const [trainers] = useTrainer()

    const [payment] = usePayment()

    console.log(payment);




    const appliedTrainers = trainers.filter(trainer => trainer.status === 'trainer')




    return (
        <div>
            <div className="relative flex flex-col w-full min-w-0 mb-0 break-words border-0 border-transparent border-solid shadow-2xl pb-32 rounded-2xl bg-clip-border">
                <div className="p-6 pb-0 mb-0 bg-white text-3xl font-semibold font-serif rounded-t-2xl">
                    <h6>Trainers</h6>
                </div>
                <div className="flex-auto px-0 pt-0 pb-2 overflow-x-auto">
                    <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500 table-fixed">
                        {/* Your table content */}
                        <thead className="align-bottom">
                            <tr>
                                <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-lg border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70 text-cyan-200">Profile</th>
                                <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-lg border-b-solid tracking-none whitespace-nowrap text-slate-400 text-cyan-200 opacity-70">Name</th>
                                <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-lg border-b-solid tracking-none whitespace-nowrap text-slate-400 text-cyan-200 opacity-70">Email</th>
                                <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-lg border-b-solid tracking-none whitespace-nowrap text-slate-400 text-cyan-200 opacity-70">Details</th>

                            </tr>
                        </thead>
                        {
                            appliedTrainers.map(trainer => <tbody key={trainer._id}>
                                <tr className="over">
                                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                        <div className="flex px-2 py-2">
                                            <div className="flex flex-col justify-center">
                                                <img className="w-14 h-14 rounded-full overflow-auto border-white" src={trainer.profileImage} alt="" />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                        <p className="mb-0 font-semibold leading-tight text-base">{trainer.name}</p>

                                    </td>
                                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                        <p className="mb-0 font-semibold leading-tight text-base">{trainer.email}</p>

                                    </td>
                                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">

                                        <Link to={`/dashboard/payTrainer/${trainer._id}`}>
                                            <button
                                                className="
                                    text-lg hover:bg-gradient-to-r from-blue-600 to-indigo-800w-auto mx-5 text-center p-2 rounded-xl hover:shadow-2xl font-semibold transition duration-500 ease-in-out transform hover:translate-x-4 hover:scale-100 gap-2
                                    mb-0 border  leading-tight flex justify-center items-center"><FaPaypal></FaPaypal> Pay</button>
                                        </Link>


                                    </td>

                                </tr>



                            </tbody>)
                        }
                    </table>
                </div>
            </div>
        </div>


    );
};

export default AllTrainers;