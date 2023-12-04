import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLoaderData } from "react-router-dom";

//TODO : ADD Publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
// console.log(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {

    const data = useLoaderData()
    // console.log(data);


    return (
        <div className="">
            <div className="flex justify-center mx-5 my-5 items-center h-1/4 bg-gradient-to-r from-blue-300 to-indigo-500 border-2 rounded-xl m-2">
                <h1 className="text-8xl gap-8 flex justify-center items-center p-10 shadow-2xl rounded-2xl font-semibold text-white font-serif">Pay {data.name}</h1>
            </div>
            <div className="max-w-6xl mx-auto h-screen">
                <Elements stripe={stripePromise}>
                    <CheckoutForm data={data}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;