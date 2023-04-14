import {useEffect, useState} from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';


const Routine = () => {

    const [showInputs, setShowInputs] = useState(false);
    const [routineName, setRoutineName] = useState("");
    const [routineWorkouts, setRoutineWorkouts] = useState([]);

    const muscleOptions = ['Arms', 'Chest', 'Abs', 'Legs', 'Back'];
    const [muscleSelected, setMuscleSelected] = useState(null);
    const [trains, setTrains] = useState([]);

    useEffect(() => {
        const accessToken = localStorage.getItem("token");
        axios
            .get(`http://localhost:8080/getTrains/${muscleSelected}`, {
                headers: {
                    token: accessToken,
                },
            })
            .then((response) => setTrains(response.data))
            .catch((error) => console.log(error));
    }, [muscleSelected]);



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
        setRoutineWorkouts([...routineWorkouts, {routineWorkout: '', sets: 0, reps: 0, muscleSelected: ''}]);
    };

    const handleEndRoutineClick = async () => {
        if (!routineName) {
            alert('Please complete all required fields');
            return
        }
        const token = localStorage.getItem('token');

        const newRoutine = {name: routineName, workouts: routineWorkouts, token};
        try {
            await axios.post("http://localhost:8080/userRoutine", newRoutine);
            console.log(newRoutine)
            window.location.reload();
        } catch (error) {
            console.error(error);
        } finally {
            newRoutine.current.reset();

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

    const handleMuscleChange = (event, index) => {
        setMuscleSelected(event.target.value);
        handleRoutineWorkoutChange(event, index)
    };


    return (
        <div>
            <Button className='m-3 ' variant="primary" onClick={handleNewRoutineClick}> New routine </Button>
            {showInputs && (
                <div className=' d-inline-flex border border-primary rounded p-3 mt-3'>
                    <form className='m-1' onSubmit={handleSubmit}>
                        <input className='mb-3' name="routineName" required placeholder="Enter routine name" onChange={handleNameChange} type="text" />
                        {routineWorkouts.map((workout, index) => (
                            <div key={index}>
                                <select className='m-1' name="muscleSelected" onChange={(event => {handleMuscleChange(event, index)})}>
                                    <option value=''>Select a muscle</option>
                                    {muscleOptions.map((option) => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                                <select name="routineWorkout" onChange={(event => {handleRoutineWorkoutChange(event, index)})}>
                                    <option value=""> Select a workout</option>
                                    {trains && trains.map(train => (
                                        <option key={train.id} value={train.name}>{train.name}</option>
                                    ))}
                                </select>
                                <input className='m-1' required name="sets" placeholder="Enter sets" onChange={(event) => handleRoutineWorkoutChange(event, index)} type="number" />
                                <input className='m-1' required name="reps" placeholder="Enter reps" onChange={(event) => handleRoutineWorkoutChange(event, index)} type="number" />
                            </div>
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