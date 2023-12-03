import useAuth from "../../../Hooks/useAuth";
import useTrainer from "../../../Hooks/useTrainer";
import TrainerSlots from "./TrainerSlots";

const ManageSlots = () => {
    const { user } = useAuth()
    const [trainers] = useTrainer()



    const trainerSlotEmail = trainers.filter(trainer => trainer.email === user?.email)






    return (
        <div>
            <h1 className="text-xl">This is Manage Trainer page</h1>
            <div>
                {
                    trainerSlotEmail.map(slots => <TrainerSlots
                        key={slots._id}
                        slots={slots}
                    ></TrainerSlots>)
                }
            </div>
        </div>
    );
};

export default ManageSlots;