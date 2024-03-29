import Button from "react-bootstrap/Button";
import {Form, Modal} from "react-bootstrap";
import {toast} from "react-toastify";
import axios from "axios";
import {useState} from "react";

function AskQuestion({onAdd}) {

    const [isAsking, setIsAsking] = useState(false);
    const [question, setQuestion] = useState("");

    const handleIsAsking = () => {
        setIsAsking(!isAsking);
    }

    const handleQuestion = (event) => {
        setQuestion(event.target.value);
    }

    const handleSubmit = () => {
        if (question === ""){
            toast.warning("Complete the field")
        }
        else {
            const token = localStorage.getItem("token")
            const data = {question, token}
            axios.post('http://localhost:8080/addQuestion', data)
                .then(function (response) {
                    onAdd()
                })
                .catch(function (error) {
                    toast.error(JSON.stringify(error.response.data));
                });
            setIsAsking(!isAsking);
            setQuestion("");
        }
    }

    const handleCancel = () => {
        setIsAsking(!isAsking)
    }

    return(
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}>
            <div className="d-grid gap-2 m-3 ">
                <Button size='lg' variant="primary" onClick={handleIsAsking}>Add a question</Button>
            </div>
            {isAsking &&
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Ask new question</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className="form-inline">
                            <Form.Group className="form-inline">
                                <Form.Control className="border border-primary" onChange={handleQuestion} type="post-title" placeholder="Post Question"/>
                            </Form.Group>
                            <div className="d-flex justify-content-between">
                                <Button onClick={handleSubmit} className="mt-2 justify-content-end" variant="primary">Submit</Button>
                                <Button onClick={handleCancel} className="mt-2 justify-content-end" variant="danger">Cancel</Button>
                            </div>
                        </Form>
                    </Modal.Body>
                </Modal.Dialog>
            }
        </div>
    )}

export default AskQuestion