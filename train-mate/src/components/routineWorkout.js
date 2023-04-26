import {useState} from "@types/react";

function RoutineWorkout(workout, index) {

    return (
        <div key={index}>
            <select className='m-1' name="muscleSelected" onChange={(event => {handleMuscleChange(event, index)})}>
                <option value=''>Select a muscle</option>
                {muscleOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
            <select name="routineWorkout" onChange={(event => {handleRoutineWorkoutChange(event, index)})} >
                <option value=""> Select a workout</option>
                {trains && trains.map(train => (
                    <option key={train.id} value={train.name}>{train.name}</option>
                ))}
            </select>
            <input className='m-1' required name="sets" placeholder="Enter sets" onChange={(event) => handleRoutineWorkoutChange(event, index)} type="number" />
            <input className='m-1' required name="reps" placeholder="Enter reps" onChange={(event) => handleRoutineWorkoutChange(event, index)} type="number" />
        </div>
    )
}

export default RoutineWorkout;