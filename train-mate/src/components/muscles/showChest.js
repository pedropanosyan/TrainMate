import React, {useEffect, useState} from "react";
import axios from "axios";
import {Button, Card, Col, Container, Row, Modal, Form} from "react-bootstrap";
import '../../css/showRoutine.css';
import { BiX } from 'react-icons/bi';


function ShowChest({muscle}) {

    const [trains, setTrains] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [series, setSeries] = useState('');
    const [repetitions, setRepetitions] = useState('');
    const [weight, setWeight] = useState('');

    useEffect(() => {
        const accessToken = localStorage.getItem('token');
        axios.get(`http://localhost:8080/getTrains/${muscle}`, {
            headers: {
                token: accessToken
            }
        })
            .then(response => setTrains(response.data))
            .catch(error => console.log(error));
    }, [])
    const handleSave = async (trainId) => {
        const token = localStorage.getItem("token");
        const newTrain = {sets: series, reps: repetitions, weight: weight, token: token, id: trainId};
        try {
            await axios.post("http://localhost:8080/addTrainWorkout", newTrain);
        } catch (e) {
            console.log(e);
        } finally {
            setSeries("");
            setRepetitions("");
            setWeight("");
            setShowModal(false);
        }
    }
    const handleDelete = async (trainId) => {
        const accessToken = localStorage.getItem('token');
        try {
            await axios.delete(`http://localhost:8080/deleteTrain/${trainId}`, {
                headers: {
                    token: accessToken
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
                                    <Button variant="outline-primary">Delete</Button>
                                    <Button variant="outline-primary" onClick={() => setShowModal(true)}>
                                        Add train workout
                                    </Button>

                                    <Modal show={showModal} onHide={() => setShowModal(false)}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Enter Workout Information</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form>
                                                <Form.Group controlId="formSeries">
                                                    <Form.Label>Number of Series</Form.Label>
                                                    <Form.Control type="number" value={series} onChange={(e) => setSeries(e.target.value)} />
                                                </Form.Group>

                                                <Form.Group controlId="formRepetitions">
                                                    <Form.Label>Number of Repetitions</Form.Label>
                                                    <Form.Control type="number" value={repetitions} onChange={(e) => setRepetitions(e.target.value)} />
                                                </Form.Group>

                                                <Form.Group controlId="formWeight">
                                                    <Form.Label>Weight (in kg)</Form.Label>
                                                    <Form.Control type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
                                                </Form.Group>
                                            </Form>
                                        </Modal.Body>

                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
                                            <Button variant="primary" onClick={() => handleSave(train.id)}
                                            >Save</Button>
                                        </Modal.Footer>
                                    </Modal>
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