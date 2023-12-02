const TrainerSlots = ({ slots }) => {
    const { _id, name, availableTimeSlots, profileImage } = slots;
    console.log(slots);
    console.log(_id);
    // console.log(availableTimeSlots.);
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default TrainerSlots;