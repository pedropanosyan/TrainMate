import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../css/showRoutine.css';
import {Button, Col, Card, Container, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';


function ShowRoutine() {
    const [routines, setRoutines] = useState([]);
    const [editingExercise, setEditingExercise] = useState(null);

    useEffect(() => {
        const accessToken = localStorage.getItem('token');
        axios.get('http://localhost:8080/routines', {
            headers: {
                Authorization: accessToken
            }
        })
            .then(response => setRoutines(response.data))
            .catch(error => console.log(error));
    }, []);



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

    const handleRoutineState = async (routineId) => {
        const newRoutines = routines.map((r) => {
            if (r.id === routineId) {
                const updatedRoutine = { ...r, active: !r.active };
                updateRoutine(routineId);
                return updatedRoutine;
            }
            return r;
        });
        setRoutines(newRoutines);
    }

    const updateRoutine = async (routineId) => {
        try {
            await axios.put(
                `http://localhost:8080/updateRoutine/${routineId}`,
                {}
            );
        } catch (error) {
            console.log(error);
        }
    }

    const orderRoutines = (routines) => {
        const activeRoutines = routines.filter((routine) => routine.active);
        const inactiveRoutines = routines.filter((routine) => !routine.active);
        return [...activeRoutines, ...inactiveRoutines];
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
        <Container className="routines">
            <Row xs={1} md={2} lg={3} className="g-4">
                {orderRoutines(routines).map(routine => (
                    <Col key={routine.id}>
                        <Card style={{backgroundColor: routine.active ? 'lightgreen' : 'white'}}>
                            <Card.Body>
                                <div className="d-flex justify-content-end">
                                    <Button className={routine.active ? 'btn-success' : 'btn-secondary'}
                                            onClick={() => handleRoutineState(routine.id)}>
                                    {routine.active ? 'Active' : 'Inactive'} </Button>
                                </div>
                                <Card.Title> <h3>{routine.name}</h3></Card.Title>
                                <Card.Text className="card-text">
                                    {routine.workouts.map(workout => (
                                        <li key={workout.id}>
                                            <h5>{workout.routineWorkout}</h5>
                                            {editingExercise === workout.id ? (
                                                <form onSubmit={e => {
                                                    e.preventDefault();
                                                    const sets = e.target.sets.value;
                                                    const reps = e.target.reps.value;
                                                    handleEdit(workout.id, sets, reps);
                                                }}>
                                                    <div style={{ margin: "3x" }}>
                                                        <input type="number" name="sets" defaultValue={workout.sets} style={{ fontSize: "12px", width: "30px", marginRight: "5px" }} />
                                                        <input type="number" name="reps" defaultValue={workout.reps} style={{ fontSize: "12px", width: "30px", marginRight: "5px" }} />
                                                        <Button size='sm' type="submit">Guardar</Button>
                                                    </div>
                                                </form>
                                            ) : (
                                                <div style={{display: "inline"}}>
                                                    <p>Sets: {workout.sets}, Reps: {workout.reps}
                                                        <Button style={{marginLeft: "20px"}} size= "sm" onClick={() => setEditingExercise(workout.id)}>
                                                            <FontAwesomeIcon icon={faEdit} />
                                                        </Button>
                                                    </p>
                                                </div>
                                            )}
                                        </li>
                                    ))}

                                </Card.Text>
                                <div className="d-flex justify-content-between">
                                    <Button variant="primary"> Edit </Button>

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