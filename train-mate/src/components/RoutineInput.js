import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RoutineInput = () => {
    const [showInputs, setShowInputs] = useState(false);
    const [routineName, setRoutineName] = useState("");
    const [routineWorkouts, setRoutineWorkouts] = useState([]);
    const navigate = useNavigate();

    const formRef = useRef(null);

    const handleNewRoutineClick = () => {
        setShowInputs(true);
    };

    const handleNameChange = (event) => {
        setRoutineName(event.target.value);
    };

    const handleRoutineWorkoutChange = (event, index) => {
        const { name, value } = event.target;
        const updatedWorkouts = [...routineWorkouts];
        updatedWorkouts[index][name] = value;
        setRoutineWorkouts(updatedWorkouts);
    };

    const handleAddWorkout = () => {
        setRoutineWorkouts([...routineWorkouts, { exercise: "", sets: 0, reps: "" }]);
    };

    const handleEndRoutineClick = async () => {
        try {
            const newRoutine = { name: routineName, workouts: routineWorkouts };
            await axios.post("http://localhost:8080/userRoutine", newRoutine);
            navigate("/routineList");
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        formRef.current.reset();
    };

    const handleCancel = () => {
        setShowInputs(false);
        setRoutineName("");
        setRoutineWorkouts([]);
    };

    return (
        <div>
            <button style={{ marginLeft: "1100px", marginTop: "200px" }} onClick={handleNewRoutineClick}>
                New routine
            </button>
            {showInputs && (
                <div>
                    <form
                        ref={formRef}
                        className="inp"
                        style={{ marginLeft: "1100px", marginTop: "100px" }}
                        onSubmit={handleSubmit}
                    >
                        <h4>Routine name</h4>
                        <input onChange={handleNameChange} type="text" />
                        <h4>Workouts</h4>
                        {routineWorkouts.map((workout, index) => (
                            <div key={index}>
                                <h5>Exercise</h5>
                                <input name="exercise" onChange={(event) => handleRoutineWorkoutChange(event, index)} type="text" />
                                <h5>Sets</h5>
                                <input name="sets" onChange={(event) => handleRoutineWorkoutChange(event, index)} type="number" />
                                <h5>Reps</h5>
                                <input name="reps" onChange={(event) => handleRoutineWorkoutChange(event, index)} type="text" />
                            </div>
                        ))}
                        <button onClick={handleAddWorkout}>Add workout</button>
                        <button
                            style={{
                                marginLeft: "10px",
                                fontSize: "0.8em",
                                padding: "0.5em 1em",
                                borderRadius: "0.5em",
                                backgroundColor: "white",
                                color: "black",
                            }}
                            type="submit"
                        >
                            ADD
                        </button>
                        <button style={{ marginLeft: "10px", fontSize: "0.8em", padding: "0.5em 1em", borderRadius: "0.5em" }} onClick={handleCancel}>
                            Cancel
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default RoutineInput;