import {Container} from "react-bootstrap";
import Answer from "./Answer";
import axios from "axios";
import {useState, useEffect} from "react";
import {toast} from "react-toastify";
import AddAnswer from "./AddAnswer";

function Answers({questionId}) {

    const [question, setQuestion] = useState([])
    const [answers, setAnswers] = useState([])
    const [again, setAgain] = useState(false);

    useEffect(() => {
        const id = parseInt(questionId);
        axios.get(`http://localhost:8080/getQuestionsById/${id}`)
            .then(response => {
                setQuestion(response.data);
                setAnswers(response.data.answers);
                console.log(response.data)
                console.log(question)
                console.log(answers)
            })
            .catch(error => console.log(error));
    }, [again]);

    const handleAnswerSubmit = (userAnswer, id) => {
        if (userAnswer !== ""){
            const token = localStorage.getItem('token');
            const formData = {answer: userAnswer, token: token}
            axios.post(`http://localhost:8080/addAnswer/${id}`, formData)
                .then(() => {
                    updateAnswers(userAnswer)
                    document.getElementById("answer").value = "";
                    toast.success("Answer submitted correctly")
                    setAgain(!again)
                });
        }
        else { toast.warning("Complete the question field!")}
    }

    function updateAnswers(element){
        const newAnswers =[...answers, element]
        setAnswers(newAnswers);
    }

    return (
            <Container>
                <AddAnswer handleAnswerSubmit={handleAnswerSubmit} question={question}/>
                {answers.map((answer, index) => (
                    <Answer answer={answer}/>
                ))}
            </Container>
        )


}

export default Answers;