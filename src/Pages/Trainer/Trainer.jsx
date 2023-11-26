import { useEffect } from "react";
import { useState } from "react";
import BeATrainer from "./BeATrainer/BeATrainer";


const Trainer = () => {

    const [trainer, setTrainer] = useState([])



    useEffect(() => {
        fetch('/trainers.json')
            .then(res => res.json())
            .then(data => {

                setTrainer(data)
            })
    }, [])

    console.log(trainer);




    return (
        <div>
           <BeATrainer></BeATrainer>
        </div>
    );
};

export default Trainer;