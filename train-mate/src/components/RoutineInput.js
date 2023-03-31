import { useRef, useState } from "react";
import axios from "axios";

    const RoutineInput = () => {
        const [showInputs, setShowInputs] = useState(false);
        const [workouts, setWorkouts] = useState([]);
        const [routineId, setRoutineId] = useState(null); // Agregamos un nuevo estado para guardar el ID de la rutina creada
        const formRef = useRef(null);

        const handleNewRoutineClick = async () => {
            try {
                const newRoutine = { isActive: true, workouts: [] }; // crear la nueva rutina vacía
                const response = await axios.post("http://localhost:8080/newRoutine", newRoutine); // enviar la nueva rutina al backend
                console.log(response.data);
                setRoutineId(response.data.id); // Guardamos el ID de la nueva rutina en el estado del frontend
            } catch (error) {
                console.error(error);
            }
            setShowInputs(true);
        };

        const handleSubmit = (event) => {
            event.preventDefault();
            const name = event.target[0].value;
            const series = parseInt(event.target[1].value);
            const reps = event.target[2].value;
            const newWorkout = { name, series, reps };
            setWorkouts([...workouts, newWorkout]);
            formRef.current.reset();
        };

        const handleEndRoutineClick = async () => {
            try {
                const response = await axios.put(
                    `http://localhost:8080/endRoutine/${routineId}`,
                    { workouts }
                );
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
            setShowInputs(false);
            setWorkouts([]);
            setRoutineId(null); // Una vez finalizada la rutina, eliminamos su ID del estado del frontend
        };

        return (
            <div>
                <button
                    style={{ marginLeft: "1100px", marginTop: "200px" }}
                    onClick={handleNewRoutineClick}
                >
                    New routine
                </button>

                {showInputs && (
                    <div style={{ color: "lightblue" }}>
                        <form
                            ref={formRef}
                            className="inp"
                            style={{ marginLeft: "1100px", marginTop: "100px" }}
                            onSubmit={handleSubmit}
                        >
                            <h4>Exc name</h4>
                            <input type="text" />
                            <h4> Series </h4>
                            <input type="number" />
                            <h4>Reps</h4>
                            <input type="text" />
                            <button
                                style={{
                                    marginLeft: "10px",
                                    fontSize: "0.8em",
                                    padding: "0.5em 1em",
                                    borderRadius: "0.5em",
                                    backgroundColor: "white",
                                    color: "black",
                                }}
                                onClick={handleSubmit}
                            >
                                ADD
                            </button>
                        </form>
                        <button
                            style={{
                                marginLeft: "90%",
                                marginTop: "10px",
                                fontSize: "0.8em",
                                padding: "0.5em 1em",
                                borderRadius: "0.5em",
                                backgroundColor: "white",
                                color: "black",
                            }}
                            onClick={handleEndRoutineClick}
                    >
                        END
                    </button>
                </div>
            )}
        </div>
    );
};

export default RoutineInput;