import {Container, Form, Toast} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useState} from "react";

function AddAnswer({question, handleAnswerSubmit}) {

    const [answer, setAnswer] = useState("")
    const [isAnswering, setIsAnswering] = useState(false);

    const handleAnswer = (e) => {
      setAnswer(e.target.value);
    }

    function submitAnswer() {
        handleAnswerSubmit(answer, question.id)

    }

    function handleIsAnswering() {
        setIsAnswering(!isAnswering);
    }

    return(
        <div style={{margin:'30px'}}>
            <h1 style={{color:'whitesmoke'}}>Discussion: {question.question}</h1>
            <div className="m-3">
                <Button variant="primary" onClick={handleIsAnswering}>Answer</Button>
            </div>
                {isAnswering &&
                    <Container>
                        <Toast style={{width:'50%'}}>
                            <Toast.Header>
                                <strong className="me-auto">{question.question}</strong>
                                <small>{question.questionTime} Question by {question.author}</small>
                            </Toast.Header>
                            <Toast.Body>
                                <Form.Group>
                                    <Form.Control id="answer" onChange={handleAnswer} required as="textarea"
                                                  placeholder={"Write your answer"} rows={3}/>

                                    <div className="d-flex justify-content-between">
                                        <Button onClick={handleIsAnswering} className="mt-2 justify-content-end" variant="danger">Cancel</Button>
                                        <Button type="submit" onClick={submitAnswer} className="mt-2 justify-content-end" variant="success">Submit answer</Button>
                                    </div>
                                </Form.Group>
                            </Toast.Body>
                        </Toast>
                    </Container>
            }
        </div>
            )

}

export default AddAnswer;