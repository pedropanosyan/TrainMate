import {useEffect, useState} from "react";
import axios from "axios";
import { RiCloseCircleLine } from 'react-icons/ri';


const Workout = ({ index, handleOnChange, handleWorkoutCancel }) => {
    const muscleOptions = ['Arms', 'Chest', 'Abs', 'Legs', 'Back'];
    const [muscle, setMuscle] = useState(null);
    const [trains, setTrains] = useState([]);
    const [routineWorkout, setRoutineWorkout] = useState("");
    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");

    useEffect(() => {
        const accessToken = localStorage.getItem("token");
        axios
            .get(`http://localhost:8080/getTrains/${muscle}`, {
                headers: {
                    token: accessToken,
                },
            })
            .then((response) => setTrains(response.data))
            .catch((error) => console.log(error));
    }, [muscle])

    useEffect(() => {
        if (reps !== "" && sets !== "" && routineWorkout !== ""){
            const workout = { routineWorkout, sets, reps, muscle }
            if(routineWorkout) {
                handleOnChange(workout, index)
            }
            else alert("Please complete all required fields")
        }
    }, [routineWorkout, sets, reps])


    const handleMuscleChange = (event) => {
        setMuscle(event.target.value);
    };

    const handleWorkoutNameChange = (event) => {
        setRoutineWorkout(event.target.value);
    }

    const handleSetsChange = (event) => {
        setSets(event.target.value);
    };


    const handleRepsChange = (event) => {
        const value = event.target.value;
        setReps(value)
    };
    
    function handleClose() {
        handleWorkoutCancel(index)
    }

    return(
    <div>

        <select  style={{height:'25px', width:'150px'}} required className='m-1' name="muscleSelected" onChange={(event => {handleMuscleChange(event)})}>
            <option value=''>Select a muscle</option>
            {muscleOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>

        <select style={{height:'25px', width:'150px'}} required className='m-1' name="routineWorkout" onChange={(event => {handleWorkoutNameChange(event)})}>
            <option value=""> Select a workout</option>
            {trains && trains.map(train => (
                <option  key={train.id} value={train.name}>{train.name}</option>
            ))}
        </select>
        <input style={{height:'25px', width:'100px'}} required className='m-1' name="sets" placeholder="Enter sets" onChange={(event) => handleSetsChange(event)} type="number" />
        <input style={{height:'25px', width:'100px'}} required className='m-1' name="reps" placeholder="Enter reps" onChange={(event) => handleRepsChange(event)} type="number" />
        <RiCloseCircleLine onClick={handleClose} style={{color: 'red', fontSize:'20px', backgroundColor:'transparent', border:'none', cursor: 'pointer'}}/>
    </div>
)
}
export default Workout;