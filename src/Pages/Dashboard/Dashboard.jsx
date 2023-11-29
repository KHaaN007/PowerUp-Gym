import { Link, Outlet } from "react-router-dom";
import { BiCaretLeftCircle, BiDumbbell, BiRun } from "react-icons/bi";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdAddComment, MdManageAccounts, MdManageHistory } from "react-icons/md";
import { IoAddCircleSharp, IoSettingsSharp } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { AiOutlineNotification, AiTwotoneNotification } from "react-icons/ai";

const Dashboard = () => {

    const admin = true;
    const trainer = true;
    const member = true;
    return (
        <div className='grid grid-cols-11 gap-2'>
            <div className='grid col-span-2 shadow-2xl bg-gradient-to-r from-blue-600 to-indigo-800'>
                {/* Name and Website Logo */}
                <div className="flex mx-auto">
                    <img className="w-20 h-20 flex items-center justify-center" src="./powerUplogo-removebg-preview.png" alt="" />
                    <h1 className="text-3xl py-2 font-serif text-black font-bold">Power<span className="text-blue-600 text-4xl">Up</span></h1>
                </div>
                {
                    admin && <div className="flex flex-col min-h-fit gap-5">
                        <Link
                            to='allSubscribes'
                        >
                            <div>
                                <h3 className="text-lg hover:bg-gradient-to-r from-blue-600 to-indigo-800w-auto mx-5 text-center p-2 rounded-xl hover:shadow-2xl font-semibold transition duration-500 ease-in-out transform hover:translate-x-8 hover:scale-100  flex justify-center items-center gap-2">
                                <BiCaretLeftCircle className="text-2xl" /> All Subscribes</h3>
                            </div>
                        </Link>
                        <Link
                            to='allTrainer'
                        >
                            <div>
                                <h3 className="text-lg hover:bg-gradient-to-r from-blue-600 to-indigo-800w-auto mx-5 text-center p-2 rounded-xl hover:shadow-2xl font-semibold transition duration-500 ease-in-out transform hover:translate-x-8 hover:scale-100 flex justify-center items-center gap-2"> 
                                <BiDumbbell className="text-2xl"/> All Trainers</h3>
                            </div>
                        </Link>
                        <Link
                            to='appliedTrainer'
                        >
                            <div>
                                <h3 className="text-lg hover:bg-gradient-to-r from-blue-600 to-indigo-800w-auto mx-5 text-center p-2 rounded-xl hover:shadow-2xl font-semibold transition duration-500 ease-in-out transform hover:translate-x-8 hover:scale-100 flex justify-center items-center gap-2"> 
                                <BiRun className="text-2xl"/> Applied Trainer</h3>
                            </div>
                        </Link>
                        <Link
                            to='balance'
                        >
                            <div>
                                <h3 className="text-lg hover:bg-gradient-to-r from-blue-600 to-indigo-800w-auto mx-5 text-center p-2 rounded-xl hover:shadow-2xl font-semibold transition duration-500 ease-in-out transform hover:translate-x-8 hover:scale-100 flex justify-center items-center gap-2">
                                    
                                <FaMoneyCheckDollar className="text-2xl"/> Balance</h3>
                            </div>
                        </Link>


                    </div>

                }

                {
                    trainer &&
                    <div className="flex flex-col min-h-fit gap-5">
                        <Link
                        to='manageSlots'
                        >
                            <div>
                                <h3 className="text-lg hover:bg-gradient-to-r from-blue-600 to-indigo-800w-auto mx-5 text-center p-2 rounded-xl hover:shadow-2xl font-semibold transition duration-500 ease-in-out transform hover:translate-x-8 hover:scale-100 flex justify-center items-center gap-2">
                                <MdManageHistory  className="text-2xl" /> Manage Slots</h3>
                            </div>
                        </Link>
                        <Link
                        to='manageMember'
                        >
                            <div>
                                <h3 className="text-lg hover:bg-gradient-to-r from-blue-600 to-indigo-800w-auto mx-5 text-center p-2 rounded-xl hover:shadow-2xl font-semibold transition duration-500 ease-in-out transform hover:translate-x-8 hover:scale-100 flex justify-center items-center gap-2">
                                <MdManageAccounts className="text-2xl"/>  Manage member</h3>
                            </div>
                        </Link>
                        <Link
                        to='addNewForum'
                        >
                            <div>
                                <h3 className="text-lg hover:bg-gradient-to-r from-blue-600 to-indigo-800w-auto mx-5 text-center p-2 rounded-xl hover:shadow-2xl font-semibold transition duration-500 ease-in-out transform hover:translate-x-8 hover:scale-100 flex justify-center items-center gap-2">
                                <MdAddComment className="text-2xl"/>  Add new Forum</h3>
                            </div>
                        </Link>
                        <Link
                        to='addNewClass'
                        >
                            <div>
                                <h3 className="text-lg hover:bg-gradient-to-r from-blue-600 to-indigo-800w-auto mx-5 text-center p-2 rounded-xl hover:shadow-2xl font-semibold transition duration-500 ease-in-out transform hover:translate-x-8 hover:scale-100 flex justify-center items-center gap-2">
                                <IoAddCircleSharp className="text-2xl"/>  Add new Class</h3>
                            </div>
                        </Link>


                    </div>
                }
                {
                    member && <div className="flex flex-col min-h-fit gap-5">
                        <Link>
                            <div>
                                <h3 className="text-lg hover:bg-gradient-to-r from-blue-600 to-indigo-800w-auto mx-5 text-center p-2 rounded-xl hover:shadow-2xl font-semibold transition duration-500 ease-in-out transform hover:translate-x-8 hover:scale-100 flex justify-center items-center gap-2">
                                <IoIosLogOut className="text-2xl"/> Activity Log</h3>
                            </div>
                        </Link>
                        <Link>
                            <div>
                                <h3 className="text-lg hover:bg-gradient-to-r from-blue-600 to-indigo-800w-auto mx-5 text-center p-2 rounded-xl hover:shadow-2xl font-semibold transition duration-500 ease-in-out transform hover:translate-x-8 hover:scale-100 flex justify-center items-center gap-2"> 
                                <IoSettingsSharp className="text-2xl"/> Profile Settings</h3>
                            </div>
                        </Link>
                        <Link>
                            <div>
                                <h3 className="text-lg hover:bg-gradient-to-r from-blue-600 to-indigo-800w-auto mx-5 text-center p-2 rounded-xl hover:shadow-2xl font-semibold transition duration-500 ease-in-out transform hover:translate-x-8 hover:scale-100 flex justify-center items-center gap-2">
                                <AiOutlineNotification className="text-2xl"/> Recommended Classes</h3>
                            </div>
                        </Link>
                        
                    </div>
                }

            </div>
            <div className="w-full h-screen shadow-2xl rounded-xl container mx-auto bg-gray-100 grid col-span-9 my-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;