import {useEffect, useRef, useState} from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';

const Routine = () => {
    const [showInputs, setShowInputs] = useState(false);
    const [routineName, setRoutineName] = useState("");
    const [routineWorkouts, setRoutineWorkouts] = useState([]);
    const [trains, setTrains] = useState([]);
    const [selectedMuscle, setSelectedMuscle] = useState('');

    const muscleOptions = ['Arms', 'Chest', 'Abs', 'Legs', 'Back'];

    useEffect(() => {
        const accessToken = localStorage.getItem("token");
        axios
            .get(`http://localhost:8080/getTrains/${selectedMuscle}`, {
                headers: {
                    token: accessToken,
                },
            })
            .then((response) => setTrains(response.data))
            .catch((error) => console.log(error));
    }, [selectedMuscle]);


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
        if (event.target.tagName === "SELECT") {
            updatedWorkouts[index] = {...updatedWorkouts[index], [name]: value, selectedWorkoutMuscle: selectedMuscle};
        } else {
            updatedWorkouts[index] = {...updatedWorkouts[index], [name]: value};
        }
        setRoutineWorkouts(updatedWorkouts);
    };

    const handleAddWorkout = () => {
        setRoutineWorkouts([...routineWorkouts, { routineWorkout: '', sets: 0, reps: 0 }]);
    };

    const handleEndRoutineClick = async () => {
        if (!routineName || !routineWorkouts.every((workout) => workout.routineWorkout && workout.sets && workout.reps)) {
            return
        }
        const token = localStorage.getItem('token');

        const newRoutine = { name: routineName, workouts: routineWorkouts, token};
        try {
            await axios.post("http://localhost:8080/userRoutine", newRoutine);
            window.location.reload();
        } catch (error) {
            console.error(error);
        } finally {
            formRef.current.reset();
            setRoutineName("");
            setRoutineWorkouts([]);
            setShowInputs(false);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        formRef.current.reset();
        setShowInputs(false);
    };

    const handleCancel = () => {
        setShowInputs(false);
        setRoutineName("");
        setRoutineWorkouts([]);
    };
    const handleSelectChange = (event) => {
        setSelectedMuscle(event.target.value);
        setTrains([]);
    };

    return (
        <div>
            <Button className='m-3 ' variant="primary" onClick={handleNewRoutineClick}> New routine </Button>
            {showInputs && (
                <div className=' d-inline-flex border border-primary rounded p-3 mt-3'>
                    <form className='m-1' ref={formRef} onSubmit={handleSubmit}>
                        <input className='mb-3' name="routineName" required placeholder="Enter routine name" onChange={handleNameChange} type="text" />
                            {routineWorkouts.map((workout, index) => (
                                    <div key={index}>
                                        <select className='m-1' required value={workout.selectedMuscle} onChange={(event) => {
                                            setSelectedMuscle(event.target.value);
                                            handleRoutineWorkoutChange(event, index);
                                        }}>
                                            <option value=''>Select a muscle</option>
                                            {muscleOptions.map((option) => (
                                                <option key={option} value={option}>{option}</option>
                                            ))}
                                        </select>
                                        <select className='m-1' required name="routineWorkout" placeholder="Enter workout name" onChange={(event) => handleRoutineWorkoutChange(event, index)}>
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
