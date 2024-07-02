import {categories} from "../data/categories.ts";
import {useState} from "react";

function Form() {

    const [activity, setActivity] = useState({
        category: 1,
        name: "",
        calories: 0
    });

    return (
        <form
            className="space-y-5 bg-white shadow p-10 rounded-lg"
        >
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">Categoría: </label>
                <select
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    id="category"
                    value={activity.category}
                >
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="name" className="font-bold">Actividad: </label>
                <input
                    id="name"
                    type="text"
                    className="border border-slate-300 p-2 rounded-lg"
                    placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio"
                    value={activity.name}
                />
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories" className="font-bold">Calorías: </label>
                <input
                    id="calories"
                    type="number"
                    className="border border-slate-300 p-2 rounded-lg"
                    placeholder="Ej. 300 o 500"
                    value={activity.calories}
                />
            </div>
            <input
                type="submit"
                className="bg-gray-800 hover:border-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer"
                value="Guardar comida o guardar ejercicio"
            />

        </form>
    );
}

export default Form;