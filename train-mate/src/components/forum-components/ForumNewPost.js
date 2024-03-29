import {Form, Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";

function ForumNewPost() {

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
            style={{ display: 'block', position: 'initial' }}
        >
            <div className="m-3">
                <Button variant="primary" onClick={handleIsAsking}>Add a question</Button>
            </div>
            {isAsking &&
                <Modal.Dialog size="lg">
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

export default ForumNewPost;