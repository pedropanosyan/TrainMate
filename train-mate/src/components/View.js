import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";

function ViewCard() {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        const accessToken = localStorage.getItem('token');
        axios.get("http://localhost:8080/getTrainWorkouts", {
            headers: {
                token: accessToken
            }
        })
            .then(response => setWorkouts(response.data))
            .catch(error => console.log(error));
    }, []);
    console.log(workouts)
    const rectangleStyle = {
        width: '90%',
        backgroundColor: 'lightblue',
        color: 'black',
        textTransform: 'capitalize',
        fontSize: '0.7em',
        borderRadius: '10px',
        padding: '10px',
        margin: '0 auto 10px',
    };
    return (
        <div>
            {workouts.map(workout => (
                <div key={workout.id} className="mt-3">
                    <li style={{ listStyle: 'inside', listStylePosition: 'initial' }}>
                        <div style={rectangleStyle}>
                            <div>
                                <span>{workout.muscle}:      {workout.trainName}</span>
                                <span style={{marginLeft: '60px'}}>Reps: {workout.reps}</span>
                                <span style={{marginLeft: '60px'}}>Weight: {workout.weight}Kg</span>
                                <span style={{marginLeft: '60px'}}>Sets: {workout.sets}</span>
                                <span style={{marginLeft: '60px'}}> Date: {workout.date}</span>
                            </div>
                        </div>
                    </li>
                </div>
            ))}
        </div>
    );
}

export default ViewCard;
