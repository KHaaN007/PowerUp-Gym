import { FcComboChart, FcMoneyTransfer, } from "react-icons/fc"
import usePayment from "../../../Hooks/usePayment";
import BalanceChart from "./BalanceChart";
import useNewsletter from "../../../Hooks/useNewsletter";
import usePackage from "../../../Hooks/usePackage";



const Balance = () => {

    const [payment] = usePayment()

    const payMoney = payment.reduce((total, item) => total + item.price, 0)

console.log(payMoney);

    const total = 10000
    const remainingBalance = total - payMoney
    console.log(remainingBalance);

    const [Newsletter] = useNewsletter()
    const [Package] = usePackage()

 
    const newMember = Newsletter.length
    const paidMember = Package.length



    return (

        <div>

            <div>
                <div className="flex justify-center items-center h-1/4 bg-gradient-to-r from-blue-300 to-indigo-500 border-2 rounded-xl m-2">
                    <h1 className="text-8xl gap-8 flex justify-center items-center p-10 shadow-2xl rounded-2xl font-semibold text-white font-serif"><FcComboChart />Balance Sheat</h1>
                </div>

                <div className="flex flex-wrap h-1/4 bg-blue-300 border-2 rounded-xl m-2">


                    <div className=" mt-4 w-4/12  px-5">
                        <div className="relative h-48 flex text-white font-serif text flex-col min-w-0 break-words bg-gradient-to-r from-blue-600 to-indigo-900 rounded-2xl mb-4 xl:mb-0 shadow-lg">
                            <div className="flex-auto p-4">
                                <div className="flex flex-wrap">
                                    <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                        <h5 className="text-blueGray-400  font-bold  flex justify-center items-center text-3xl text-indigo-50">Total Balance</h5>
                                        <h1 className="font-bold rounded-2xl w-full text-center text-6xl h-full flex items-center justify-center text-orange-300 bg-blue-600 p-4 m-2">{total}$</h1>
                                    </div>
                                    <div className="relative w-auto pl-4 flex-initial">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-pink-500">
                                            <FcMoneyTransfer className="text-2xl"></FcMoneyTransfer>
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
                                        <h5 className="text-blueGray-400  font-bold  flex justify-center items-center text-3xl text-indigo-50">Total Remaining </h5>
                                        <h1 className="font-bold rounded-2xl w-full text-center text-6xl h-full flex items-center justify-center text-orange-300 bg-blue-600 p-4 m-2">{remainingBalance}$</h1>
                                    </div>
                                    <div className="relative w-auto pl-4 flex-initial">
                                        <div className="text-white  text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-pink-500">
                                            <FcMoneyTransfer className="text-2xl"></FcMoneyTransfer>
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
                                        <h5 className="text-blueGray-400  font-bold  flex justify-center items-center text-3xl text-indigo-50">Total payment </h5>
                                        <h1 className="font-bold rounded-2xl w-full text-center text-6xl h-full flex items-center justify-center text-orange-300 bg-blue-600 p-4 m-2">{payMoney}$</h1>
                                    </div>
                                    <div className="relative w-auto pl-4 flex-initial">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-pink-500">
                                            <FcMoneyTransfer className="text-2xl"></FcMoneyTransfer>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <div className="grid grid-cols-2 mx-20 mt-10">
                <div className="flex flex-wrap">
                    <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 className="text-blueGray-400  font-bold  flex justify-center items-center text-3xl text-indigo-50"></h5>
                        <h1 className="font-bold rounded-2xl w-full text-center text-6xl h-full flex items-center justify-center text-orange-300 bg-blue-600 p-4 m-2">Paid Member {paidMember}</h1>
                    </div>
                   
                </div>
                <div className="flex flex-wrap">
                    <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 className="text-blueGray-400  font-bold  flex justify-center items-center text-3xl text-indigo-50"></h5>
                        <h1 className="font-bold rounded-2xl w-full text-center text-6xl h-full flex items-center justify-center text-orange-300 bg-blue-600 p-4 m-2">Newsletter {newMember}</h1>
                    </div>
                  
                </div>
            </div>
            <BalanceChart></BalanceChart>
        </div>
    );
};

export default Balance;