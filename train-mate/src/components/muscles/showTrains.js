import React, {useEffect, useState} from "react";
import axios from "axios";
import {Button, Card, Col, Container, Row, Modal, Form} from "react-bootstrap";
import '../../css/showRoutine.css';
import { BiX } from 'react-icons/bi';
import Collapse from "react-bootstrap/Collapse";
import {toast} from "react-toastify";


function ShowTrains({muscle}) {

    const [trains, setTrains] = useState([]);

    const [showModal, setShowModal] = useState(false);

    const [series, setSeries] = useState('');
    const [repetitions, setRepetitions] = useState('');
    const [weight, setWeight] = useState('');

    const [boxStates, setBoxStates] = useState(Array(trains.length).fill(false));

    useEffect(() => {
        const accessToken = localStorage.getItem('token');
        axios.get(`http://localhost:8080/getTrains/${muscle}`, {
            headers: {
                token: accessToken
            }
        })
            .then(response => setTrains(response.data))
            .catch(error => console.log(error));
    }, [muscle, trains])
    
    const handleSave = async (trainId) => {
        if (!weight || !repetitions || !series){
            toast.error ("Please complete correctly all fields")
            return
        }
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

    const handleView = (id) => {
        const newState = [...boxStates];
        newState[id] = !newState[id];
        setBoxStates(newState);
    }

    return(
        <Container className="routines">
            <Row xs={1} md={3} lg={4} className="g-1">
                {trains.map(train => (
                    <Col key={train.id}>
                        <Card className='border-primary rounded border-1'>
                            <Card.Header className="text-end bg-secondary">
                                <Button variant="link" className="text-danger" onClick={() => {
                                    if (window.confirm("Are you sure you want to delete this train?")) {
                                        handleDelete(train.id);
                                    }
                                }}>
                                    <BiX size={30} className=" shadow fs-3" />
                                </Button>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title> <h3>{train.name}</h3></Card.Title>
                                <div className="d-flex justify-content-between">
                                    <Button  onClick={() => handleView(train.id)} variant="outline-primary">View</Button>
                                    <Button variant="outline-primary" onClick={() => setShowModal(train.id)}>Add workout</Button>

                                    <Modal show={showModal === train.id} onHide={() => setShowModal(false)}>
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
                                            <Button variant="primary" onClick={() => handleSave(train.id)}>Save</Button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                                <Collapse in={boxStates[train.id]}>
                                    <div className="mt-3">
                                        { train.trainWorkouts.map(workout => (
                                            <li style={{listStyle:'inside', listStylePosition:'initial'}}>
                                                <p style={{display:'inline', color:'#212529', textTransform:'capitalize', fontSize:'0.7em'}}
                                                   key={workout.id}> Date: {workout.date} Sets: {workout.sets}, Reps: {workout.reps}, Weight: {workout.weight}Kg
                                                </p>
                                            </li>
                                        ))}
                                    </div>
                                </Collapse>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ShowTrains;