import {Activity} from "../types";
import {useMemo} from "react";

type CalorieTrackerProps = {
    activities: Activity[]
}

function CalorieTracker({activities}: CalorieTrackerProps) {

    // contadores
    const caloriesConsumed = useMemo(() => activities.reduce((total, activity) =>
        activity.category === 1 ? total + activity.calories : total, 0), [activities])
    return (
        <>
            <h2 className="text-4xl font-black text-white text-center">Resumen de calorías</h2>

            <div
                className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
                <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
                    <span className="font-black text-6xl text-orange-400">
                    {caloriesConsumed}
                    </span> Consumidas
                </p>
            </div>
        </>
    );
}

export default CalorieTracker;