import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../css/showRoutine.css';
import {Button, Col, Card, Container, Row} from "react-bootstrap";


function ShowRoutine() {
    const [routines, setRoutines] = useState([]);

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
                const updatedRoutine = { ...r, isActive: !r.isActive };
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
        const activeRoutines = routines.filter((routine) => routine.isActive);
        const inactiveRoutines = routines.filter((routine) => !routine.isActive);
        return [...activeRoutines, ...inactiveRoutines];
    };

    return (
        <Container className="routines">
            <Row xs={1} md={2} lg={3} className="g-4">
                {orderRoutines(routines).map(routine => (
                    <Col key={routine.id}>
                        <Card className='border-primary rounded border-1'>

                            <Card.Body>
                                <div className="d-flex justify-content-end">
                                    <Button className={routine.isActive ? 'btn-success' : 'btn-secondary'}
                                            onClick={() => handleRoutineState(routine.id)}>
                                    {routine.isActive ? 'Active' : 'Inactive'} </Button>
                                </div>
                                <Card.Title> <h3>{routine.name}</h3></Card.Title>
                                <Card.Text className="card-text">
                                    {routine.workouts.map(workout => (
                                        <li key={workout.id}>
                                            <h5>{workout.routineWorkout}</h5>
                                            <p>Sets: {workout.sets}, Reps: {workout.reps}</p>
                                        </li>
                                    ))}
                                </Card.Text>
                                <div className="d-flex justify-content-between">
                                    <Button variant="primary">Edit</Button>
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