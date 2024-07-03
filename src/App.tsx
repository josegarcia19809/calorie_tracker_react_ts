import Form from "./components/Form.tsx";
import {useReducer} from "react";
import {activityReducer, initialState} from "./reducers/activity-reducer.ts";

export default function App() {
    const [state, dispatch] = useReducer(activityReducer, initialState)

    return (
        <>
            <header className="bg-lime-600 py-3">
                <div className="max-w-4xl mx-auto flex justify-between">
                    <h1 className="text-center text-lg font-bold text-white uppercase">
                        Contador de calorías
                    </h1>
                </div>
            </header>

            <section className="bg-lime-500 py-20 px-5">
                {/*<p>{state.activities[0].name}</p>*/}
                <div className="max-w-4xl mx-auto">
                    <Form
                        dispatch={dispatch}
                    />
                </div>

            </section>
        </>
    );
}
