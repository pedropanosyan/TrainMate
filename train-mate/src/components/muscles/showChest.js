import React, {useEffect, useState} from "react";
import axios from "axios";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import '../../css/showRoutine.css';
import { BiX } from 'react-icons/bi';

function ShowChest() {

    const [trains, setTrains] = useState([]);

    useEffect(() => {
        const accessToken = localStorage.getItem('token');
        const muscle = 'Chest';
        axios.get(`http://localhost:8080/getTrains/${muscle}`, {
            headers: {
                token: accessToken
            }
        })
            .then(response => setTrains(response.data))
            .catch(error => console.log(error));
    }, [])
    const handleDelete = async (trainId) => {
        const accessToken = localStorage.getItem('token');
        try {
            await axios.delete(`http://localhost:8080/deleteTrain/${trainId}`, {
                headers: {
                    Authorization: accessToken
                }
            });
            setTrains(trains.filter(train => train.id !== trainId));
        } catch (error) {
            console.log(error);
        }
    };

    return(
        <Container className="routines">
            <Row xs={1} md={2} lg={3} className="g-4">
                {trains.map(train => (
                    <Col key={train.id}>
                        <Card className='border-primary rounded border-1'>
                            <Card.Header className="text-end">
                                <Button variant="link" className="text-danger" onClick={() => {
                                    if (window.confirm("Are you sure you want to delete this train?")) {
                                        handleDelete(train.id);
                                    }
                                }}>
                                    <BiX size={20} />
                                </Button>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title> <h3>{train.name}</h3></Card.Title>
                                <Card.Text className="card-text">
                                    {train.trainWorkouts.map(workout => (
                                        <li key={workout.id}>
                                            <h5>{workout.trainName}</h5>
                                            <p>Sets: {workout.sets}, Reps: {workout.reps}</p>
                                        </li>
                                    ))}
                                </Card.Text>
                                <div className="d-flex justify-content-between">
                                    <Button variant="outline-primary">View</Button>
                                    <Button variant="outline-primary">Add train workout</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ShowChest;