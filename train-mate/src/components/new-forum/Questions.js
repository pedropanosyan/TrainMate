import axios from "axios";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import Question from "./Question";
import AskQuestion from "./AskQuestion";
import { Button, Pagination, Col, Row, Container } from 'react-bootstrap';


function Questions() {

    const [questions, setQuestions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const questionsPerPage = 8;
    const indexOfLastQuestion = currentPage * questionsPerPage;
    const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
    const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);



    useEffect(() => {
        axios.get('http://localhost:8080/getQuestions')
            .then(response => {
                const sortedQuestions = response.data.sort((a, b) => {
                    return new Date(b.date) - new Date(a.date);
                }).reverse();
                setQuestions(sortedQuestions);
            })
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
        <Container >
            <Row className="justify-content-md-center">
            <Col></Col>
                <Col sm={3}>
            <div div className="d-grid gap-2" >
                <AskQuestion onAdd={handleOnAdd} />
            </div>
                </Col>
                <Col sm></Col>
            </Row>       

            <Row>
                {currentQuestions.map((question, index) => (
                    <Question question={question} index={index} onDelete={handleDelete} />
                ))}
            </Row>
            <Row className="justify-content-md-center">
            <Col></Col>
                <Col sm={2} style={{marginTop: "20%"}}>
                <Pagination>
                    <Pagination.First onClick={() => setCurrentPage(1)} disabled={currentPage === 1} />
                    <Pagination.Prev
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                    />
                    {Array.from({ length: Math.ceil(questions.length / questionsPerPage) }).map((_, index) => (
                        <Pagination.Item
                            key={index + 1}
                            active={currentPage === index + 1}
                            onClick={() => setCurrentPage(index + 1)}
                        >
                            {index + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === Math.ceil(questions.length / questionsPerPage)}
                    />
                    <Pagination.Last
                        onClick={() => setCurrentPage(Math.ceil(questions.length / questionsPerPage))}
                        disabled={currentPage === Math.ceil(questions.length / questionsPerPage)}
                    />
                </Pagination>
                </Col>
                <Col></Col>

            </Row>
        </Container>

    );
}

export default Questions;

