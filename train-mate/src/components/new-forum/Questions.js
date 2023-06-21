import axios from "axios";
import {useEffect, useState} from "react";
import {Container, Row} from "react-bootstrap";
import {toast} from "react-toastify";
import Question from "./Question";
import AskQuestion from "./AskQuestion";

function Questions() {

    const [questions, setQuestions] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8080/getQuestions')
            .then(response => setQuestions(response.data))
            .catch(error => console.log(error));
    }, []);

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

    function handleOnAdd(){
        axios.get('http://localhost:8080/getQuestions')
            .then(response => setQuestions(response.data))
            .catch(error => console.log(error));
    }

    console.log(questions)

    return (
        <Container>
            <AskQuestion onAdd={handleOnAdd} />
            {questions.map((question, index) => (
                    <Question question={question} index={index} onDelete={handleDelete} />
                ))}
        </Container>
    );
}

export default Questions;

