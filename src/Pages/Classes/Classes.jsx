import { useEffect } from "react";
import { useState } from "react";
import AdsBanner from "../../Component/AdsBanner/AdsBanner";
import WeeklySchedule from "./WeeklySchedule/WeeklySchedule";





const classNamees = () => {
    const [classNamees, setclassNamees] = useState([])

    useEffect(() => {
        fetch('/classNamees.json')
            .then(res => res.json())
            .then(data => setclassNamees(data))
    }, [])
    console.log(classNamees);


    return (
        <div>
            <AdsBanner></AdsBanner>
            <WeeklySchedule></WeeklySchedule>
           
        </div>
    );
};

export default classNamees;