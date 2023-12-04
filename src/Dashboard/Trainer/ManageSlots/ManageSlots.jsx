import { FaPaypal } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";
import useTrainer from "../../../Hooks/useTrainer";
import TrainerSlots from "./TrainerSlots";


const ManageSlots = () => {
    const { user } = useAuth()
    const [trainers] = useTrainer()



    const trainerSlotEmail = trainers.filter(trainer => trainer.email === user?.email)
  




    return (
        <div>
            <h2 className="sm:text-6xl  max-w-6xl text-3xl lg:py-10 font-extrabold mb-16 text-gray-400 shadow-2xl p-5 border-r-4 rounded-lg">TOTAL SLOTS</h2>
            {
                trainerSlotEmail.map(slots => <TrainerSlots
                    key={slots._id}
                    slots={slots}
                ></TrainerSlots>)
            }

        </div>)
}






export default ManageSlots;