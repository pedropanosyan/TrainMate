import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../css/showRoutine.css';
import {Button, Col, Card, Container, Row} from "react-bootstrap";

function ShowRoutine() {
    const [routines, setRoutines] = useState([]);

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

    return (
        <Container className="routines">
            <Row xs={1} md={2} lg={3} className="g-4">
                {routines.map(routine => (
                    <Col>
                        <Card className='border-primary rounded border-1'>
                            <Card.Body>
                                <Card.Title> <h3>{routine.name}</h3></Card.Title>
                                <Card.Text className="card-text">
                                    {routine.workouts.map(workout => (
                                        <li>
                                            <h5>{workout.routineWorkout}</h5>
                                            <p>Sets: {workout.sets}, Reps: {workout.reps}</p>
                                        </li>
                                    ))}
                                </Card.Text>
                                <div className="d-flex justify-content-between">
                                    <Button variant="primary">Editar</Button>
                                    <Button variant="danger">Eliminar</Button>
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