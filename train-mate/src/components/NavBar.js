import {Container, Nav, Navbar, Image, NavDropdown} from 'react-bootstrap';
import axios from "axios";
import {useEffect, useState} from "react";
import { FaUserCircle } from "react-icons/fa";


function NavBar() {

    const currentPath = window.location.pathname;
    const [user, setUser] = useState("");

    const handleSignOut = (event) => {
        event.preventDefault();
        const token = localStorage.getItem("token");
        axios.post('http://localhost:8080/userSignOut', token)
            .then(function (response) {
                localStorage.clear();
                window.location.assign("/login");
            })
            .catch(function (error) {
            })
    }

    const toRoutine = () => {
      window.location.assign('/routines');
    }

    const toHome = () => {
      window.location.assign('/home');
    }

    const toForum = () => {
        window.location.assign("/forum");
    }
    const toView = () => {
        window.location.assign("/view")
    }

    useEffect(() => {
        const token = localStorage.getItem("token")
        axios.get('http://localhost:8080/getUser', {
            headers: {
                token: token
                }
            })
            .then(response => setUser(response.data))
            .catch(error => console.log(error));
    }, []);


    return (
        <>
            <Navbar bg="dark" expand="xl" variant="dark" style={{backgroundColor:'#212529'}}>
                    <Container>                    
                    <img
                        src="Imagenes/logo2.png"
                        alt="TrainMate logo"
                        width="60"
                        height="60"
                        className='d-inline block align top'
                        style={{marginRight: '10px', marginBottom: '15px'}}
                        /> 
                    <Navbar.Brand className='navBar-brand' href="#home">
                         <p style={{color: '#f8f8f8', fontSize: '2em'}}>Train<span style={{color:'#8db5ff'}}>Mate</span></p>
                         </Navbar.Brand>

                     
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" style={{ color: 'white', fontSize: '1.4em', marginLeft: '10%', marginTop: '-12px', justifyContent: 'space-between' }}>
                            <Nav.Link className={`nav-link ${currentPath === '/home' ? 'active' : ''}`} onClick={toHome} style={{ marginRight: '50px' }}>Home</Nav.Link>
                            <Nav.Link className={`nav-link ${currentPath === '/routines' ? 'active' : ''}`} onClick={toRoutine} style={{ marginRight: '50px' }}>Routines</Nav.Link>
                            <Nav.Link className={`nav-link ${currentPath === '/view' ? 'active' : ''}`} onClick={toView} style={{ marginRight: '50px' }}>Progress</Nav.Link>
                            <Nav.Link className={`nav-link ${currentPath === '/forum' ? 'active' : ''}`} onClick={toForum} style={{ marginRight: '50px' }}>Forum</Nav.Link>
                            {/* <Nav.Link onClick={handleSignOut} href="/login">Sign Out</Nav.Link> */}
                            <NavDropdown title="Account" id="navbarScrollingDropdown">
                            {/* <p style={{fontSize:'0.8em', color:'lightblue', margin: '14px 14px 14px 150px'}}> {user}<FaUserCircle style={{marginLeft: "5px"}} size={24} /> </p> */}
                            <p style={{color: 'black', margin: '0px 00px 0px 0px'}}> Logged in as: {user}</p>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/login"> Sign Out </NavDropdown.Item>
            </NavDropdown>
                        </Nav>
                        </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    );
}

export default NavBar