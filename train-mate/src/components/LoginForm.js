import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

function LoginForm() {
    return (
        <Container className="mt-5 p-4 d-flex justify-content-center align-items-center">
            <Row style={{width:"90%", maxWidth:'600px', height:'100vh'}}>
                <Col>
                    <Card className="shadow-lg mx-auto"  style={{ border:'5px solid #8db5ff', borderRadius: "10px", width:"100%", opacity:'1', backgroundColor:'#e9ecef'}}>
                        <Card.Img variant="top" src='Imagenes/logo2.png' style={{ height: "200px", objectFit: "cover", width:'auto'}} />
                        <Card.Header className="p-3" style={{display:'flex', backgroundColor: "#8db5ff", justifyContent: "center" }}>
                            <h2 style={{ justifyContent: "center", color: "whitesmoke"}}>Log In Now</h2>
                        </Card.Header>
                        <Card.Body style={{ display: "flex", flexWrap: 'wrap', justifyContent: "center" }}>
                            <Form style={{width:'100%'}}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email"/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password"/>
                                </Form.Group>
                            </Form>
                            <Button className='m-3' variant="outline-primary" type="submit" style={{justifyContent:'center', width:'20%', minWidth:'100px'}}>LogIn</Button>
                            <Button className='m-3' variant="outline-danger" type="submit" style={{justifyContent:'center', width:'20%', minWidth:'100px'}}>SignUp</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginForm;
