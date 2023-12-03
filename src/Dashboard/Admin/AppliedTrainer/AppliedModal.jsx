/* eslint-disable react/prop-types */
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

import useUser from '../../../Hooks/useUser';

const AppliedModal = ({ appliedTrainer, refetch }) => {


    const { users, } = useUser()
    const axiosSecure = useAxiosSecure()

    // console.log(appliedTrainer.email);



    const handleConfirm = () => {
        axiosSecure.patch(`/trainers/${appliedTrainer.email}`)
            .then(response => {
                // Check if the update was successful (you might need to modify this condition based on your API response)
                if (response.status === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Update Successful',
                        text: 'Trainer information has been updated!',
                    });
                } else {
                    // Handle other response statuses or error conditions if needed
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    });
                }
            })
            .catch(error => {
                // Handle errors or failed requests
                console.error('Error updating trainer:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Failed to update trainer information!',
                });
            });
    };




    return (
        <div>
            <dialog id={`modal_${appliedTrainer._id}`} className="modal">
                <div className="modal-box w-11/12 max-w-5xl">



                    {/* <!-- component --> */}
                    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">

                        <div className="py-3 sm:max-w-xl sm:mx-auto">
                            <div className="bg-white shadow-lg border-gray-100 	 border sm:rounded-3xl p-8 flex space-x-8">
                                <div className="h-48 overflow-visible w-1/2">
                                    <img className="rounded-3xl shadow-lg" src={appliedTrainer.profileImage} alt="" />
                                </div>
                                <div className="flex flex-col w-1/2 space-y-4">
                                    <div className="flex justify-between items-start">
                                        <button disabled className=" text-2xl px-6  py-2 bg-gradient-to-r rounded-md shadow-2xl text-white font-serif from-blue-600 to-indigo-900">{appliedTrainer.name}</button>
                                    </div>
                                    <div>
                                        <h2 className='text-xl font-serif font-semibold'> Experience : {appliedTrainer.experience} Years</h2>
                                    </div>
                                    <div>
                                        <h2 className='text-xl font-serif font-semibold'>Time In A week : {appliedTrainer.availableTimeInAweek} Hours</h2>
                                    </div>
                                    <button disabled className=" text-2xl px-6  py-2 bg-gradient-to-r rounded-md shadow-2xl text-white font-serif from-blue-600 to-indigo-900">Skills</button>
                                    {
                                        appliedTrainer.skills.map((skill, index) => <div className='flex' key={index}>
                                            <h2 className='text-xl  font-serif font-bold'>{skill}</h2>
                                        </div>)
                                    }

                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="modal-action">
                        <form method="dialog">

                            <div className='flex gap-5'>
                                <button
                                    onClick={handleConfirm}
                                    className="btn border-0 text-lg px-2  bg-gradient-to-r rounded-md shadow-2xl text-white font-serif from-blue-600 to-indigo-900">
                                    Confirm
                                </button>
                                <button className="btn border-0 text-lg px-2    bg-gradient-to-r rounded-md shadow-2xl text-white font-serif from-blue-600 to-indigo-900">
                                    Rejected
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default AppliedModal;