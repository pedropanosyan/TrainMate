import axios from "axios";
import {useEffect, useState} from "react";
import {Card, Col, Container, Form, Row, Toast} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {toast} from "react-toastify";
import Collapse from "react-bootstrap/Collapse";

function ShowQuestions() {

    const [questions, setQuestions] = useState([]);
    const [userAnswer, setUserAnswer] = useState("");
    const [showAnswer, setShowAnswer] = useState(Array(questions.length).fill(false));

    useEffect(() => {
        axios.get('http://localhost:8080/getQuestions')
            .then(response => setQuestions(response.data))
            .catch(error => console.log(error));
    }, [questions]);

    console.log(questions)

    const handleAnswer = (e) => {
      setUserAnswer(e.target.value);
    }

    const handleAnswerSubmit = (id) => {
        if (userAnswer !== ""){
            const formData = {answer: userAnswer}
            axios.post(`http://localhost:8080/addAnswer/${id}`, formData)
                .then(() => {
                    setUserAnswer("")
                    document.getElementById("answer").value = "";
                    toast.success("Answer submitted correctly")
                });
        }
        else { toast.warning("Complete the question field!")}
    }

    const handleView = (id) => {
        const newState = [...showAnswer];
        newState[id] = !newState[id];
        setShowAnswer(newState);
    }

    const handleDelete = async (id) => {
        if(window.confirm("Are you sure you want to delete the question?")) {
            try {
                const token = localStorage.getItem("token");
                await axios.delete(`http://localhost:8080/deleteQuestion/${id}/${token}`);
                setQuestions(questions.filter(question => question.id !== id));
            } catch (error) {
                toast.error("Cannot delete others questions!")
            }
        }
    }

    return (
        <Container>
            <Row lg={2}>
                {questions.map((question, index) => (
                    <Col>
                        <Toast onClose={()=>handleDelete(question.id)} key={index} className="border border-warning m-3" style={{width:'600px'}}>
                                <Toast.Header>
                                    <strong className="me-auto">{question.question}</strong>
                                    <small>{question.questionTime}</small>
                                </Toast.Header>
                                <Toast.Body>
                                        <Form.Group>
                                            <Form.Control id="answer" onChange={handleAnswer} required as="textarea" placeholder={"Write your answer"} rows={3} />
                                            <Button type="submit"  onClick={() => handleAnswerSubmit(question.id)} className="m-2 px-1 py-0 btn-sm float-end" variant="outline-warning">Submit answer</Button>
                                        </Form.Group>
                                </Toast.Body>
                            <Button onClick={() => handleView(question.id)} className="m-2 p-1" variant="warning">View answers</Button>
                            <Collapse in={showAnswer[question.id]}>
                                <div className="mt-3">
                                {question.answers.map((answer, index2) => (
                                <Card key={index2} className="m-2">
                                    <Card.Body>
                                        <Card.Text>{answer.answer}</Card.Text>
                                    </Card.Body>
                                </Card>
                                ))}
                                </div>
                            </Collapse>
                        </Toast>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ShowQuestions;

