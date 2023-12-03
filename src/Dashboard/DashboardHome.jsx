import useTrainer from "../Hooks/useTrainer";
import useUser from "../Hooks/useUser";

const DashboardHome = () => {
    const [users] = useUser()

    const totalUser = users.filter(user => user.role === 'member')


    const [trainers] = useTrainer()

    const totaltrainer = trainers.filter(trainer => trainer.status === 'trainer')
    const appliedTotaltrainer = trainers.filter(trainer => trainer.status === 'Applied Trainer')

    console.log(totaltrainer);

    return (
        <div>
            <div className="flex justify-center items-center h-1/4 bg-gradient-to-r from-blue-300 to-indigo-500 border-2 rounded-xl m-2">
                <h1 className="text-8xl p-10 shadow-2xl rounded-2xl font-semibold text-white font-serif">DashBoard</h1>
            </div>

            <div className="flex flex-wrap h-1/4 bg-blue-300 border-2 rounded-xl m-2">


                <div className=" mt-4 w-4/12  px-5">
                    <div className="relative h-48 flex text-white font-serif text flex-col min-w-0 break-words bg-gradient-to-r from-blue-600 to-indigo-900 rounded-2xl mb-4 xl:mb-0 shadow-lg">
                        <div className="flex-auto p-4">
                            <div className="flex flex-wrap">
                                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <h5 className="text-blueGray-400  font-bold  flex justify-center items-center text-3xl">Total Members {totalUser.length}</h5>
                                    <span className="font-semibold text-center text-xl text-blueGray-700"></span>
                                </div>
                                <div className="relative w-auto pl-4 flex-initial">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-pink-500">
                                        <i className="fas fa-chart-pie"></i>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className=" mt-4 w-4/12  px-5">
                    <div className="relative h-48 flex  text-white font-serif flex-col min-w-0 break-words bg-gradient-to-r from-blue-600 to-indigo-900 rounded-2xl mb-4 xl:mb-0 shadow-lg">
                        <div className="flex-auto p-4">
                            <div className="flex flex-wrap">
                                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <h5 className="text-blueGray-400  font-bold  flex justify-center items-center text-3xl">Total Trainers {totaltrainer.length}</h5>
                                    <span className="font-semibold text-center text-xl text-blueGray-700"></span>
                                </div>
                                <div className="relative w-auto pl-4 flex-initial">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-pink-500">
                                        <i className="fas fa-chart-pie"></i>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className=" mt-4 w-4/12  px-5">
                    <div className="relative h-48 text-white font-serif flex flex-col min-w-0 break-words bg-gradient-to-r from-blue-600 to-indigo-900 rounded-2xl mb-4 xl:mb-0 shadow-lg">
                        <div className="flex-auto p-4">
                            <div className="flex flex-wrap">
                                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <h5 className="text-blueGray-400  font-bold  flex justify-center items-center text-3xl">Applied Trainer {appliedTotaltrainer.length}</h5>
                                    <span className="font-semibold text-center text-xl text-blueGray-700"></span>
                                </div>
                                <div className="relative w-auto pl-4 flex-initial">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-pink-500">
                                        <i className="fas fa-chart-pie"></i>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DashboardHome;