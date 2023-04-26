import {useCallback, useEffect, useState} from "react";
import axios from "axios";

const Workout = ({ index, handleOnChange }) => {
    const muscleOptions = ['Arms', 'Chest', 'Abs', 'Legs', 'Back'];
    const [muscleSelected, setMuscleSelected] = useState(null);
    const [trains, setTrains] = useState([]);
    const [routineWorkout, setWorkoutName] = useState("");
    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");

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
    }, [muscleSelected])

    useEffect(() => {
        if (reps !== "" && sets !== "" && routineWorkout !== ""){
            const workout = { routineWorkout, sets, reps }
            if(routineWorkout) {
                handleOnChange(workout, index)
            }
            else alert("Please complete all required fields")
        }
    }, [routineWorkout, sets, reps])


    const handleMuscleChange = (event) => {
        setMuscleSelected(event.target.value);
    };

    const handleWorkoutNameChange = (event) => {
        setWorkoutName(event.target.value);
    }

    const handleSetsChange = (event) => {
        setSets(event.target.value);
    };


    const handleRepsChange = (event) => {
        const value = event.target.value;
        setReps(value)
    };

    return(
    <div>
        <select  style={{height:'25px', width:'150px'}} className='m-1' name="muscleSelected" onChange={(event => {handleMuscleChange(event)})}>
            <option value=''>Select a muscle</option>
            {muscleOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
        <select style={{height:'25px', width:'150px'}} className='m-1' name="routineWorkout" onChange={(event => {handleWorkoutNameChange(event)})} required>
            <option value=""> Select a workout</option>
            {trains && trains.map(train => (
                <option  key={train.id} value={train.name}>{train.name}</option>
            ))}
        </select>
        <input style={{height:'25px', width:'100px'}} className='m-1' required name="sets" placeholder="Enter sets" onChange={(event) => handleSetsChange(event)} type="number" />
        <input style={{height:'25px', width:'100px'}} className='m-1' required name="reps" placeholder="Enter reps" onChange={(event) => handleRepsChange(event)} type="number" />
    </div>
)
}
export default Workout;