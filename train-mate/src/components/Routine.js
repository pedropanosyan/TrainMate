import {useRef, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Routine = () => {

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
        updatedWorkouts[index] = {...updatedWorkouts[index], [name]: value};
        setRoutineWorkouts(updatedWorkouts);
    };

    const handleAddWorkout = () => {
        setRoutineWorkouts([...routineWorkouts, {routineWorkout: '', sets: 0, reps: 0}]);
    };

    const handleEndRoutineClick = async () => {
        try {
            const newRoutine = { name: routineName, workouts: routineWorkouts };
            console.log(newRoutine)
            await axios.post("http://localhost:8080/userRoutine", newRoutine);
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
            <button onClick={handleNewRoutineClick}> New routine </button>
            {showInputs && (
                <div>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input name="routineName" required placeholder="Enter routine name" onChange={handleNameChange} type="text" />
                        {routineWorkouts.map((workout, index) => (
                            <div key={index}>
                                <input required name="routineWorkout" placeholder="Enter workout name" onChange={(event) => handleRoutineWorkoutChange(event, index)} type="text" />
                                <input required name="sets" placeholder="Enter sets" onChange={(event) => handleRoutineWorkoutChange(event, index)} type="number" />
                                <input required name="reps" placeholder="Enter reps" onChange={(event) => handleRoutineWorkoutChange(event, index)} type="number" />
                            </div>
                        ))}
                        <button onClick={handleAddWorkout}>Add workout</button>
                        <button type="submit" onClick={handleEndRoutineClick}> Create routine </button>
                        <button onClick={handleCancel}> Cancel </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Routine;