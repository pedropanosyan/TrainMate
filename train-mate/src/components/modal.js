import React, {useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";


function ModalTrain(){

    const [series, setSeries] = useState('');
    const [repetitions, setRepetitions] = useState('');
    const [weight, setWeight] = useState('');


    return(
        <Modal>
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
        {/*    <Modal.Footer>*/}
        {/*        <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>*/}
        {/*        <Button variant="primary" onClick={() => handleSave(train.id, train.name)}>Save</Button>*/}
        {/*    </Modal.Footer>*/}
        </Modal>
)

}
export default ModalTrain;