import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../css/showRoutine.css';
import {Button, Col, Card, Container, Row} from "react-bootstrap";

function ShowRoutine() {
    const [routines, setRoutines] = useState([]);
    const [editingExercise, setEditingExercise] = useState(null);

    useEffect(() => {
        const accessToken = localStorage.getItem('token');
        console.log(accessToken)
        axios.get('http://localhost:8080/routines', {
            headers: {
                Authorization: accessToken
            }
        })
            .then(response => setRoutines(response.data))
            .catch(error => console.log(error));
    }, []);
        console.log(routines);


    const handleDelete = async (routineId) => {
        const accessToken = localStorage.getItem('token');
        try {
            await axios.delete(`http://localhost:8080/deleteRoutine/${routineId}`, {
                headers: {
                    Authorization: accessToken
                }
            });
            setRoutines(routines.filter(routine => routine.id !== routineId));
        } catch (error) {
            console.log(error);
        }
    };
    const handleEdit = async (routineId, excerciseId, sets, reps) => {
        const token = localStorage.getItem('token');

        axios.post(
            `http://localhost:8080/editRoutines/${routineId}`,
            { excerciseId, sets, reps },
            {
                headers: { Authorization: token }
            }
        )
            .then(response => {
                const updatedRoutines = routines.map(routine => {
                    const updatedWorkouts = routine.workouts.map(workout => {
                        if (workout.id === excerciseId) {
                            return { ...workout, sets, reps };
                        }
                        return workout;
                    });
                    return { ...routine, workouts: updatedWorkouts };
                });
                setRoutines(updatedRoutines);
                setEditingExercise(null);
            })
            .catch(error => console.log(error));
    };

    return (
        <Container className="routines" style ={{overflowY: "auto", height: "500px"}}>
            <Row xs={1} md={2} lg={3} className="g-4">
                {routines.map(routine => (
                    <Col key={routine.id}>
                        <Card className='border-primary rounded border-1'>
                            <Card.Body>
                                <div className="d-flex justify-content-end">
                                    {routine.isActive ? <span className="text-success">&#10003;</span> : <span className="text-danger">&#10004;</span>}
                                </div>

                                <Card.Title> <h3>{routine.name}</h3></Card.Title>
                                <Card.Text className="card-text">
                                    {routine.workouts.map(workout => (
                                        <li key={workout.id}>
                                            <h5>
                                                {workout.routineWorkout}{' '}
                                                {editingExercise === workout.id && (
                                                    <form onSubmit={e => {
                                                        e.preventDefault();
                                                        const sets = e.target.sets.value;
                                                        const reps = e.target.reps.value;
                                                        handleEdit(workout.id, sets, reps);
                                                    }}>
                                                        <input type="number" name="sets" defaultValue={workout.sets} />
                                                        <input type="number" name="reps" defaultValue={workout.reps} />
                                                        <button type="submit">Guardar</button>
                                                    </form>
                                                )}
                                            </h5>
                                            {editingExercise !== workout.id && (
                                                <p>
                                                    Sets: {workout.sets}, Reps: {workout.reps}{' '}
                                                    <Button onClick={() => setEditingExercise(workout.id)}>Editar</Button>
                                                </p>
                                            )}
                                        </li>
                                    ))}
                                </Card.Text>
                                <div className="d-flex justify-content-between">
                                    <Button variant="primary">Editar</Button>
                                    <Button onClick={() => handleDelete(routine.id)} variant="danger">Delete</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ShowRoutine;