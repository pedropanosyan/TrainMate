import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import {useHistory} from "react-router-dom";
import {useState} from "react";
import axios from 'axios';
function RegisterForm(){

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();



    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            username, email, password
        };
        axios.post('http://localhost:8080/user', formData)
            .then(function (response) {
                alert("User registered successfully");
                history.push('/home');
            })
            .catch(function (error) {
                console.log(error);
            });
        console.log(formData)
    };

    return (
        <Container className="mt-5 p-4 d-flex justify-content-center align-items-center">
            <Row style={{width:"90%", maxWidth:'600px', height:'90vh'}}>
                <Col>
                    <Card className="shadow-lg mx-auto"  style={{ border:'5px solid #8db5ff', borderRadius: "10px", width:"100%", opacity:'1', backgroundColor:'#e9ecef'}}>
                        <Card.Img variant="top" src='Imagenes/logo2.png' style={{ height: "200px", objectFit: "cover", width:'auto'}} />
                        <Card.Header className="p-3" style={{display:'flex', backgroundColor: "#8db5ff", justifyContent: "center" }}>
                            <h2 style={{ justifyContent: "center", color: "whitesmoke"}}>Register</h2>
                        </Card.Header>
                        <Card.Body style={{ display: "flex", flexWrap: 'wrap', justifyContent: "center" }}>
                            <Form style={{width:'100%'}}>
                                <Form.Group className="mb-3" controlId="formBasicUsername">
                                    <Form.Control onChange={handleUsernameChange} type="text" placeholder="Username"/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control onChange={handleEmailChange} type="email" placeholder="Email"/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control onChange={handlePasswordChange} type="password" placeholder="Password"/>
                                </Form.Group>
                            </Form>
                                <Button onClick={handleSubmit} className='m-3' variant="outline-danger" type="submit" style={{justifyContent:'center', width:'20%', minWidth:'100px'}}>Sign Up</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default RegisterForm;