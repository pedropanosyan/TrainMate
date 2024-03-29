import React, {useState} from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import axios from "axios";
import {toast} from "react-toastify";



function LoginForm() {

    let formData;
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const goToRegister = () => {
        window.location.assign("/register")
    }

    const handleSubmit = (event) => {
        event.preventDefault();
          formData = { username, password };
          axios.post('http://localhost:8080/userLogin', formData)
            .then(function (response) {
                const token = response.data.token;
                localStorage.setItem('token', token);
                window.location.assign('/home');
            })
            .catch(function (error) {
                toast.error("Wrong input fields, try again.");
            });
    };

    return (
        <Container className="mt-5 p-4 d-flex justify-content-center align-items-center">
            <Row id={'aca'} style={{width:"90%", maxWidth:'600px', height:'90vh'}}>
                <Col>
                    <Card className="shadow-lg mx-auto"  style={{ border:'5px solid #8db5ff', borderRadius: "10px", width:"100%", opacity:'1', backgroundColor:'#e9ecef'}}>
                        <Card.Img variant="top" src='Imagenes/logo2.png' style={{ height: "200px", objectFit: "cover", width:'auto'}} />
                        <Card.Header className="p-3" style={{display:'flex', backgroundColor: "#8db5ff", justifyContent: "center" }}>
                            <h2 style={{ justifyContent: "center", color: "whitesmoke"}}>Log In Now</h2>
                        </Card.Header>
                        <Card.Body style={{ display: "flex", flexWrap: 'wrap', justifyContent: "center" }}>
                            <Form style={{width:'100%'}}>
                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Control onChange={handleUsernameChange} type="text" placeholder="Username"/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control onChange={handlePasswordChange} type="password" placeholder="Password"/>
                            <div className="d-flex justify-content-center">
                                <Button onClick={handleSubmit} className='m-3' variant="outline-primary" type="submit" style={{justifyContent:'center', width:'20%', minWidth:'100px'}}>Log In</Button>
                                <Button onClick={goToRegister} className='m-3' variant="outline-danger" style={{justifyContent:'center', width:'20%', minWidth:'100px'}}>Sign Up</Button>
                            </div>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginForm;
