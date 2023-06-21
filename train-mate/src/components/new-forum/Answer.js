import {Card} from "react-bootstrap";

function Answer({answer}) {

    return(
        <Card className="m-2">
            <Card.Body>
                <div className="d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start">
                        <Card.Text><p className="m-0 p-0">Answered by {answer.author}</p></Card.Text>
                        <Card.Text><p className="m-0 p-0">{answer.date}</p></Card.Text>
                    </div>
                    <Card.Text className="mt-0">{answer.answer}</Card.Text>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Answer;