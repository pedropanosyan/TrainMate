import {Container, Toast} from "react-bootstrap";
import './css/Question.css'


function Question({question, onDelete}) {

    function toAnswers() {
        const queryString = new URLSearchParams({ questionId: question.id }).toString();
        window.location.assign(`/discussion?${queryString}`);
    }


    return (
        <Container>
            <Toast onClose={()=>onDelete(question.id)} className="border border-primary m-3" style={{width:'80%'}}>
                <Toast.Header>
                    <a onClick={toAnswers} className="me-auto question-title">{question.question}</a>
                    <small>{question.questionTime}  Question by {question.author}</small>
                </Toast.Header>
            </Toast>
        </Container>
    );

}

export default Question