import React, {useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";


function ModalTrain({id, workouts, show, showModal, saveInfo}){

    const [series, setSeries] = useState('');
    const [repetitions, setRepetitions] = useState('');
    const [weight, setWeight] = useState('');

    const workout = findWorkout(id, workouts);

    function findWorkout(id, workouts) {
        console.log(workouts)
        console.log(id)
        return workouts.find(workout => workout.id === id);

    }

    function handleCancel(){
        showModal();
    }

    function save() {
        saveInfo(series, repetitions, weight, workout.muscle, workout.routineWorkout)
    }

    return(
        <Modal show={show} onHide={showModal}>
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
                <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
                <Button variant="primary" onClick={save}>Save</Button>
            </Modal.Footer>
        </Modal>
)

}
export default ModalTrain;