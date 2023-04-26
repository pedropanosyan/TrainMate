import {useState, useCallback} from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Workout from "./Workout";
import {toast} from "react-toastify";


const Routine = ({handleCreateRoutine, value}) => {

    const [showInputs, setShowInputs] = useState(false);
    const [routineName, setRoutineName] = useState("");
    const [routineWorkouts, setRoutineWorkouts] = useState([]);


    const handleNewRoutineClick = () => {
        setShowInputs(true);
    };

    const handleNameChange = (event) => {
        setRoutineName(event.target.value);
    };

    const handleAddWorkout = () => {
        setRoutineWorkouts([...routineWorkouts, {routineWorkout: '', sets: 0, reps: 0, muscleSelected: ''}]);
    };

    const handleEndRoutineClick = async () => {
        if (!routineName) {
            toast.error('Please complete all required fields');
            return
        }
        const token = localStorage.getItem('token');

        const newRoutine = {name: routineName, workouts: routineWorkouts, token};
        try {
            await axios.post("http://localhost:8080/userRoutine", newRoutine);
            console.log(newRoutine)
        } catch (error) {
            console.error(error);
        } finally {
            handleCreateRoutine(!value);
            newRoutine.current.reset();
            window.location.reload()
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowInputs(false);
    };

    const handleCancel = () => {
        setShowInputs(false);
        setRoutineName("");
        setRoutineWorkouts([]);
    };
    const handleOnChange = useCallback((workout, index) => {
        const updatedWorkouts = [...routineWorkouts];
        updatedWorkouts[index] =  workout
        setRoutineWorkouts(updatedWorkouts);
    }, [routineWorkouts])

    return (
        <div>
            <Button className='m-3 ' variant="primary" onClick={handleNewRoutineClick}> New routine </Button>
            {showInputs && (
                <div className=' d-inline-flex border border-primary rounded p-3 mt-3'>
                    <form className='m-1' onSubmit={handleSubmit}>
                        <input className='mb-3' name="routineName" required placeholder="Enter routine name" onChange={handleNameChange} type="text" />
                        {routineWorkouts.map((workout,index) => (
                            <Workout index={index} handleOnChange={handleOnChange}/>
                            ))}
                        <Button className='m-2' variant="secondary" onClick={handleAddWorkout}>Add workout</Button>
                        <Button className='m-2' variant="secondary" type="submit" onClick={handleEndRoutineClick}> Create routine </Button>
                        <Button className='m-2' variant="secondary" onClick={handleCancel}> Cancel </Button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Routine;