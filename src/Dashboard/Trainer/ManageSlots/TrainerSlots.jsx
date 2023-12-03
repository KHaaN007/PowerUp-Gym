const TrainerSlots = ({ slots }) => {
    const { _id, name, availableTimeSlots, profileImage } = slots;
 

    return (
        <div>
            <h1>{name}This IS Slots</h1>
        </div>
    );
};

export default TrainerSlots;