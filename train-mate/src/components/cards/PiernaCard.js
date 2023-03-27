import {Button, Card, Col, Container} from "react-bootstrap";
import '../../css/Cards.css';


function PiernaCard() {
    return (
        <div className="App">
            <Container className='p-4 card-container'>
                <Col style={{width:'350px', height:'auto'}}>
                    <Card className="card-square border-primary">
                        <Card.Img className="card-img" variant="top" src={"Imagenes/piernas.jpg"} />
                        <Card.Body >
                            <Card.Title className="card-title"><h2>Pierna</h2></Card.Title>
                            <Card.Text className="card-text">
                                Track your arm progress and train smarter.
                            </Card.Text>
                            <div className="d-flex">
                                <Button className="m-auto" variant="primary">Enter</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
        </div>
    );

}

export default PiernaCard;