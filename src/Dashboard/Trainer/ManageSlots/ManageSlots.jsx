import useAuth from "../../../Hooks/useAuth";
import useTrainer from "../../../Hooks/useTrainer";
import TrainerSlots from "./TrainerSlots";

const ManageSlots = () => {
    const { user } = useAuth()
    const [trainers] = useTrainer()

    console.log(trainers);
    console.log(user);

    const trainerSlotEmail = trainers.filter(trainer => trainer.email === user?.email)

    console.log(trainerSlotEmail);




    return (
        <div>
            {
                trainerSlotEmail.map(slots => <TrainerSlots
                    key={slots._id}
                    slots={slots}
                ></TrainerSlots>)
            }
        </div>
    );
};

export default ManageSlots;