import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// import useCart from "../../../Hooks/useCart";
// import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useTrainer from "../../Hooks/useTrainer";
// import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ data }) => {


    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    // const [cart, refetch] = useCart()
    const navigate = useNavigate()
    // const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    console.log(data);
    const [trainers, ,refetch] = useTrainer()
    const totalPrice = 100
    // console.log(user.displayName);

    useEffect(() => {

        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }

    }, [axiosSecure, totalPrice])


    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return;
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        })

        if (error) {
            console.log('payment error', error);
            setError(error.message)
        }
        else {
            console.log('payment method', paymentMethod);
            setError(' ')
        }


        // Confirm Payment 
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('Payment Intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log('Transaction Id', paymentIntent.id);
                setTransactionId(paymentIntent.id)
            }

            // Now Save the payment in the database
            const payment = {
                email: data?.email,
                price: totalPrice,
                transactionId: paymentIntent.id,
                date: new Date(),//Utc data Convert.Use Moment Js 


                status: 'Payment Successfully'
            }

            const res = await axiosSecure.post('/payments', payment);
            console.log('Payment Saved', res.data);
            // refetch()
            if (res.data.paymentResult.insertedId) {
                Swal.fire({
                    title: "Success",
                    text: `Payment To ${data?.name} Confirmed`,
                    icon: "success"
                });
                navigate('/dashboard/allTrainer')
            }




        }

    }


    return (
        <div className="border p-20 bg-white rounded-2xl">


            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '36px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn-sm btn btn-secondary" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p className="text-red-300">{error}</p>
                {
                    transactionId && <p className="text-green-400 font-serif text-xl font-semibold">Your Transaction Id : {transactionId}</p>
                }
            </form>
        </div>
    );
};

export default CheckoutForm;